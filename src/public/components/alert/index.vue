<template>
  <div class="alert" v-show="show">
    {{message}}
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted(){
    let vm = this
    setTimeout(() => {
      vm.close()
    }, 2000);
  },
  data(){
    return {
      show:true,
      message:'',
      onClose:null
    }
  },
  methods:{
    close() {
      this.show = false;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}

</script>
<style lang="scss" scoped>
  .alert{
    min-width: 10rem;
    background: rgba(0, 0, 0, 0.6);
    color:white;
    font-size: 1.25rem;
    line-height: 4rem;
    text-align: center;
    padding:0 2rem;
    border-radius: 1rem;
    position: fixed;
    z-index: 99999;
    left:50%;
    top:50%;
    transform: translate(-50%, -100%);
    box-shadow: rgba($color: #000, $alpha: 0.42) 0px 8px 45px -10px;
  }
</style>
