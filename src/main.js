import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../css/base.css'
import {
  Input,
  InputNumber,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import './styles.scss'
Vue.use(Input);
Vue.use(InputNumber);
Vue.config.productionTip = false;
Vue.prototype.cos = function () {
  console.log(123);
  console.log(321)
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
