<template>
  <bg :page="3" class="reserve-section" ref="reserve_section" id="reserve_section">
    <div class="main">
      <img src="../assets/imgs/page3/title.png" alt="" class="title">
      <div class="desc1-row">
        <img src="../assets/imgs/page3/desc1.png" alt="" class="desc1">
        <img src="../assets/imgs/page3/desc1-2.png" alt="" class="desc1-2">
      </div>
      <img src="../assets/imgs/page3/desc2.png" alt="" class="desc2">
      <crm-form type="page" class="form" @success="success" @blur="formBlur"></crm-form>
      <success :show.sync="showSuccess" @update:show="onhide"></success>
    </div>
  </bg>
</template>
<script>
import CrmForm from '../components/crmForm'
import Success from '../components/successModal/index'
import bg from '../components/bg'
export default {
  components:{
    CrmForm,
    bg,
    Success
  },
  data(){
    return{
      showSuccess:false
    }
  },
  methods:{
    success(){
      this.showSuccess = true
    },
    onhide(){
      setTimeout(() => {
        window.fp.api.moveSectionDown()
      }, 500);
    },
    formBlur(){
      // alert(this.$refs.reserve_section)
      this.$refs.reserve_section.$el.scrollIntoView()
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height:100%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // position: fixed;
    // height: calc(100% - 3.8rem);
    // width: 100%;
  }
  .title{
    margin-top:3.58rem;
    width:15.8rem;
  }
  .desc1-row{
    display: flex;
    align-items: flex-end;
    margin-top: 1.36rem;
    .desc1{
      width:17.24rem;
      height:1.36rem;
    }
    .desc1-2{
      width:9.32rem;
      height:1.84rem;
    }
  }
  .desc2{
    margin-top:0.84rem;
    width:26.4rem;
    height:2.2rem;
  }
  .form{
    margin-top:3.44rem;
  }
</style>
