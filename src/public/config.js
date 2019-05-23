const config = {
  serviceDomain:'https://api.dingnuo.ai'
}
if(process.env.ENV=='test'){
  // config.serviceDomain = 'http://192.168.3.130:12200'
  config.serviceDomain = 'http://192.168.11.3:12200'
}

export default config