const config = {
  serviceDomain:'http://47.102.197.119:12200'
  // serviceDomain:'https://hupu.ksspark.cn:12200'
}
if(process.env.ENV=='test'){
  // config.serviceDomain = 'http://192.168.3.130:12200'
  config.serviceDomain = 'http://192.168.1.4:12200'
}

export default config