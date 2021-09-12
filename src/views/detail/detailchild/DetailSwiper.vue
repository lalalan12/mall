<template>
  <div class="detail-swiper">
    <swiper ref="swiper" v-if="topImages.length">
      <swiper-item class="swiper-item" v-for="(item, index) in topImages" :key="index">
          <img :src="item" alt="" @load="imgLoad">
      </swiper-item>
  </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

	export default {
		name: "DetailSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  topImages: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
	}
</script>

<style scoped>
.detail-swiper {
  z-index: 0;
}
.swiper-item {
  position: relative;
  text-align: center;
  height: 350px;
  overflow: hidden;
}
img {
  position: absolute;
  top: -85px;
  left: 0;
  width: 100%;
}
</style>
