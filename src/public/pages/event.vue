<template>
  <bg :page="2">
    <div class="main">
      <img src="../assets/imgs/page2/gift.png" alt="" class="gift">
      <img class="h-title" src="../assets/imgs/page2/title.png" alt="">
      <div class="desc">哈弗F5邀您亲临路人王激战现场，参加“快准稳”挑战赛，更有哈弗F5精美周边等你来拿！</div>
      <div class="cards">
        <div class="header" :class="[headerActiveClass]">
          <div class="fg">
            <div class="item" :class="{active:state==1}" @click="changeState(1)">上海</div>
            <div class="item" :class="{active:state==2}" @click="changeState(2)">北京</div>
          </div>
        </div>
        <div class="detail">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn faster delay-500ms"
            leave-active-class="animated fadeOut faster"
          >
            <div class="detail-container" v-show="state==1">
              <img src="../assets/imgs/page2/sh-kol-1.png" alt="" class="kol1">
              <img src="../assets/imgs/page2/sh-kol-2.png" alt="" class="kol2">
              <div class="center-layout1 align-left">
                <div class="name left">柳杨杰</div>
                <div class="title left">所向披靡的“全能战将”上海“小霸王”</div>
                <div class="quote left">驰骋球场的气势，拼杀四方的斗&nbsp;&nbsp;&#10;志，我是“打铁”柳杨杰，够胆&#10;就来挑战我吧！</div>
              </div>
              <div class="center-layout2">
                <div class="name ">吴凯</div>
                <div class="title ">节奏与速度的最强化身“控球天王”</div>
                <div class="quote ">以雷霆万钧之势，化节奏与速度&nbsp;&nbsp;&#10;为利刃，我是“阿凯”吴凯&#10;想赢我？拼上你的全力！</div>
              </div>
              <div class="location" @click="openMap(121.524593,31.312314,'洛克公园(江湾店)','上海市杨浦区国和路346号江湾体育场5号门内')">
                <img src="../assets/imgs/page2/location.png" alt="" class="icon">
                <div class="info">
                  <div class="top">
                    <div class="date">7.20</div>
                    洛克公园(江湾店)
                  </div>
                  <div class="address">上海市杨浦区国和路346号江湾体育场5号门内</div>
                  <!-- 121.524593,31.312314 -->
                </div>
              </div>
            </div>
          </transition>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn faster delay-500ms"
            leave-active-class="animated fadeOut faster"
          >
            <div class="detail-container" v-show="state==2">
              <img src="../assets/imgs/page2/bj-kol.png" alt="" class="kol">
              <div class="center-layout">
                <div class="title">路人王46冠王“头盔哥”&#10;国内顶尖“街球魔王”</div>
                <div class="name">郝天佶</div>
                <div class="quote quote2">想超越我的神话？&#10;来哈弗X路人王北京&#10;站，我们一决高下！</div>
              </div>
              <div class="location" @click="openMap(116.518785,39.89171,'永乐汇·数字空间篮球文化中心','北京市朝阳区广渠东路')">
                <img src="../assets/imgs/page2/location.png" alt="" class="icon">
                <div class="info">
                  <div class="top">
                    <div class="date">8.24</div>  
                    永乐汇<span class="sm">数字空间篮球文化中心</span>
                  </div>
                  <div class="address">北京市广渠东路2号创1958文创园摩登天空南侧</div>
                  <!-- 116.518785,39.89171 -->
                </div>
              </div>
            </div>
          </transition>
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
  .h-title{
    margin-top:3.17vh;
    width:24.64rem;
    height:5.8rem;
  }
  .desc{
    margin-top:1vh;
    width:26.92rem;
    height:2.72rem;
    font-size:1.12rem;
    font-style:italic;
    color:rgba(255,255,255,1);
    line-height:1.6rem;
    opacity:0.84;
  }
  .gift{
    position: absolute;
    top:9.38vh;
    right:0;
    width:10.6rem;
    height:9.64rem;
    transform: scale(1);
    z-index: 999;
  }
  .cards{
    width: 27.72rem;
    margin-top:2.6vh;
    // margin-bottom:1.52rem;
    overflow: hidden;
    flex:1;
    max-height: 32.6rem;
    display:flex;
    flex-direction: column;
    background:linear-gradient(0deg,rgba(198,205,229,1),rgba(255,255,255,1));
    .detail{
      flex:1;
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
        font-weight: bold;
        &.left{
          text-align: left;
        }
      }
      .quote{
        // position: absolute;
        width:calc(100% - 0.75rem);
        // height:6.32rem;
        // top:12.44rem;
        margin-right:0.75rem;
        padding:1.2vh;
        padding-right:0.3rem;
        text-align: right;
        font-size:1.08rem;
        // font-family:FZLTZHK--GBK1-0;
        color:rgba(255,255,255,1);
        opacity:0.83;
        white-space: pre-line;
        // background: url(../assets/imgs/page2/quote-bg.png);
        background:linear-gradient(-90deg,rgba(164,17,88,1),rgba(255,255,255,0) 60%);
        // background-position: right 100%;
        // background-position: 100% top;
        background-size: cover;
        // display: flex;
        // flex-direction: column;
        // align-items: flex-end;
        font-weight: bold;
        &.quote2{
          // height:8.52rem;
        }
        &.left{
          text-align: left;
          background:linear-gradient(90deg,rgba(164,17,88,1),rgba(255,255,255,0));
        }
      }
      .location{
        width:25.04rem;
        height:7.2rem;
        background:linear-gradient(-58deg,rgba(224,228,240,1),rgba(255,255,255,1));
        box-shadow:0.004px 0.006px 0px 0px rgba(255,255,255,1);
        border-radius:0.16rem;
        position: absolute;
        bottom:0.76rem;
        left:1.6rem;
        z-index: 9999;
        display: flex;
        align-items: flex-start;
        padding:1rem;
        padding-bottom:0.88rem;
        transform: sacle(1);
        opacity: 0.99;
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
            align-items: flex-end;
            white-space:nowrap;
            line-height: 1.52rem;
            .date{
              font-size:2rem;
              font-weight:bold;
              margin-right:0.72rem;
              color:rgba(208,6,81,1);
            }
            .sm{
              font-size: 0.95rem;
              line-height: 1.1rem;
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
    }
    .header{
      position: relative;
      z-index: 99;
      height:4.12rem;
      background:linear-gradient(59deg,rgba(100,30,96,1),rgba(174,47,83,1));
      box-shadow:0rem 1rem 2rem 0rem rgba(0, 0, 0, 0.64);
      .fg{
        height:100%;
        display: flex;
        align-items: center;
        font-family: FZLTZHK--GBK1-0;
        font-size:1.44rem;
        color:rgba(190,179,193,1);
        .item{
          flex:1;
          height:100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          &.active{
            color:#45324E;
          }
        }
      }
      &.state1 .fg::after{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        left:0;
        top:0;
        z-index: -1;
        background: url(../assets/imgs/page5/lights/left-active-fg.png);
        background-size: cover;
      }
      &.state2 .fg::after{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        left:0;
        top:0;
        z-index: -1;
        background: url(../assets/imgs/page5/lights/right-active-fg.png);
        background-size: cover;
      }
      // &.state3 .fg::after{
      //   content: "";
      //   position: absolute;
      //   width: 100%;
      //   height:100%;
      //   left:0;
      //   top:0;
      //   z-index: -1;
      //   background: url(../assets/imgs/page2/right-active-fg.png);
      //   background-size: cover;
      // }
    }
  }
</style>
