<template>
  <div class="app">
    <img src="./assets/imgs/404.png" alt="" class="share-icon">
    <div class="rotate-mask">
      你要竖屏
    </div>
    <form-modal :show.sync="showModal"></form-modal>
    <div class="reserve-btn" @click="showModal=true"></div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
        <input type="text">
      </div>
      <reserve class="section"></reserve>
      <f5 class="section"></f5>
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
import Reserve from './pages/reserve'
import F5 from './pages/f5'
import FormModal from './components/formModal'

window.options = {
  licenseKey:'asdf',
  autoScrolling:true,
  scrollingSpeed:400,
  sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
}

export default {
  components: {
    Reserve,
    FormModal,
    F5
  },
  created(){
  },
  mounted(){
    window.fp = this.$refs.fullpage
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
  }
}

</script>
<style lang="scss" scoped>
  .app{
    height:100%;
  }
  .rotate-mask{
    width: 100%;
    height:100%;
    background: red;
    position: fixed;
    z-index: 9999;
    display: none
  }
  .reserve-btn{
    width:30px;
    height:30px;
    background: black;
    position: fixed;
    right:20px;
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
