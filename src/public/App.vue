<template>
  <div class="app">
    <img src="./assets/imgs/404.png" alt="" class="share-icon">
    <!-- <audio style="display:none; height: 0" ref="bgMusic" id="bg_music" preload="auto" loop="loop" src="./assets/bg.mp3"></audio> -->
    <div class="rotate-mask">
      请在竖屏模式下浏览
    </div>
    <div class="header">
      <img src="./assets/imgs/logo.png" alt="" class="logo">
      <img src="./assets/imgs/reserve.png" alt="" v-show="showReserveBtn" class="reserve-btn" @click="showModal=true">
    </div>
    <img src="./assets/imgs/icons/scroll.png" alt="" @click="$refs.fullpage.api.moveSectionUp()" 
    v-show="index<4" class="scroll-icon animated flash infinite">
    <form-modal :show.sync="showModal" @success="success"></form-modal>
    <success :show.sync="showSuccess"></success>
    <!-- <div class="reserve-btn" @click="showModal=true"></div> -->
    <!-- <div class="music-btn" @click="toggleBGM"></div> -->
    <full-page ref="fullpage" :options="options">
      <landing class="section"></landing>
      <event class="section"></event>
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
import Reserve from './pages/reserve'
import F5 from './pages/f5'
import SportHighlights from './pages/sportHighlights'
import FormModal from './components/formModal'
import Success from './components/successModal/index'
import bgmUrl from './assets/bg.mp3'

window.options = {
  licenseKey:'asdf',
  autoScrolling:true,
  scrollingSpeed:400,
  onLeave(origin, destination, direction){
    debugger
  },
  // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
}

export default {
  components: {
    Landing,
    Event,
    Reserve,
    SportHighlights,
    FormModal,
    F5,
    Success
  },
  created(){
  },
  mounted(){
    window.fp = this.$refs.fullpage
    window.addEventListener('orientationchange', function() {
      setTimeout(() => {
         window.fp.api.reBuild()
      }, 100);
    }, false);
    // this.$refs.bgMusic.play()
    // this.bgMusic = new Audio(bgmUrl);
    // this.bgMusic.loop = true;
    // setTimeout(() => {
    //   if(this.bgMusic.paused){
    //     // this.bgMusic.play();
    //   }
    // }, 500);
    // document.addEventListener("WeixinJSBridgeReady", ()=>{  
    //   // this.bgMusic.play();  
    // }, false);
  },
  computed: {
  },
  data(){
    return{
      options:{
        licenseKey:'asdf',
        autoScrolling:true,
        scrollingSpeed:400,
        onLeave:this.onLeave,
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
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
    },
    toggleBGM(){
      if(this.bgMusic.paused){
        this.bgMusic.play()
      }else{
        this.bgMusic.pause()
      }
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
    justify-content: space-between;
    padding-left:1.64rem;
    padding-right: 1rem;
    z-index: 999;
    .logo{
      width: 11.96rem;
      height:1.68rem;
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
    z-index: 9999;
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
    z-index: 9999;
  }
  .share-icon{
    height: 0;
    width: 0;
    margin:0;
    display: block;
  }
  @media screen and (orientation:landscape) {
    // CSS applied when the device is in landscape mode
    .rotate-mask{
      display: flex;
    }
  }
</style>
