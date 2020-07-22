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
  Collapse,
  CollapseItem,
  Timeline,
  TimelineItem,
  Card,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import './styles.scss'
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.config.productionTip = false;
Vue.prototype.cos = function () {
  console.log(123);
  console.log(321)
};
// 谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)
// Vue.mixin({
//   mounted() {
//     console.log('全局mixin混入')
//   }
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
