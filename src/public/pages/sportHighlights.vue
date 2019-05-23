<template>
  <div class="game-section">
    <img v-for="(img,i) in imgs" :key="i" :src="img" alt="" @click="preview(img)">
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
</template>
<script>
import videojs from 'video.js'
import gameImgs from '../assets/imgs/sportHighlights/*.jpg'
export default {
  components:{
  },
  mounted() {
    // document.addEventListener("WeixinJSBridgeReady", ()=>{  
    //   this.$refs.video.play()
    // }, false);
    this.video = videojs('game_video')
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
  .game-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    img{
      width: 12rem;
    }
    .video-container{  //128 72
      width: 18rem;
      height: 10rem;
      position: relative;
      .icon{
        font-size: 2rem;
        color:#ddd;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 99;
      }
    }
    .video{
      width: 100%;
      height:100%;
    }
  }
</style>
