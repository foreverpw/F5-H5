import Vue from 'vue'
import App from './App'
import './assets/scss/main.scss';
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

//register filters
import filters from './common/filters'
for(name in filters){
  Vue.filter(name, filters[name])
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})