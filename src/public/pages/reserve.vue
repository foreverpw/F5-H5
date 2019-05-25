<template>
  <bg :page="3" class="reserve-section">
    <crm-form class="form"></crm-form>
  </bg>
</template>
<script>
import CrmForm from '../components/crmForm'
import bg from '../components/bg'
export default {
  components:{
    CrmForm,
    bg
  }
}
</script>
<style lang="scss" scoped>
  .reserve-section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form{
    margin-top: 22.4rem;
  }
</style>
