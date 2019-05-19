<template>
  <div class="app">
    <img src="./assets/imgs/404.png" alt="" class="share-icon">
    <div class="rotate-mask">
      你要竖屏
    </div>
    <div class="reserve-btn" @click="$refs.fullpage.api.silentMoveTo(2)"></div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 2
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 3
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 4
      </div>
    </full-page>
  </div>
</template>

<script>
import IosSelect from 'iosselect'
import 'iosselect/src/iosSelect.css'

export default {
  components: {
  },
  created(){
    new IosSelect(2,               // 第一个参数为级联层级，演示为1
        [[{'id': '10001', 'value': '演示数据1'},{'id': '10002', 'value': '演示数据2'},{'id': '10002', 'value': '演示数据2'},{'id': '10002', 'value': '演示数据2'}],
        function(oneLevelId,cb) {
          console.log(oneLevelId)
          if(oneLevelId=='10001'){
            cb([{'id': '1', 'value': '1'},{'id': '2', 'value': '2'}])
          }else{
            cb([{'id': '3', 'value': '3'},{'id': '4', 'value': '4'}])
          }
        }],                             // 演示数据
        {
            title: '选择地区',                    // 标题
            itemHeight: 50,                      // 每个元素的高度
            itemShowCount: 4,                    // 每一列显示元素个数，超出将隐藏
            callback: function (selectOneObj) {  // 用户确认选择后的回调函数
            }
    });
  },
  computed: {
  },
  data(){
    return{
      options: {
        licenseKey:'asdf',
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  },
  methods:{
  }
}

</script>
<style lang="scss" scoped>
  .app{
    height:100%;
  }
  .rotate-mask{
    width: 100%;
    height:100%;
    background: red;
    position: fixed;
    z-index: 9999;
    display: none
  }
  .reserve-btn{
    width:30px;
    height:30px;
    background: black;
    position: fixed;
    right:20px;
    top:20px;
    z-index: 999;
  }
  .share-icon{
    height: 0;
    width: 0;
    margin:0;
    display: block;
  }
  @media screen and (orientation:landscape) {
    // CSS applied when the device is in landscape mode
    .rotate-mask{
      display:block;
    }
  }
</style>
