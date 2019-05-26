<template>
  <div class="bg" :class="{bg1:page==1,bg3:page==3}">
    <!-- <img src="../assets/imgs/bgs/car1.png" alt="" class="car"> -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// import videojs from 'video.js'
export default {
  components:{
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
  .bg{
    height:100%;
    width:100%;
    background-image: url(../assets/imgs/bgs/bg.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;
    &.bg1{
      background-image: url(../assets/imgs/bgs/bg1.jpg);
    }
    &.bg3{
      background-image: url(../assets/imgs/bgs/bg3.jpg);
    }
    .content{
      position: absolute;
      left:0;
      top:3.8rem;;
      width:100%;
      height:calc(100% - 3.8rem);
      z-index: 999;
    }
    .car{
      width: 20rem;
      bottom:10vh;
      right:1.7rem;
      position: absolute;
    }
  }
</style>
