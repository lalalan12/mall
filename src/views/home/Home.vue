<!--  -->
<template>
  <div class="home">
    <home-nav-bar />
    <goods-bar 
    class="goods-bar1" 
    :title="title" 
    @itemsBar="goodsBar" 
    :currentIndex="currentIndex1" 
    v-show="goodsBarIsShow"/>

    <scroll class="content" 
    :probeType=3 
    :pullUpLoad=true 
    @pullingUp="pullingUp"
    @scroll="scrollPosition"
    ref="scroll">

      <home-swiper :banner=banner />
      <home-recommend :recommend="recommend" /> 
      <home-recommend-bg />
      <goods-bar 
      :title="title"
      @itemsBar="goodsBar" 
      :currentIndex="currentIndex2" 
      v-show="!goodsBarIsShow" ref="goodsBar"/>

      <home-goods-show :goods="getGoodsBar" @imgLoad="imgLoad" />
    </scroll>
    <back-top v-show="backTopIsShow" @backTop="backTop"/>
  </div>
</template>

<script>

import {getHomeMultidata,getHomeGoods} from 'network/home'

import GoodsBar from 'components/content/goodsbar/GoodsBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop.vue'


import HomeSwiper from './homechild/HomeSwiper.vue'
import HomeNavBar from './homechild/HomeNavBar.vue'
import HomeRecommend from './homechild/HomeRecommend.vue'
import HomeRecommendBg from './homechild/HomeRecommendBg.vue'
import HomeGoodsShow from './homechild/HomeGoodsShow.vue'


export default {
  data () {
    return {
      banner: [],
      recommend: [],
      title: ['流行','新款','精选'],
      goods: {
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodsType:"pop",
      backTopIsShow: false,//回到顶部参数
      goodsBarFixed: true,//goodsBar定位
      currentIndex1: 0,
      currentIndex2: 0,
      goodsBarIsShow: false,
      goodsBarTop: 0,
      saveY: 0, //保存页面离开时的位置
    }
  },
  components: {
    GoodsBar,
    HomeSwiper,
    HomeRecommend,
    HomeRecommendBg,
    HomeNavBar,
    HomeGoodsShow,
    Scroll,
    BackTop,
  },
  computed:{
    getGoodsBar(){
      return this.goods[this.goodsType].list
    }
  },
  
  created(){
    //获取网络数据
    this.getHomeMultidataA()
    this.getHomeGoodsA('pop')
    this.getHomeGoodsA('new')
    this.getHomeGoodsA('sell')
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0) //再次打开时回到离开时的位置
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scrollSaveY() //获取页面离开时的位置
  },
  methods:{
    //goodsBar方法
    goodsBar(index){
      switch(index){
        case 0: 
        this.goodsType='pop'
        this.currentIndex1=index
        this.currentIndex2=index
        break
        case 1:
          this.goodsType='new'
          this.currentIndex1=index
          this.currentIndex2=index
          break
        case 2:
          this.goodsType='sell'
          this.currentIndex1=index
          this.currentIndex2=index
          break
      }
    },
    // 加载更多
    pullingUp(){
      this.getHomeGoodsA(this.goodsType)
    },
    //监听图片加载
    imgLoad(){  
      this.$refs.scroll.refresh()
    },
    //scroll位置
    scrollPosition(position){
      //回到顶部是否显示
      this.backTopIsShow = position.y < -1000
      // goodsBar显示
      this.goodsBarIsShow = position.y < -this.goodsBarTop 
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },


    //获取网络数据
    getHomeMultidataA(){
      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list
        this.recommend=res.data.recommend.list
        //下次更新dom时，获取新的goodsBarTop值
        this.$nextTick(() => {
            this.goodsBarTop = this.$refs.goodsBar.$el.offsetTop
        })
      })
    },
    getHomeGoodsA(type){
      let page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)//将数据放入list中
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
      })
    }
    
  },
}
</script>

<style  scoped>
.content{
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-bar1 {
  position: absolute;
}
</style>
