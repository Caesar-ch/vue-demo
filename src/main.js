import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http
// require('@/api/mock.js')

// if (process.env.NODE_ENV === 'development ') require('../src/api/mock.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
