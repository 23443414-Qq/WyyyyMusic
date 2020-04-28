/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
// import { getToken } from 'util'
import './common/filter'
import './common/common.css'
Vue.prototype.$moment = moment
moment.locale('zh-cn')
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// router.beforeEach((to, from, next) => {
//   if (getToken('MUSIC_U') || getToken('__csrf') || getToken('__remember_me')) {
//     console.log('没有设置token')
//     next()
//   } else {
//     next('/login')
//   }
// })
