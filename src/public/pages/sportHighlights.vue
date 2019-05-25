<template>
  <bg :page="4">
    <div class="main">
      <img src="../assets/imgs/page4/title.png" alt="" class="title">
      <div class="img-list">
        <div v-for="(img,i) in imgs" :key="i" class="img" @click="preview(img)">
          <img :src="img" alt="">
        </div>
      </div>
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
    })
  },
  data(){
    return {
      video:null,
      imgs:Object.values(gameImgs).map(i=>location.href+i)
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
    .title{
      margin-top:3.08rem;
      width:11.56rem;
      height:2.72rem;
      margin-left: 1.32rem;
      display: block;
    }
    .img-list{
      margin-top:2.24rem;
      margin-left:0.76rem;
      .img{
        display: inline-block;
        width: 13.99rem;
        height:8.66rem;
        margin-right:0.44rem;
        margin-bottom: 0.36rem;
        padding:0.16rem;
        background:linear-gradient(62deg,rgba(28,24,216,1),rgba(245,27,109,1));
        overflow: hidden;
        img{
          width: 100%;
          height:100%;
        }
      }
    }
    .video-container{  //128 72
      margin-top:0.4rem;
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
