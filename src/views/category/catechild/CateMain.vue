<!--  -->
<template>
  <div class="cate-main">
    <div class="left">
      <scroll class="left-content">
        <ul>
          <li v-for="(item,index) in category" :key="index">{{item.title}}</li>
        </ul>
      </scroll>
    </div>
    <div class="right">
      <div class="">
        <scroll class="right-content">
          <div class="subcate">
            <div class="subcate-item" v-for="(item,index) in subcategories.list" :key="index">
              <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
              </a>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
  data () {
    return {
    }
  },
  props: {
    category: {
      type: Array,
      default: []
    },
    subcategories: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style  scoped>



.left ul li {
  padding: 14px 0;
}
.left .left-content {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 25%;
  background-color: #f6f6f6;
  text-align: center;
  font-size: 15px;
  
}
.right-content {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 25%;
  right: 0;
  overflow: hidden;
  width: 75%;
  text-align: center;
  font-size: 15px;
}
.subcate {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.subcate-item {
  width: 30%;
  font-size: 14px;
  margin-top: 20px;
}
.subcate-item img {
  width: 65px;
}
.subcate-item div {
  margin-top: 20px;
}

</style>
