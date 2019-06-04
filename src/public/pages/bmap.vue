<template>
  <div ref="dom" class="map-container">
    <div id="bmap">
    </div>
    <div class="back" id="fffeee" @click="back">
      <img src="../assets/imgs/icons/back.png" alt="" class="icon">
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  created(){
  },
  mounted(){
    window.mapDom = this.$refs.dom
  },
  computed: {
  },
  data(){
    return{
    }
  },
  methods:{
    back(){
      window.mapDom.style.display='none'
    }
  }
}

</script>
<style lang="scss" scoped>
  .map-container{
    width: 100%;
    height:100%;
    position: fixed!important;
    left:0;
    top:0;
    z-index: 9999;
    display: none;
    #bmap{
      width: 100%;
      height:100%;
    }
    .back{
      background: rgba(0,0,0,0.4);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 4px;
      left:10px;
      top:10px;
      position: absolute;
      z-index: 9999;
      color:#fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        height:1.5rem;
      }
    }
  }
</style>
