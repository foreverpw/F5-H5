import Vue from 'vue'
import config from '../config'
import router from '../router'
import store from '../store'
import axios from 'axios'

// Vue.prototype.$http = axios;
axios.defaults.baseURL = config.serviceDomain;

axios.interceptors.request.use(function (conf) {
  // Do something before request is sent
  conf.data.token = store.state.session.sessionId || window.session
  return conf;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if(resp.data.code === 100){
    //route to login
    router.push({ path: '/error'})
  }else if(resp.data.code !== 0){
    let errorMsg = resp.data.errorMessage;
    if(errorMsg){
      Vue.prototype.$alert(errorMsg);
    }
    return Promise.reject(resp);
  }
  return resp;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default {
  getSessionData() {
    return axios.post('/wdAnswer/getWebEditorSession/',{})
    .then((resp) => {
      return resp.data.data;
    });
  }
}