import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../css/base.css'
Vue.config.productionTip = false;
Vue.prototype.cos = function () {
  console.log(123);
  console.log(321)
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
