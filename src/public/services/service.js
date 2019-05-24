import Vue from 'vue'
import config from '../config'
import axios from 'axios'
import jsonp from 'jsonp'

// Vue.prototype.$http = axios;
axios.defaults.baseURL = config.serviceDomain;

axios.interceptors.request.use(function (conf) {
  // Do something before request is sent
  return conf;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if(resp.data.code === 100){
    //route to login
  }else if(resp.data.code !== 0){
    return Promise.reject(resp);
  }
  return resp;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default {
  getJsSDKSignature() {
    return axios.post('/weixin/jssdk/getSignature',{url:window.location.href})
    .then((resp) => {
      return resp.data.data;
    });
  },
  geocoder(longitude,latitude){
    let url = '/weixin/jssdk/getLocation';
    return axios.post(url,{longitude,latitude}).then(res=>{
      return res.data.data
    })
  },
  geocoderBaidu(longitude,latitude){
    let url = 'https://api.map.baidu.com/geocoder/v2/?ak=hTtFgDnayWhDNycGArDQmy3utWgsYSpQ&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll';
    return new Promise((resolve, reject) => {
      jsonp(url,{},function(err,data) {
        if(err){
          reject(err)
        }else{
          resolve(data.result)
        }
      })
    })
  },
  submitCrm({province,city,name,phone,shnumber}) {
    return axios.post('/user/submitCrm',{province,city,name,phone,shnumber})
    .then((resp) => {
      return resp.data.data;
    });
  }
}