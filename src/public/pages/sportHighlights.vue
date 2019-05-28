<template>
  <bg :page="4">
    <div class="main" :style="{height:height}">
      <img src="../assets/imgs/page4/title.png" alt="" class="title">
      <img src="../assets/imgs/page4/desc.png" alt="" class="desc">
      <div class="video-container">
        <!-- <fa class="icon" v-if="!playing()" icon="play"></fa> -->
        <video preload="auto" class="video video-js" id="game_video" ref="video" controls playsinline poster="../assets/videos/fp.jpeg">
          <source src="../assets/videos/game.mp4" type="video/mp4">
        </video>
        <!-- <video-player  class="video video-player-box"
                  ref="video"
                  :options="playerOptions"
                  :playsinline="true">
        </video-player> -->
      </div>
      <div class="img-list">
        <div v-for="(img,i) in imgs" :key="i" class="img" @click="preview(img)">
          <div class="info">历史赛事</div>
          <img v-lazy="img" alt="">
        </div>
      </div>
    </div>
  </bg>
</template>
<script>
// import videojs from 'video.js'
var videojsPromise = import('../lib/video.js')
import gameImgs from '../assets/imgs/sportHighlights/*.jpg'
import bg from '../components/bg'
export default {
  components:{
    bg
  },
  mounted() {
    videojsPromise.then(videojs=>{
      this.video = videojs('game_video')
      this.video.on("play", function (e) {
        window.bgMusic.pause()
      });
    })
    let vm = this
    function fn() {
      const width = document.documentElement.clientWidth || document.body.clientWidth;
      const height = document.documentElement.clientHeight || document.body.clientHeight;
      let ratio = height/width
      if(ratio>=1.6){
        vm.height='44.2rem'
      }else{
        vm.height='100%'
      }
    };
    window.addEventListener('resize', fn, false);
    document.addEventListener("DOMContentLoaded", fn, false);
  },
  data(){
    return {
      height:'100%',
      video:null,
      imgs:Object.values(gameImgs).map(i=>location.origin+'/'+i)
    }
  },
  methods:{
    preview(url){
      window.jsSDKReady.then(({wx})=>{
        wx.previewImage({
          current: url, // 当前显示图片的http链接
          urls:this.imgs// 需要预览的图片http链接列表
        });
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title{
      // margin-top:2.48rem;
      margin-top:1.6rem;
      width:11.56rem;
      height:2.72rem;
      margin-left: 1.32rem;
      display: block;
    }
    .desc{
      margin-top:0.56rem;
      margin-left: 1.56rem;
      width:25.64rem;
    }
    .img-list{
      margin-top:0.2rem;
      // margin-top:1.34rem;
      margin-left:0.76rem;
      display: flex;
      flex-wrap: wrap;
      .img{
        display: inline-block;
        width: 13.99rem;
        height:8.26rem;
        margin-right:0.44rem;
        margin-bottom: 0.36rem;
        padding:0.16rem;
        background:linear-gradient(62deg,rgba(28,24,216,1),rgba(245,27,109,1));
        overflow: hidden;
        position: relative;
        img{
          width: 100%;
          height:100%;
        }
        .info{
          position: absolute;
          background:rgba(12,11,16,1);
          opacity: 0.77;
          font-size:0.96rem;
          color: #fff;
          height:2.2rem;
          line-height:2.2rem;
          padding-left:1.32rem;
          width:calc(100% - 0.32rem);
          left:0.16rem;
          bottom:0.16rem;
        }
      }
    }
    .video-container{  //128 72
      margin-top:0.67rem;
      // margin-top:0.4rem;
      width: 28.28rem;
      height: 12.76rem;
      margin-left: 0.84rem;
      position: relative;
      padding:0.16rem;
      background:linear-gradient(62deg,rgba(28,24,216,1),rgba(245,27,109,1));
      .icon{
        font-size: 2rem;
        color:#ddd;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 99;
      }
      .video{
        width: 100%;
        height:100%;
      }
    }
  }
</style>
