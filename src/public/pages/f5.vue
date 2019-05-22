<template>
  <div class="f5-section">
    <div class="tabs">
      <div class="tab" style="background:red" @click="type=1"></div>
      <div class="tab" style="background:blue" @click="type=2"></div>
    </div>
    <div class="content">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn faster delay-500ms"
        leave-active-class="animated fadeOut faster"
      >
        <car-features class="child" v-show="type==1"></car-features>
      </transition>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn faster delay-500ms"
        leave-active-class="animated fadeOut faster"
      >
        <car-photos class="child" v-show="type==2"></car-photos>
      </transition>
    </div>
  </div>
</template>
<script>
import CrmForm from '../components/crmForm'
import CarFeatures from '../components/carFeatures'
import CarPhotos from '../components/carPhotos'
export default {
  components:{
    CrmForm,
    CarFeatures,
    CarPhotos
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
      type:1,
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
  .f5-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:7rem;
  }
  .tabs{
    width:27rem;
    height:3rem;
    display: flex;
    align-items: center;
    .tab{
      height:100%;
      flex:1;
    }
  }
  .content{
    width:27rem;
    height:40rem;
    position: relative;
    .child{
      position: absolute;
      left:0;
      top:0;
    }
  }
  .delay-500ms{
    animation-delay: 0.5s;
  }
</style>
