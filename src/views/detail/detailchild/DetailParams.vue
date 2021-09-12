<!-- 参数 -->
<template>
  <div class="detail-params">
    <div class="params-size">
      <div v-for="(item,index) in goodsParams.sizes" :key="index">
        <div class="size-item" v-for="(it,de) in item" :key="de">
          <span v-for="(i,d) in it" :key="d">{{i}}</span>
        </div>
      </div>
    </div>
    <div class="params-info">
      <div v-for="(item,index) in goodsParams.infos" :key="index">
        <span class="info-key">{{item.key}}</span>
        <span class="info-value">{{item.value}}</span>
      </div>
    </div>
    <div class="params-image">
      <img :src="goodsParams.image" alt="">
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
    goodsParams: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style  scoped>
.detail-params {
  border-top: 5px solid #eee;
  padding: 20px 15px;
  font-size: 15px;
}

.size-item,
.params-info div {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.size-item::after,
.params-info div::after {
  clear: both;
  content: '';
  display: block;
}/*解决浮动撑不开父盒子问题 */
.size-item span {
  display: block;
  float: left;
  width: 60px;
}
.size-item span:first-child {
  width: 30%;
}
.info-key {
  display: block;
  float: left;
  width: 30%;
}
.info-value {
  display: block;
  float: left;
  width: 70%;
  color: var(--color-high-text);
}

.params-image img {
  width: 100%;
}

</style>
