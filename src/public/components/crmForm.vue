<template>
  <div class="container" :class="[type]" ref="form">
    <div class="line">
      <div class="label">姓名</div>
      <input class="input" v-model="name" type="text" @focus="focus" @blur="blur">
    </div>
    <div class="line">
      <div class="label">手机号</div>
      <input class="input" v-model="phone" type="number" @focus="focus" @blur="blur">
    </div>
    <div class="line">
      <div class="label">省份</div>
      <select name="" id="" v-model="province" class="input" @focus="focus" @blur="blur" @change="provinceChange">
        <option disabled value="">请选择省份</option>
        <option v-for="p in Object.keys(PROVINCE_CITY_MAP)" :key="p">{{p}}</option>
      </select>
      <div class="down-triangle"></div>
    </div>
    <div class="line">
      <div class="label">城市</div>
      <select name="" id="" v-model="city" class="input" @focus="focus" @blur="blur" @change="cityChange">
        <option disabled value="">请选择城市</option>
        <option v-for="c in cities" :key="c">{{c}}</option>
      </select>
      <div class="down-triangle"></div>
    </div>
    <div class="line">
      <div class="label">经销商</div>
      <select name="" id="" v-model="shnumber" class="input" @focus="focus" @blur="blur">
        <option disabled value="">请选择经销商</option>
        <option v-for="a in agencies" :key="a.shnumber" :value="a.shnumber">{{a.shortName}}</option>
      </select>
      <div class="down-triangle"></div>
    </div>
    <button class="submit-btn" @click="submit">确认提交</button>
    <div class="success-mask">
      <div class="success-modal"></div>
    </div>
  </div>
</template>
<script>
import {PROVINCE_CITY_MAP,CITY_AGENCIES_MAP} from '../common/constant'
import service from '../services/service'
import utils from '../common/utils'

window.locationPromise = new Promise((r,j)=>{
  r({province:'上海市',city:'普陀区'})
})
function locationValidate(location){
  let {province,city} = location
  let cities = PROVINCE_CITY_MAP[province]
  if(!cities){
    return false
  }else{
    if(cities.indexOf(city)===-1){
      return false
    }else{
      return true
    }
  }
}
const ps = ['上海市','北京市','天津市','重庆市']
export default {
  created(){
    let vm = this
    const originHeight = document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', function() {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (originHeight-resizeHeight > 140) {
        //alert('弹')
      } else {
            // this.$emit('blur')
        //alert('收')
        setTimeout(() => {
          window.scrollTo(0,0)
          document.body.scrollTop = 0
          vm.$emit('blur')
          // window.fp.api.reBuild()
          // window.fp.api.moveTo(3, 0);
        }, 100);
      }
    }, false);
  },
  props:{
    type:{
      type: String,
      default: "pop"
    }
  },
  mounted(){
    let vm = this
    window.locationPromise.then(location=>{
      let {province,city} = location
      if(ps.indexOf(province)!==-1){
        city = province
      }
      if(locationValidate({province,city})){
        vm.province = province
        vm.cities = vm.PROVINCE_CITY_MAP[vm.province]
        vm.city = city
        vm.agencies = CITY_AGENCIES_MAP[vm.city]
      }
    })
  },
  data(){
    return {
      name:'',
      phone:'',
      PROVINCE_CITY_MAP,
      cities:[],
      province:'',
      agencies:[],
      city:'',
      shnumber:''
    }
  },
  methods:{
    focus(e){
      // window.fp.api.setAllowScrolling(false);
      // e.currentTarget.scrollIntoView();
      // let rect = this.$refs.form.getBoundingClientRect()
      // setTimeout(() => {
      //   window.scrollTo(0,rect.top);
      // document.body.scrollTop = rect.top
      // }, 50);
      // e.currentTarget.scrollIntoView();
      // this.$emit('input')
      clearTimeout(this.scrollTO)
    },
    blur(e){
      // window.fp.api.setAllowScrolling(true);
      this.$emit('blur')
      this.scrollTO = setTimeout(() => {
        window.scrollTo(0,0)
        document.body.scrollTop = 0
      }, 100);
    },
    provinceChange(){
      this.cities = this.PROVINCE_CITY_MAP[this.province]
      this.shnumber = ''
    },
    cityChange(){
      this.agencies = CITY_AGENCIES_MAP[this.city]
      this.shnumber = ''
    },
    submit(){
      if(!this.name){
        return this.$alert('请填写姓名')
      }
      if(!this.phone){
        return this.$alert('请填写手机')
      }
      if(!utils.isPoneAvailable(this.phone)){
        return this.$alert('手机格式不正确')
      }
      if(!this.province){
        return this.$alert('请选择省份')
      }
      if(!this.city){
        return this.$alert('请选择城市')
      }
      if(!this.shnumber){
        return this.$alert('请选择经销商')
      }
      let {province,city,name,phone,shnumber} = this
      service.submitCrm({province,city,name,phone,shnumber}).then(data=>{
        this.$emit('success')
      }).catch(err=>{
        // this.$emit('success')
        this.$alert('提交出错')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  width:20.72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // position: fixed;
  // left:4.56rem;
  // top:-11rem;
}
.page{
  .line{
    border:0.04rem solid rgba(207, 192, 197, 1);
    // border:none;
    .label{
      border-right:0.02rem solid rgba(207, 192, 197, 1);
      // border-right:none;
    }
  }
}
.line{
  margin-bottom:0.9rem;
  height:2.96rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  position: relative;
  border:0.08rem solid rgba(207, 192, 197, 1);
  .label{
    width:5.36rem;
    height:100%;
    line-height:2.96rem;
    padding-left:1.04rem;
    background: #EFE7E7;
    font-size:1.12rem;
    color:#53162D;
    border-right:0.08rem solid rgba(207, 192, 197, 1);
  }
  .input{
    width:15.4rem;
    height:100%;
    line-height: 2.96rem;
    padding:0 1rem;
    padding-right: 2.25rem;
    color:#444;
    font-size: 1.12rem;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none; 
    border:none;
    background: white;
  }
  .down-triangle{
    width: 0;
    height: 0;
    border-top:0.56rem solid #CFC0C5;
    border-bottom:0;
    border-left:0.4rem solid white;
    border-right:0.4rem solid white;
    position: absolute;
    right:1.08rem;
    top:1.2rem;
  }
}
.submit-btn{
  width:20.36rem;
  height:3.2rem;
  background: #D91A57;
  line-height: 3.2rem;
  text-align: center;
  color:white;
  margin-top: 1.52rem;
  font-size:1.12rem;
}
</style>
