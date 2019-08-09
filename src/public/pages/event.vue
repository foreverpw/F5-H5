<template>
  <bg :page="2">
    <div class="main">
      <img src="../assets/imgs/page2/gift.png" alt="" class="gift">
      <img class="h-title" src="../assets/imgs/page2/title.png" alt="">
      <div class="desc">哈弗F5邀您亲临路人王激战现场，精彩表演不容错过，参与现场互动挑战赛，更有哈弗F5精美周边等你来拿！</div>
      <div class="outer">
        <div class="inner">
          <img src="../assets/imgs/page2/kols.png" alt="" class="kols">
        </div>
      </div>
      <img src="../assets/imgs/page2/toukui.png" alt="" class="toukui">
      <div class="location" @click="openMap(116.518785,39.89171,'永乐汇·数字空间篮球文化中心','北京市朝阳区广渠东路')">
        <!-- <img src="../assets/imgs/page2/location.png" alt="" class="icon">
        <div class="info">
          <div class="top">
            <div class="date">8.24</div>  
            永乐汇<span class="sm">数字空间篮球文化中心</span>
          </div>
          <div class="address">北京市广渠东路2号创1958文创园摩登天空南侧</div>
        </div> -->
      </div>
    </div>
  </bg>
</template>
<script>
// import videojs from 'video.js'
import bg from '../components/bg'
import utils from '../common/utils'
import gcoord from 'gcoord'
export default {
  components:{
    bg
  },
  mounted() {
    // this.initInterval()
  },
  computed:{
    headerActiveClass(){
      return 'state'+this.state
    }
  },
  data(){
    return {
      state:1,
      intvl:null
    }
  },
  methods:{
    initInterval(){
      clearInterval(this.intvl)
      this.intvl = setInterval(() => {
        this.state = this.state%2+1
      }, 2000);
    },
    cancelInterval(){
      clearInterval(this.intvl)
    },
    changeState(state){
      this.state=state
      this.cancelInterval()
      this.initInterval()
    },
    openMap(longitude,latitude,name,desc){
      if(utils.isWeixinBrowser()){
        window.jsSDKReady.then(({wx})=>{
          var result = gcoord.transform(
            [longitude, latitude],    // 经纬度坐标
            gcoord.BD09,               // 当前坐标系
            gcoord.GCJ02                 // 目标坐标系
          );
          console.log(result)
          wx.openLocation({
            latitude:result[1], // 纬度，浮点数，范围为90 ~ -90
            longitude:result[0], // 经度，浮点数，范围为180 ~ -180。
            name, // 位置名
            address: desc, // 地址详情说明
            scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
            // infoUrl: 'http://www.baidu.com' // 在查看位置界面底部显示的超链接,可点击跳转
          });
        })
      }else{
        // window.mapDom.style.display = "block"
        // let map = new BMap.Map("bmap");
        // var point = new BMap.Point(longitude,latitude);
        // map.centerAndZoom(point,17);    
        // map.enableScrollWheelZoom(true);
        // var marker = new BMap.Marker(point);// 创建标注
        // map.addOverlay(marker);  
        window.location.href=`http://api.map.baidu.com/marker?location=${latitude},${longitude}&title=${name}&content=${desc}&output=html`     
      }
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
  .outer{
    flex:1;
    display: flex;
    align-items: flex-end;
    margin-top:-5vh;
    overflow: auto;
    .inner{
      display: flex;
      align-items: flex-start;
      max-height:100%;
      .kols{
        width: 100%;
      }
    }
  }
  .toukui{
    position: absolute;
    z-index: 9999;
    left:10rem;
    right:12rem;
    bottom:15vh;
    width:8rem;
  }
  .h-title{
    margin-top:3.17vh;
    width:24.64rem;
    height:5.8rem;
  }
  .desc{
    margin-top:1vh;
    width:26.92rem;
    height:2.72rem;
    font-size:1rem;
    font-style:italic;
    color:rgba(255,255,255,1);
    line-height:1.6rem;
    opacity:0.84;
    transform: scale(1);
    z-index: 1111;
  }
  .gift{
    position: absolute;
    top:9.48vh;
    right:0;
    width:10.6rem;
    height:9.64rem;
    transform: scale(1);
    z-index: 999;
  }
  .location{
    background: url(../assets/imgs/page2/addr.png);
    background-position: 100% 100%;
    background-size: contain;
    position: absolute;
    left:auto;
    right:auto;
    bottom:3.2vh;
    width: 27.28rem;
    height:5.18rem;
    z-index: 9999;
    display: flex;
    align-items: flex-start;
    padding:1.1rem 0.64rem;
    .icon{
      width:3.08rem;
      height:5.04rem;
      margin-right:1.04rem;
    }
    .info{
      flex:1;
      .top{
        font-size:1.4rem;
        font-weight: bold;
        color:rgba(208,6,81,1);
        display: flex;
        align-items: center;
        white-space:nowrap;
        line-height: 1.52rem;
        .date{
          font-size:2rem;
          font-weight:bold;
          margin-right:0.72rem;
          color:rgba(208,6,81,1);
        }
      }
      .address{
        margin-top:0.88rem;
        font-size:1.12rem;
        color:rgba(83,22,45,1);
        line-height:1.6rem;
      }
    }
  }
</style>
