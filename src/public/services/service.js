import Vue from 'vue'
import config from '../config'
import axios from 'axios'

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
  }
}