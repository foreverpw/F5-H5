<template>
  <bg :page="5">
    <div class="main">
      <div class="tabs" :class="[tabActiveClass]">
        <div class="fg">
          <div class="tab tab1" :class="{active:type==1}" @click="type=1">
            <img v-show="type==1" src="../assets/imgs/page5/lights/light-hover-icon.png" alt="" class="icon">
            <img v-show="type!=1" src="../assets/imgs/page5/lights/light-icon.png" alt="" class="icon">
            车型亮点
          </div>
          <div class="tab tab2" :class="{active:type==2}" @click="type=2">
            <img v-show="type==2" src="../assets/imgs/page5/lights/cars-hover-icon.png" alt="" class="icon">
            <img v-show="type!=2" src="../assets/imgs/page5/lights/cars-icon.png" alt="" class="icon">
            精品图集
          </div>
        </div>
      </div>
      <div class="slides">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn faster delay-200ms"
          leave-active-class="animated fadeOut faster"
        >
          <car-features class="child" v-if="type==1"></car-features>
        </transition>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn faster delay-200ms"
          leave-active-class="animated fadeOut faster"
        >
          <car-photos class="child" v-if="type==2"></car-photos>
        </transition>
      </div>
    </div>
  </bg>
</template>
<script>
import CrmForm from '../components/crmForm'
import CarFeatures from '../components/carFeatures'
import CarPhotos from '../components/carPhotos'
import bg from '../components/bg'
export default {
  components:{
    CrmForm,
    CarFeatures,
    CarPhotos,
    bg
  },
  mounted() {
    setTimeout(() => {
      this.type=1
    }, 1000);
  },
  computed:{
    tabActiveClass(){
      return 'state'+this.type
    }
  },
  data(){
    return {
      type:2,
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
  .main{
    margin-top:2.52rem;
    width:27.72rem;
    margin-left:1.2rem;
  }
  .tabs{
    position: relative;
    z-index: 99;
    height:4.12rem;
    background:linear-gradient(59deg,rgba(100,30,96,1),rgba(174,47,83,1));
    box-shadow:0rem 1rem 2rem 0rem rgba(0, 0, 0, 0.64);
    .fg{
      height:100%;
      display: flex;
      align-items: center;
      font-family: FZLTZHK--GBK1-0;
      font-size:1.44rem;
      font-weight: bold;
      color:#fff;
      .tab{
        flex:1;
        height:100%;
        display: flex;
        align-items: center;
        &.active{
          color:rgba(69, 50, 78, 1);
        }
        &.tab1{
          padding-left:1.44rem;
        }
        &.tab2{
          padding-left:3.2rem;
        }
        .icon{
          width: 1.6rem;
          margin-right:0.52rem;
        }
      }
    }
    &.state1 .fg::after{
      content: "";
      position: absolute;
      width: 100%;
      height:100%;
      left:0;
      top:0;
      z-index: -1;
      background: url(../assets/imgs/page5/lights/left-active-fg.png);
      background-size: cover;
    }
    &.state2 .fg::after{
      content: "";
      position: absolute;
      width: 100%;
      height:100%;
      left:0;
      top:0;
      z-index: -1;
      background: url(../assets/imgs/page5/lights/right-active-fg.png);
      background-size: cover;
    }
    .tab{
      height:100%;
      flex:1;
    }
  }
  .slides{
    width:27.72rem;
    position: relative;
    margin-top:1.52rem;
    .child{
      position: absolute;
      left:0;
      top:0;
    }
  }
  .delay-200ms{
    animation-delay: 0.2s;
  }
</style>
