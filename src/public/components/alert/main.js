import Vue from 'vue';
import Main from './index.vue';
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Alert = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  let id = 'alert_' + seed++;
  options.onClose = function() {
    Alert.close(id);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instances.push(instance)
  return instance.vm;
};

Alert.close = function(id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
}

export default Alert;
