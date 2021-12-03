import Vue from 'vue';
import App from './App.vue';
import checkView from 'vue-check-view';

Vue.use(checkView);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
