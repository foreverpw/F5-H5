<template>
  <bg>
    <img class="battle" src="../assets/imgs/texts/battle.png" alt="">
    <img class="slogan" src="../assets/imgs/texts/slogan.png" alt="">
  </bg>
</template>
<script>
// import videojs from 'video.js'
import bg from '../components/bg'
export default {
  components:{
    bg
  },
  mounted() {
  },
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
  .battle{
    position: absolute;
    width:27.2rem;
    top:6.2vh;
    left:1.08rem;
  }
  .slogan{
    position: absolute;
    width: 21.04rem;
    bottom:6.2vh;
    right:0;
  }
</style>
