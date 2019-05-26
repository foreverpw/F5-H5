import WechatJSSDK from 'wechat-jssdk/dist/client.umd';
import service from './services/service'

window.jsSDKReady = service.getJsSDKSignature().then(signData=>{
  const config = Object.assign(signData,{
    // debug:true,
    jsApiList:['updateAppMessageShareData','updateTimelineShareData','getLocation']
  })
  
  window.wx = new WechatJSSDK(config);

  return window.wx.initialize()
})

window.jsSDKReady.then(({wx})=>{
  // let shareConfig = {
  //   title: '测试标题1', // 分享标题
  //   desc: '该好好干', // 分享描述
  //   link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //   imgUrl: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png', // 分享图标
  // }
  // wx.updateAppMessageShareData({ 
  //   ...shareConfig,
  //   success: function () {
  //     // 设置成功
  //   },
  //   fail(err){
  //     wx.onMenuShareAppMessage({
  //       ...shareConfig
  //     });
  //   }
  // })
  // wx.updateTimelineShareData({ 
  //   ...shareConfig,
  //   success: function () {
  //     // 设置成功
  //   },
  //   fail(err){
  //     wx.onMenuShareTimeline({
  //       ...shareConfig
  //     });
  //   }
  // })
  // wx.getLocation({
  //   type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
  //   success: function (res) {
  //     var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
  //     var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
  //     var speed = res.speed; // 速度，以米/每秒计
  //     var accuracy = res.accuracy; // 位置精度
  //     window.locationPromise = service.geocoder(longitude,latitude).then(result=>{
  //       let {province,city} = result.addressComponent
  //       return {
  //         province,
  //         city
  //       }
  //     })
  //   }
  // });
})