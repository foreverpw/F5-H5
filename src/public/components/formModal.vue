<template>
  <transition @leave="leave">
    <div class="mask" @click.self="maskClick" v-show="show">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated zoomIn faster"
        leave-active-class="animated zoomOut faster"
      >
        <div class="modal" v-show="show">
          <img src="../assets/imgs/page3/close.png" @click="maskClick" alt="" class="close">
          <span class="title">预约试驾</span>
          <span class="desc">预约到店试驾即可获赠<span class="red">精美礼品</span></span>
          <span class="desc">购车至高享<span class="red">14500</span>元综合补贴</span>
          <crm-form class="form" @success="success"></crm-form>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import CrmForm from "./crmForm";
export default {
  components: {
    CrmForm
  },
  created() {},
  props: {
    show: false
  },
  data() {
    return {};
  },
  methods: {
    maskClick() {
      this.$emit("update:show", false);
    },
    success(){
      this.$emit("update:show", false);
      setTimeout(() => {
        this.$emit('success')
      }, 300);
    },
    leave(el, done){
      setTimeout(() => {
        done()
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.47);
}
.modal {
  margin-bottom: 2.44rem;
  // padding: 7rem 2rem 2rem 2rem;
  height:35.88rem;
  width:25.56rem;
  background:linear-gradient(0deg,rgba(198,205,229,1),rgba(255,255,255,1));
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .title{
    margin-top:2.44rem;
    margin-bottom:1rem;
    font-size:1.89rem;
    line-height:1.89rem;
    font-weight: bold;
    color:rgba(217,26,87,1);
  }
  .desc{
    line-height: 1.92rem;
    font-size:1.2rem;
    color:#8D7C8E;
    .red{
      color:#D91A57;
      font-weight:bold;
    }
  }
  .form{
    margin-top:1.42rem;
  }
  .close{
    position: absolute;
    width:3.2rem;
    height:3.2rem;
    right:0.2rem;
    top:0.2rem;
  }
}
</style>
