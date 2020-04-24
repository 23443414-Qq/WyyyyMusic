import Vue from 'vue'
import axios from 'axios'
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})
Vue.filter('NumberToCharacter', function (value) {
  value = Number(value)
  var CharacterNum = ['零', '一', '二', '三', '四', '五', '六', '七']
  for (var i = 0; i < CharacterNum.length; i++) {
    if (value === i) {
      return CharacterNum[i]
    }
  }
})
const BASE_API = 'http://localhost:3000'
// 使用 this.$http.post(``,参数).then(res=>{}).catch(error=>{});
Vue.prototype.$http = axios
axios.defaults.baseURL = BASE_API
axios.defaults.withCredentials = true
Vue.prototype.baseUrl = BASE_API
