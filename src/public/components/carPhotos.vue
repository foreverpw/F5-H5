<template>
  <div class="features">
    <swiper :options="swiperOptionTop" class="gallery" ref="swiperTop">
      <swiper-slide class="slide-1" v-for="img in topUrls" :key="img">
        <img :src="img" alt="">
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1" v-for="img in bottomUrls" :key="img">
        <img :src="img" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import CrmForm from '../components/crmForm'
import topUrls from '../assets/imgs/page5/cars/top/*.jpg'
import bottomUrls from '../assets/imgs/page5/cars/bottom/*.png'
export default {
  components:{
    CrmForm
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  data(){
    return {
      topUrls,
      bottomUrls,
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: Object.keys(topUrls).length,
        autoplay: true,
        delay: 2000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        // spaceBetween: 10,
        // centeredSlides: true,
        loop: true,
        loopedSlides: Object.keys(topUrls).length,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .features{
    width:100%;
    .gallery {
      height: 21.68rem;
      width: 100%;
      box-shadow:0rem 1rem 2rem 0rem rgba(0, 0, 0, 0.35);
      .slide-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
    .thumbs{
      box-sizing: border-box;
      padding: 1.68rem 0;
      margin-right: -0.52rem;
      .swiper-slide {
        width: 20%;
        padding-right:0.52rem;
        // height: 4.3rem;
        opacity: 0.4;
        img{
          width:100%;
          height:100%;
        }
      }
      .swiper-slide-active {
        opacity: 1;
      }
    }
  }
</style>
