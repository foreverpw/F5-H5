<template>
  <bg :page="3" class="reserve-section">
    <div class="main">
      <img src="../assets/imgs/page3/title.png" alt="" class="title">
      <div class="desc1-row">
        <img src="../assets/imgs/page3/desc1.png" alt="" class="desc1">
        <img src="../assets/imgs/page3/desc1-2.png" alt="" class="desc1-2">
      </div>
      <img src="../assets/imgs/page3/desc2.png" alt="" class="desc2">
      <crm-form type="page" class="form" @success="success"></crm-form>
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
  }
  .title{
    margin-top:4.48rem;
    width:15.8rem;
  }
  .desc1-row{
    display: flex;
    align-items: flex-end;
    margin-top: 1.76rem;
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
    margin-top:1.04rem;
    width:26.4rem;
    height:2.2rem;
  }
  .form{
    margin-top:4.44rem;
  }
</style>
