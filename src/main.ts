import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HelloWorld from './components/HelloWorld.js';
import { Cascader } from 'ant-design-vue';

Vue.component('ACascade', Cascader)
Vue.use(HelloWorld);

Vue.config.performance = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
