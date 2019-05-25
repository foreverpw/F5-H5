<template>
  <transition @leave="leave">
  <div class="mask" @click.self="maskClick" v-show="show">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomIn faster"
      leave-active-class="animated zoomOut faster"
    >
      <div class="modal" v-show="show">
        <div class="title">预约成功</div>
        <div class="desc">恭喜您的预约已经成功提交！！</div>
        <img src="../../assets/imgs/page3/car.png" alt="" class="car">
        <div class="s-btn" @click="maskClick">确定</div>
      </div>
    </transition>
  </div>
  </transition>
</template>
<script>
export default {
  components:{
  },
  created(){
  },
  props:{
    show:false
  },
  data(){
    return {
    }
  },
  methods:{
    maskClick(){
      this.$emit('update:show',false)
    },
    leave(el, done){
      setTimeout(() => {
        done()
      }, 300);
    }
  }
}
</script>
<style lang="scss" scoped>
.mask{
  position: fixed;
  width: 100%;
  height:100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(11,9,26,0.47);
}
.modal{
  margin-bottom:6.68rem;
  // padding: 7rem 2rem 2rem 2rem;
  background:linear-gradient(0deg,rgba(198,205,229,1),rgba(255,255,255,1));
  width:21.88rem;
  height:20.68rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title{
    margin-top:2.12rem;
    font-size:1.89rem;
    line-height:1.89rem;
    font-weight:bold;
    color:rgba(217,26,87,1);
    // line-height:3.5rem;
  }
  .desc{
    margin-top:0.92rem;
    line-height:1.2rem;
    font-size:1.2rem;
    color:rgba(141,124,142,1);
  }
  .car{
    margin-top:2rem;
    width:14.56rem;
    height:7.2rem;
  }
  .s-btn{
    margin-top:0.6rem;
    width:17.84rem;
    height:3.2rem;
    text-align: center;
    line-height: 3.2rem;
    background:rgba(217,26,87,1);
    font-size:1.12rem;
    color:white;
  }
}
</style>
