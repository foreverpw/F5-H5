<template>
  <div class="features">
    <swiper :options="swiperOptionTop" class="gallery" ref="swiperTop">
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
      <swiper-slide class="slide-1"><img src="../assets/imgs/404.png" alt=""></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import CrmForm from '../components/crmForm'
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
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
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
    width:27rem;
    height:40rem;
    .gallery {
      height: 75%!important;
      width: 100%;
      .slide-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          height: 100%;
          // width: 100%;
        }
      }
    }
    .thumbs{
      height: 25%!important;
      box-sizing: border-box;
      padding: 10px 0;
      .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
        img{
          height:100%;
        }
      }
      .swiper-slide-active {
        opacity: 1;
      }
    }
  }
</style>
