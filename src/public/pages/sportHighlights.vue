<template>
  <div class="game-section">
    <img src="../assets/imgs/sportHighlights/1.jpg" alt="">
    <img src="../assets/imgs/sportHighlights/2.jpg" alt="">
    <img src="../assets/imgs/sportHighlights/3.jpg" alt="">
    <img src="../assets/imgs/sportHighlights/4.jpg" alt="">
    <video src="../assets/imgs/sportHighlights/game.mp4" preload controls></video>
  </div>
</template>
<script>
export default {
  components:{
  },
  mounted() {
  },
  data(){
    return {
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
    video{
      width: 15rem;
    }
  }
</style>
