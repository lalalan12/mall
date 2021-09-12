<!-- 商品详情 -->
<template>
  <div class="detail-gooods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div>{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-image" v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div v-for="(i,d) in item.list" :key="d">
        <img :src="i" alt="" @load="imgLoad">
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style  scoped>
.info-desc {
  position: relative;
  padding: 30px 10px;
  font-size: 15px;
}
.start {
  position: absolute;
  top: 13px;
  left: 13px;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.end {
  position: absolute;
  bottom: 13px;
  right: 13px;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.end::before {
  content: '';
  position: absolute;
  bottom: -2px;
  right: 0px;
  width: 90px;
  height: 2px;
  background-color: #ccc;
}
.start::after {
content: '';
  position: absolute;
  top: 5px;
  left : 0px;
  width: 90px;
  height: 2px;
  background-color: #ccc;
}
.info-key {
  position: relative;
  padding: 10px;
  padding-top: 0px;
}
.info-image img{
  width: 100%;
}

</style>
