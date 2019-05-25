import Vue from 'vue';
import Main from './index.vue';
let Constructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Modal = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};

  let id = 'success_' + seed++;
  let oldOnClose = options.oldOnClose
  options.onClose = function() {
    if(oldOnClose){
      oldOnClose()
    }
    Modal.close(id);
  };
  instance = new Constructor({
    data: options
  });
  instance.id = id
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instances.push(instance)
  return instance.vm;
};

Modal.close = function(id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
}

export default Modal;
