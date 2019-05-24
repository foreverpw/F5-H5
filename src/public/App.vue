<template>
  <div class="app">
    <img src="./assets/imgs/404.png" alt="" class="share-icon">
    <!-- <audio style="display:none; height: 0" ref="bgMusic" id="bg_music" preload="auto" loop="loop" src="./assets/bg.mp3"></audio> -->
    <div class="rotate-mask">
      你要竖屏
    </div>
    <div class="header">
      <img src="./assets/imgs/logo.png" alt="" class="logo">
      <img src="./assets/imgs/reserve.png" alt="" class="reserve-btn" @click="showModal=true">
    </div>
    <form-modal :show.sync="showModal"></form-modal>
    <!-- <div class="reserve-btn" @click="showModal=true"></div> -->
    <!-- <div class="music-btn" @click="toggleBGM"></div> -->
    <full-page ref="fullpage" :options="options">
      <landing class="section"></landing>
      <reserve class="section"></reserve>
      <f5 class="section"></f5>
      <sport-highlights class="section"></sport-highlights>
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
import Reserve from './pages/reserve'
import F5 from './pages/f5'
import SportHighlights from './pages/sportHighlights'
import FormModal from './components/formModal'
import bgmUrl from './assets/bg.mp3'

window.options = {
  licenseKey:'asdf',
  autoScrolling:true,
  scrollingSpeed:400,
  // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
}

export default {
  components: {
    Landing,
    Reserve,
    SportHighlights,
    FormModal,
    F5
  },
  created(){
  },
  mounted(){
    window.fp = this.$refs.fullpage
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
      options: window.options,
      showModal:false
    }
  },
  methods:{
    toggleBGM(){
      if(this.bgMusic.paused){
        this.bgMusic.play()
      }else{
        this.bgMusic.pause()
      }
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
  .rotate-mask{
    width: 100%;
    height:100%;
    background: red;
    position: fixed;
    z-index: 9999;
    display: none
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
      display:block;
    }
  }
</style>
