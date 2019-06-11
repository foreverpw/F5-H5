import Vue from 'vue'
import App from './App'
import './assets/scss/main.scss';
import 'animate.css'
// import VueCookie from 'vue-cookie';
// Vue.use(VueCookie);
console.log('v1.0.4')

import FastClick from 'fastclick';
FastClick(document.body);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad: 2
})

import Alert from './components/alert/main.js'
Vue.prototype.$alert = Alert

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//register filters
import filters from './common/filters'
for(name in filters){
  Vue.filter(name, filters[name])
}

//fontawesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPause,faPlay } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faPause,faPlay)
// Vue.component('fa', FontAwesomeIcon)

//video.js
import 'video.js/dist/video-js.css'

!(function(doc, win) {
  var docEle = doc.documentElement,
      evt = "onorientationchange" in window ? "orientationchange" : "resize",
      fn = function() {
        var width = docEle.clientWidth;
        width && (docEle.style.fontSize = 25 * (width / 750) + "px");
      };
   
  win.addEventListener('resize', fn, false);
  doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window))

Vue.config.productionTip = false

require('./weixin')
// require('./location.js')

new Vue({
  el: '#app',
  render: h => h(App)
})