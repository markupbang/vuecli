import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/style.scss';
import "@/assets/js/jquery.matchHeight.js";
window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
