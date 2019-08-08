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
      <div class="location" @click="openMap(113.009834,28.193423,'长沙乐运三秒区篮球场','长沙市芙蓉区曙光北路119号 曙光798城市体验馆2号栋')">
        <img src="../assets/imgs/page2/location.png" alt="" class="icon">
        <div class="info">
          <div class="top">
            <div class="date">6.8</div>
            长沙乐运三秒区篮球场
          </div>
          <div class="address">长沙市芙蓉区曙光北路119号 曙光798城市体验馆2号栋</div>
          <!-- 113.009834,28.193423 -->
        </div>
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
    margin-top:-0.8rem;
    .inner{
      display: flex;
      align-items: flex-start;
      .kols{
        width: 100%;
      }
    }
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
    background: url(../assets/imgs/page2/addr-bg.png);
    background-position: 100% 100%;
    position: absolute;
    left:1.28rem;
    bottom:3.1vh;
    width: 27.28rem;
    height:6.16rem;
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
<<<<<<< HEAD
      .top{
        font-size:1.4rem;
=======
      position: relative;
      .detail-container{
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        padding-bottom:7.96rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }
      .kol{
        position: absolute;
        top:1.5rem;
        left:0;
        height:calc(100% - 1.5rem);
        z-index: 9;
      }
      .kol1{
        position: absolute;
        top:1.2rem;
        left:0.8rem;
        height:calc(50% - 1.2rem);
        z-index: 9;
      }
      .kol2{
        position: absolute;
        bottom:0;
        // right:0rem;
        left:calc(100% - 24vh);
        height:60%;
        z-index: 9;
      }
      .center-layout{
        width:100%;
        height:calc(100% - 5.4vh);
        max-height:16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .center-layout1{
        position: absolute;
        z-index: 7;
        top:3.4vh;
        left:14vh;
        right:0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
          font-size:1.05rem;
          line-height:1.2rem;
          margin-right: 0;
          margin-bottom:0.6vh;
          word-break: keep-all;
        }
        .name{
          font-size:1.3rem;
          margin-right: 0;
          margin-bottom:0.3vh;
        }
        .quote{
          font-size: 0.85rem;
          margin-right: 0;
          padding:0.6vh;
        }
      }
      .center-layout2{
        position: absolute;
        margin-top:1vh;
        z-index: 7;
        left:0;
        right:22vh;
        bottom:8.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
          margin-bottom:0.6vh;
          font-size:1.05rem;
          margin-right: 0;
          line-height:1.2rem;
          word-break: keep-all;
        }
        .name{
          font-size:1.3rem;
          margin-bottom:0.3vh;
          margin-right: 0;
        }
        .quote{
          margin-right: 0;
          font-size: 0.85rem;
          width: 100%;
          padding:0.6vh;
          background:linear-gradient(-90deg,rgba(164,17,88,1),rgba(255,255,255,0));
        }
      }
      .title{
        // position: absolute;
        // top:4.2rem;
        margin-right:1.52rem;
        margin-bottom:1vh;
        // right:1.44rem;
        font-size:1.41rem;
        line-height:1.52rem;
        // font-family:FZLTZHK--GBK1-0;
        color:rgba(107,24,66,1);
        text-align: right;
        white-space: pre-line;
        font-weight: bold;
        &.left{
          text-align: left;
        }
      }
      .name{
        // position: absolute;
        // top:8.72rem;
        margin-right:1.52rem;
        // margin-bottom:0.8rem;
        font-size:1.96rem;
        font-family:FZLTZHK--GBK1-0;
        color:rgba(141,32,80,1);
        text-align: right;
>>>>>>> ce0ed8a12107d5eb5bd8b9a09ef618b0ee343697
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
