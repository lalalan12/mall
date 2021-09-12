<!--  -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
export default {
  data () {
    return {
      scroll:{},
    }
  },
  props: {
    probeType:{
      type: Number,
      default: 0 
    }, //为3时才能监听位置
    pullUpLoad: {
      type: Boolean,
      default: false
    }, //为true才能加载更多
  },
  components: {
    BScroll
  },
  mounted(){
    //初始化
    this.scroll=new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听位置
   if(this.probeType==3){
      this.scroll.on('scroll',position=>{
      this.$emit('scroll',position)
    })
   }
    //加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      if(this.probeType==2 || this.probeType==3){
        this.scroll && this.scroll.finishPullUp()
      }
    },
    scrollTo(x,y,time=0){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    scrollSaveY(){
      return this.scroll ? this.scroll.y : 0
    }

  }
}
</script>

<style  scoped>

</style>
