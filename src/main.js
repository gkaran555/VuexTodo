import Vue from 'vue'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',

  /**
   * Bind the store to the Vue instance.
   */
  store,

  render: h => h(App)
});
