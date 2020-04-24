import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import './common/filter'
Vue.prototype.$moment = moment
moment.locale('zh-cn')
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
