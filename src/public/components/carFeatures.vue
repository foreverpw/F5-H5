<template>
  <div class="photos">
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
    <swiper :options="swiperOptionTexts" class="texts" ref="swiperTexts">
      <swiper-slide class="slide-1">
        <div class="title">律动：尖锋battle造型美学学</div>
        <div class="desc">极致运动轿跑SUV潮范十足，定义时尚</div>
      </swiper-slide>
      <swiper-slide class="slide-1">
        <div class="title">感动：激情运动，驾趣十足</div>
        <div class="desc">1.5GDIT+7DCT运动总成，专业底盘调教</div>
      </swiper-slide>
      <swiper-slide class="slide-1">
        <div class="title">心动：科技智联，潮酷先锋</div>
        <div class="desc">智能语音、智能娱乐、远程控制、智能出行</div>
      </swiper-slide>
      <swiper-slide class="slide-1">
        <div class="title">主动：铠甲守护，智能安全</div>
        <div class="desc small">盲点侦测系统配合360度全景影像，车辆偏离预警及车道保持LKA等安全配置，智能实时防护，全程无忧驾驶</div>
      </swiper-slide>
      <swiper-slide class="slide-1">
        <div class="title">倾动：极致专业，实力吸粉</div>
        <div class="desc small">2018年哈弗成为中国首个进入500万俱乐部的SUV品牌，创下连续9年蝉联中国SUV销量第一的记录</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import CrmForm from '../components/crmForm'
import topUrls from '../assets/imgs/page5/lights/top/*.jpg'
import bottomUrls from '../assets/imgs/page5/lights/bottom/*.png'
console.log(topUrls)
export default {
  components:{
    CrmForm
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      const swiperTexts = this.$refs.swiperTexts.swiper
      let vm = this
      swiperTop.on('slideChangeTransitionStart',function(){
        swiperTexts.slideTo(this.activeIndex)
      })
      swiperThumbs.on('slideChangeTransitionStart',function(){
        swiperTexts.slideTo(this.activeIndex)
      })
      swiperTop.controller.control = swiperThumbs
      // swiperTop.thumbs.swiper = swiperThumbs
      swiperThumbs.controller.control = swiperTop
      // swiperTexts.controller.control = swiperThumbs
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
        // autoplay: {
        //   delay: 2000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        // watchSlidesVisibility: true,
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
        // watchSlidesVisibility: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      swiperOptionTexts: {
        spaceBetween: 10,
        // centeredSlides: true,
        allowTouchMove:false,
        loop: true,
        loopedSlides: Object.keys(topUrls).length,
        // watchSlidesVisibility: true,
        // slidesPerView: 'auto',
        // touchRatio: 0.2,
        // slideToClickedSlide: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .photos{
    width:100%;
    .gallery {
      height: 21.68rem;
      width: 100%;
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
      padding: 0.6rem 0;
      margin-right: -0.6rem;
      .swiper-slide {
        width: 20%;
        padding-right:0.6rem;
        opacity: 0.4;
        img{
          height:100%;
          width: 100%;;
        }
      }
      .swiper-slide-active {
        opacity: 1;
      }
    }
    .texts{
      margin-top:1.26rem;
      box-sizing: border-box;
      padding-left:0.64rem;
      .slide-1 {
        width: 100%;
        // padding-right:0.6rem;
        color:rgba(255,255,255,1);
        .title{
          font-size:1.96rem;
          line-height:1.96rem;
          font-weight:600;
        }
        .desc{
          margin-top:0.84rem;
          font-size:1.31rem;
          line-height:1.31rem;
          opacity:0.68;
          &.small{
            font-size:1.05rem;
          }
        }
      }
    }
  }
</style>
