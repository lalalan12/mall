<!-- 评论 -->
<template>
  <div class="detail-comment">
    <div class="comment-header">
      <span>用户评价</span>
      <span class="header-more">更多</span>
    </div>
    <div class="comment-all" v-for="(item,index) in commentInfo" :key="index">
      <div class="comment-user">
        <div class="user-logo">
          <img :src="item.user.avatar" alt="">
        </div>
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment-info">
        <p>{{item.content}}</p>
        <span class="info-time">{{dataFilter(item.created)}}</span>
        <span class="info-style">{{item.style}}</span>
      </div>
      <div class="comment-image">
        <div class="image-item" v-for="(i,d) in item.images" :key="d">
          <img :src="i" alt="" @load="imgLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/util.js'
export default {
  data () {
    return {
    }
  },
  props: {
    commentInfo: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    dataFilter(value){
      let date=new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    },
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style  scoped>
.detail-comment {
  padding: 20px 10px;
  border-top: 5px solid #eee;
  font-size: 15px;
}
.comment-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.header-more {
  position: relative;
  float: right;
  padding-right: 30px;
  font-size: 14px;
}
.header-more::after {
  content: '';
  position: absolute;
  top: 4px;
  right: 15px;
  width: 8px;
  height: 8px;
  border: 1px solid #aaa;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
}
.comment-user {
  margin: 10px 0;
}
.user-logo {
  float: left;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  overflow: hidden;
}
.user-logo img {
  width: 44px;
}
.comment-user span {
  line-height: 44px;
  margin-left: 10px;
}
.comment-info {
  margin-bottom: 10px;
}
.comment-info p {
  margin-bottom: 10px;
  line-height: 20px;
  color: #666;
}
.info-time {
  font-size: 13px;
  color: #888
}
.info-style {
  margin-left: 10px;
  font-size: 13px;
  color: #888
}




.comment-image {
  display: flex;
}
.image-item {
  margin-right: 5px;
  width: 70px;
  height: 70px;
  overflow: hidden;
}
.image-item img {
  width: 70px;
  height: 70px;
}

</style>
