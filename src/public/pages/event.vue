<template>
  <bg :page="2">
    <div class="main">
      <img src="../assets/imgs/page2/gift.png" alt="" class="gift">
      <img class="h-title" src="../assets/imgs/page2/title.png" alt="">
      <div class="desc">哈弗F5邀您亲临路人王激战现场，参加“快准稳”挑战赛，更有哈弗F5精美周边等你来拿！</div>
      <div class="cards">
        <div class="header" :class="[headerActiveClass]">
          <div class="fg">
            <div class="item" :class="{active:state==1}" @click="changeState(1)">长沙</div>
            <div class="item" :class="{active:state==2}" @click="changeState(2)">重庆</div>
            <div class="item" :class="{active:state==3}" @click="changeState(3)">广州</div>
          </div>
        </div>
        <div class="detail">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn faster delay-500ms"
            leave-active-class="animated fadeOut faster"
          >
            <div class="detail-container" v-show="state==1">
              <img src="../assets/imgs/page2/cs-kol.png" alt="" class="kol kol1">
              <div class="center-layout">
                <div class="title">颜值实力双C位&#10;路人王“井柏然”</div>
              <div class="name">张智杨</div>
              <div class="quote">我是路人王“十冠王”&nbsp;&nbsp;&#10;张智杨，够胆你就来，&#10;我在现场等你！</div>
              </div>
              <div class="location">
                <img src="../assets/imgs/page2/location.png" alt="" class="icon">
                <div class="info">
                  <div class="top">
                    <div class="date">6.8</div>
                    长沙乐运三秒区篮球场
                  </div>
                  <div class="address">长沙市芙蓉区曙光北路119号 曙光798城市体验馆2号栋</div>
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
              <img src="../assets/imgs/page2/cq-kol.png" alt="" class="kol kol1">
              <div class="center-layout">
                <div class="title">接球灵魂继承者
    &#10;“十万先生”</div>
              <div class="name">孟亚东</div>
              <div class="quote">“大魔王”平常心前来&#10;踢馆！球场要用实力说&#10;话，不服就来战！</div>
              </div>
              <div class="location">
                <img src="../assets/imgs/page2/location.png" alt="" class="icon">
                <div class="info">
                  <div class="top">
                    <div class="date">6.13</div>
                    重庆Elite篮球中心
                  </div>
                  <div class="address">重庆市渝北区北部区金渝大道28号辅助厂房</div>
                </div>
              </div>
            </div>
          </transition>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn faster delay-500ms"
            leave-active-class="animated fadeOut faster"
          >
            <div class="detail-container" v-show="state==3">
              <img src="../assets/imgs/page2/gz-kol.png" alt="" class="kol kol3">
              <div class="center-layout">
                <div class="title">飘逸灵动技巧派&#10;“洋葱哥”</div>
              <div class="name">董康潮</div>
              <div class="quote">“洋葱哥”董康潮参上！&#10;你的反应和我的过人哪个&#10;更快？来一较高下吧！</div>
              </div>
              <div class="location">
                <img src="../assets/imgs/page2/location.png" alt="" class="icon">
                <div class="info">
                  <div class="top">
                    <div class="date">6.22</div>
                    广州L2球馆
                  </div>
                  <div class="address">广州市天河区天河客运站旁 元岗横路18号（L2体育会天河旗舰店）</div>
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
        this.state = this.state%3+1
      }, 2000);
    },
    cancelInterval(){
      clearInterval(this.intvl)
    },
    changeState(state){
      this.state=state
      this.cancelInterval()
      // this.initInterval()
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
    margin-top:2.44rem;
    width:24.64rem;
    height:5.8rem;
  }
  .desc{
    margin-top:0.8rem;
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
    top:6.16rem;
    right:0;
    width:10.6rem;
    height:9.64rem;
    transform: scale(1);
    z-index: 999;
  }
  .cards{
    width: 27.72rem;
    margin-top:1.92rem;
    margin-bottom:1.52rem;
    overflow: hidden;
    flex:1;
    max-height: 34.6rem;
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
        &.kol3{
          top:2rem;
          height:calc(100% - 2rem);
          left:-1rem;
          z-index: 9;
        }
      }
      .center-layout{
        width:100%;
        height:calc(100% - 5rem);
        max-height:16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .title{
        // position: absolute;
        // top:4.2rem;
        margin-right:1.52rem;
        margin-bottom:0.6rem;
        // right:1.44rem;
        font-size:1.41rem;
        line-height:1.52rem;
        // font-family:FZLTZHK--GBK1-0;
        color:rgba(107,24,66,1);
        text-align: right;
        white-space: pre-line;
        font-weight: bold;
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
      }
      .quote{
        // position: absolute;
        width:calc(100% - 0.75rem);
        height:6.32rem;
        // top:12.44rem;
        margin-right:0.75rem;
        padding:1rem;
        padding-right:0.3rem;
        text-align: right;
        font-size:1.08rem;
        // font-family:FZLTZHK--GBK1-0;
        color:rgba(255,255,255,1);
        opacity:0.83;
        white-space: pre-line;
        background: url(../assets/imgs/page2/quote-bg.png);
        // background-position: right 100%;
        // background-position: 100% top;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-weight: bold;
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
        background: url(../assets/imgs/page2/right-active-fg.png);
        background-size: cover;
        transform: rotateY(180deg)
      }
      &.state2 .fg::after{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        left:0;
        top:0;
        z-index: -1;
        background: url(../assets/imgs/page2/center-active-fg.png);
        background-size: cover;
      }
      &.state3 .fg::after{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        left:0;
        top:0;
        z-index: -1;
        background: url(../assets/imgs/page2/right-active-fg.png);
        background-size: cover;
      }
    }
  }
</style>
