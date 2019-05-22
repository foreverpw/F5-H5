<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated zoomInDown fast"
    leave-active-class="animated zoomOut faster"
  >
    <div class="mask" @click.self="maskClick" v-show="show">
      <div class="modal">
        <crm-form></crm-form>
      </div>
    </div>
  </transition>
</template>
<script>
import CrmForm from './crmForm'
export default {
  components:{
    CrmForm
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
}
.modal{
  margin-bottom:3.5rem;
  padding: 7rem 2rem 2rem 2rem;
  background: #eee;
}
</style>
