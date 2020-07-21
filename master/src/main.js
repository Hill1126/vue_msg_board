import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Header from './components/Header.vue'


Vue.config.productionTip = false

Vue.component(Header);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
