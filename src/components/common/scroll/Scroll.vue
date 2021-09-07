<!--  -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll:{}
    }
  },
  components: {
    BScroll
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      observeDOM: true,
      click:true
    })
  }
}
</script>

<style  scoped>

</style>
