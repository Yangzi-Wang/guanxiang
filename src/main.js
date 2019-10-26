import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import http from './http'
Vue.prototype.$http = http

import detectOrient from './utils/detectOrient'
import './plugins/element.js'
window.onresize = detectOrient
document.documentElement.style.fontSize = document.documentElement.clientWidth / 24.36 + 'px';
// document.documentElement.style.fontSize = document.documentElement.clientHeight / 11.25 + 'px';

import { Message } from 'element-ui';
Vue.prototype.$message = Message;


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
