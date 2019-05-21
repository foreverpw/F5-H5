import Vue from 'vue'
import App from './App'
import './assets/scss/main.scss';
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);

//register filters
import filters from './common/filters'
for(name in filters){
  Vue.filter(name, filters[name])
}

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

// require('./weixin')
require('./location.js')

new Vue({
  el: '#app',
  render: h => h(App)
})