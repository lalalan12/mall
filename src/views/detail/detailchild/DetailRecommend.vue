<!-- 物品展示 -->
<template>
  <div class="detail-recommend">
    <div class="recommend-header">热门推荐</div>
    <div class="recommend-items">
      <div class="items-info" v-for="(item,index) in recommendList" :key="index">
        <img :src="item.image" alt="" @load="imgLoad">
        <div class="text">
          <p>{{item.title}}</p>
        <span class="price">￥{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iid: null,
      id: null
    }
  },
  props: {
    recommendList: {
      type: Object,
      default(){
        return null
      }
    }
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    },
    getDetail(item){
      this.iid=item.iid
      this.$router.push({
        path: '/detail',
        query: {  iid: this.iid}
      })
    }
  }
}
</script>

<style  scoped>
.recommend-items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.items-info{
  width: 47%;
  overflow: hidden;
}
.items-info img {
  width: 100%;
  border-radius: 8px;
}
.text {
  font-size: 12px;
  margin: 5px;
  text-align: center;
}
.text p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text .price{
  color: var(--color-high-text);
  margin-right: 25px;
}
.text .cfav {
  position: relative;
  margin-bottom: 12px;
}
.text .cfav::before{
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}

</style>
