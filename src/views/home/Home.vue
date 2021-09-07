<!--  -->
<template>
  <div class="home">
    <home-nav-bar />
    <scroll class="content">
      <home-swiper :banner=banner />
      <home-recommend :recommend="recommend" />
      <home-recommend-bg />
      <goods-bar :title="title" @itemsBar="goodsBar"/>
      <home-goods-show :goods="getGoodsBar" />
    </scroll>
  </div>
</template>

<script>

import {getHomeMultidata,getHomeGoods} from 'network/home'

import GoodsBar from 'components/content/goodsbar/GoodsBar'
import Scroll from 'components/common/scroll/Scroll'


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
      goodsType:"pop"
      
    }
  },
  components: {
    GoodsBar,
    HomeSwiper,
    HomeRecommend,
    HomeRecommendBg,
    HomeNavBar,
    HomeGoodsShow,
    Scroll
  },
  computed:{
    getGoodsBar(){
      return this.goods[this.goodsType].list
    }
  },
  methods:{
    //goodsBar方法
    goodsBar(index){
      switch(index){
        case 0: 
        this.goodsType='pop'
        break
        case 1:
          this.goodsType='new'
          break
        case 2:
          this.goodsType='sell'
          break
      }
    },
    //获取网络数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      let page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)//将数据放入list中
        this.goods[type].page++  
      })
    }
  },
  created(){
    //获取网络数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  }
}
</script>

<style  scoped>
.content{
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
