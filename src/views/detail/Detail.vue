<!--  -->
<template>
  <div class="datail">
    <detail-nav-bar :title="title" @itemIndex="itemIndex"/>
    <scroll ref="scroll" class="content" :probeType=3 @scroll="scrollPosition">
      <detail-swiper :topImages="topImages" @imgLoad="imgLoad"/>
      <detail-goods :goods="goods" />
      <detail-shop :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-params ref="params" :goodsParams="goodsParams" />
      <detail-comment ref="comment" :commentInfo="commentInfo" @imgLoad="imgLoad"/>
      <detail-recommend ref="recommend" :recommendList="recommendList" @imgLoad="imgLoad"/>
    </scroll>
    <back-top v-show="backTopIsShow" @backTop="backTop"/>
    <detail-buttom-bar />
  </div>
</template>

<script>

import { getDetailData, getRecommend, Goods, GoodsParams, Shop } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll.vue'

import DetailSwiper from './detailchild/DetailSwiper.vue'
import DetailNavBar from './detailchild/DetailNavBar.vue'
import DetailGoods from './detailchild/DetailGoods.vue'
import DetailShop from './detailchild/DetailShop.vue'
import DetailGoodsInfo from './detailchild/DetailGoodsInfo.vue'
import DetailParams from './detailchild/DetailParams.vue'
import DetailComment from './detailchild/DetailComment.vue'
import DetailRecommend from './detailchild/DetailRecommend.vue'
import DetailButtomBar from './detailchild/DetailButtomBar.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'



export default {
  components: { 
    Scroll,
    DetailSwiper, 
    DetailNavBar,
    DetailGoods,
    DetailShop,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailButtomBar,
    BackTop
  },
  data () {
    return {
      iid: null,
      title: ['商品','参数','评论','推荐'],
      topImages: [],//轮播图
      goods: {},//商品
      goodsParams: {},//参数
      shop: {},//店铺
      detailInfo: {},//详情
      commentInfo: [],//评论
      recommendList: {},//推荐
      paramsPosition: [],
      backTopIsShow: false,//回到顶部参数
    }
  },
  created(){
    this.iid=this.$route.query.iid
    this.getDetailDataA(this.iid)
    this.getRecommendA()
    
  },
  updated(){
    

  },
  methods: {

    itemIndex(index) {
      this.$refs.scroll.scrollTo(0,this.paramsPosition[index],200)
    },
    scrollPosition(position){
      //回到顶部是否显示
      this.backTopIsShow = position.y < -1000
    },
    imgLoad(){  
      this.$refs.scroll.refresh()
      this.paramsPosition = []
      this.paramsPosition.push(0)
      this.paramsPosition.push(-this.$refs.params.$el.offsetTop)
      this.paramsPosition.push(-this.$refs.comment.$el.offsetTop)
      this.paramsPosition.push(-this.$refs.recommend.$el.offsetTop)
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
 


    // 获取数据
    getDetailDataA(iid){
      getDetailData(iid).then(res=>{
        let result = res.result
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        this.goodsParams = new GoodsParams(result.itemParams.info, result.itemParams.rule)
        this.shop = new Shop(result.shopInfo)
        this.detailInfo = result.detailInfo
        if(result.rate.list){
          this.commentInfo = result.rate.list
        }
      })
    },
    getRecommendA(){
      getRecommend().then(res=>{
        this.recommendList = res.data.list
      })
    }
  }
}
</script>

<style  scoped>
.content {
  position: absolute;
  top: 50px;
  bottom: 60px;
  overflow: hidden;
}

</style>
