const config = {
  serviceDomain:'https://api.dingnuo.ai'
}
if(process.env.ENV=='test'){
  config.serviceDomain = 'https://test-api.dingnuo.ai'
}

export default config