<template>
  <bg>
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
  props:{
    page:{
      type: Number,
      default: 1
    }
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
  .slogan{
    width: 26.32rem;
    margin-left:2.04rem;
    margin-top:7.5vh;
  }
</style>
