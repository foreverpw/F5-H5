<template>
  <div class="app" v-show="!hideApp">
    <img src="./assets/imgs/0.jpg" alt="" class="share-icon">
    <!-- <audio style="display:none; height: 0" ref="bgMusic" id="bg_music" preload="auto" loop="loop"></audio> -->
    <div class="rotate-mask">
      请在竖屏模式下浏览
    </div>
    <Bmap></Bmap>
    <div class="header">
      <img src="./assets/imgs/logo.png" alt="" class="logo">
      <img v-show="!music.paused" src="./assets/imgs/music-on.png" alt="" class="music-control" @click="toggleBGM">
      <img v-show="music.paused" src="./assets/imgs/music-off.png" alt="" class="music-control" @click="toggleBGM">
      <img src="./assets/imgs/reserve.png" alt="" v-show="showReserveBtn" class="reserve-btn" @click="showModal=true">
    </div>
    <img src="./assets/imgs/icons/scroll.png" alt="" @click="$refs.fullpage.api.moveSectionDown()" 
    v-show="index<4" class="scroll-icon animated flash infinite">
    <form-modal :show.sync="showModal" @success="success"></form-modal>
    <success :show.sync="showSuccess"></success>
    <!-- <div class="reserve-btn" @click="showModal=true"></div> -->
    <!-- <div class="music-btn" @click="toggleBGM"></div> -->
    <full-page ref="fullpage" :options="options">
      <landing class="section"></landing>
      <event ref="event" class="section"></event>
      <reserve class="section"></reserve>
      <sport-highlights class="section"></sport-highlights>
      <f5 class="section"></f5>
      <!-- <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
        <input type="text">
      </div> -->
      <!-- <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 2
      </div> -->
      <!-- <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 3
      </div> -->
    </full-page>
  </div>
</template>

<script>
// import IosSelect from 'iosselect'
// import 'iosselect/src/iosSelect.css'
import Landing from './pages/landing'
import Event from './pages/event'
import Bmap from './pages/bmap'
import Reserve from './pages/reserve'
import F5 from './pages/f5'
import SportHighlights from './pages/sportHighlights'
import FormModal from './components/formModal'
import Success from './components/successModal/index'
import bgmUrl from './assets/bg.mp3'
import firstBG from './assets/imgs/bgs/bg1.jpg'

window.options = {
  licenseKey:'asdf',
  autoScrolling:true,
  scrollingSpeed:400,
  onLeave(origin, destination, direction){
  },
  // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
}
window.music = {
  paused:false
}

export default {
  components: {
    Landing,
    Event,
    Reserve,
    SportHighlights,
    FormModal,
    F5,
    Success,
    Bmap
  },
  created(){
  },
  mounted(){
    window.fp = this.$refs.fullpage
    // window.addEventListener('orientationchange', function() {
    //   alert(1)
    //   setTimeout(() => {
    //      window.fp.api.reBuild()
    //   }, 200);
    // }, false);
    let lastStateHeight = document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', function() {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (resizeHeight > lastStateHeight) {
        setTimeout(() => {
          window.fp.api.reBuild()
        }, 200);
      } else {
      }
      lastStateHeight = resizeHeight
    }, false);
    let bg = new Image()
    bg.onload = () => {
      this.hideApp = false
    }
    bg.src = firstBG
    // this.$refs.bgMusic.play()
    window.bgMusic = new Audio(bgmUrl);
    window.bgMusic.loop = true;
    setTimeout(() => {
      if(window.bgMusic.paused){
        window.bgMusic.play().catch(_=>{
          if(window.bgMusic.paused){
            window.bgMusic.play()
          }
        })
        window.music.paused = false
      }
    }, 500);
    document.addEventListener("WeixinJSBridgeReady", ()=>{  
      if(window.bgMusic.paused){
        window.bgMusic.play();  
        window.music.paused = false
      }
    }, false);
  },
  computed: {
  },
  data(){
    return{
      hideApp:true,
      options:{
        licenseKey:'asdf',
        autoScrolling:true,
        scrollingSpeed:400,
        onLeave:this.onLeave,
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
      music:window.music,
      showModal:false,
      showReserveBtn:true,
      showSuccess:false,
      index:0
    }
  },
  methods:{
    onLeave(origin, destination, direction){
      this.showReserveBtn = destination.index!=2
      this.index = destination.index
      if(destination.index==1){
        this.$refs.event.initInterval()
      }
      if(origin.index==1){
        this.$refs.event.cancelInterval()
      }
    },
    toggleBGM(){
      if(window.bgMusic.paused){
        window.bgMusic.play()
      }else{
        window.bgMusic.pause()
      }
      window.music.paused = window.bgMusic.paused
    },
    success(){
      // this.showModal = false
      this.showSuccess = true
    }
  }
}

</script>
<style lang="scss" scoped>
  .app{
    height:100%;
  }
  .header{
    width: 100%;
    position: fixed;
    height:3.8rem;
    display: flex;
    align-items: flex-end;
    // justify-content: space-between;
    padding-left:1.64rem;
    padding-right: 1rem;
    z-index: 999;
    .logo{
      width: 11.96rem;
      height:1.68rem;
      margin-right:auto;
    }
    .music-control{
      height:2.4rem;
      margin-right: 0.6rem;
    }
    .reserve-btn{
      width:6.72rem;
      height:2.48rem;
    }
  }
  .scroll-icon{
    position: fixed;
    width:2.76rem;
    z-index: 999;
    bottom:2.28rem;
    left:50%;
    transform: translateX(-50%);
    animation-duration: 2.5s;
  }
  .rotate-mask{
    width: 100%;
    height:100%;
    background: #555;
    position: fixed;
    z-index: 99999;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color:#fff;
  }
  .music-btn{
    width:30px;
    height:30px;
    background: gray;
    position: fixed;
    right:60px;
    top:20px;
    z-index: 999;
  }
  .share-icon{
    height: 0;
    width: 0;
    margin:0;
    display: block;
  }
  // @media screen and (orientation:landscape) {
  //   // CSS applied when the device is in landscape mode
  //   .rotate-mask{
  //     display: flex;
  //   }
  // }
  @media screen and (min-aspect-ratio: 13/9) { /* landscape styles here */
    .rotate-mask{
      display: flex;
    }
  }
</style>
