<!--  -->
<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '加入成功'
    }
  },
  props: {
    isShow:{
      type: Boolean,
      default: false
    } 
  }
}
</script>

<style  scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgb(0,0,0,.7);
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
}

</style>
