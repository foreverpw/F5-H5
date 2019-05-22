<template>
  <div class="reserve-section">
    <crm-form class="form"></crm-form>
  </div>
</template>
<script>
import CrmForm from '../components/crmForm'
export default {
  components:{
    CrmForm
  }
}
</script>
<style lang="scss" scoped>
  .reserve-section{
    background: #ff5f45;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form{
    margin-top: 22.4rem;
  }
</style>
