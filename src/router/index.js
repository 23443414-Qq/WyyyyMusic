
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about/About.vue'
import Index from '../views/index/Index.vue'
import My from '../views/my/myInfo.vue'
import HomePage from '../views/homepage/homepage.vue'
import FlagMusic from '../views/flagMusic/flagMusic.vue'
import HotMoreMusic from '../views/HotMoreMusic/HotMoreMusic.vue'
import SongList from '../views/SongList/SongList.vue'
import Vuex from 'vuex'
import vant from 'vant'
Vue.use(VueRouter)
Vue.use(vant)
Vue.use(Vuex)
const routes = [{
  path: '/',
  redirect: '/home/homepager'
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  redirect: '/home/homepager',
  children: [{
    path: '/home/about',
    name: 'about',
    component: About
  }, {
    path: '/home/index',
    name: 'index',
    component: Index
  }, {
    path: '/home/MyInfo',
    name: 'my',
    component: My
  }, {
    path: '/home/homepager',
    name: 'homepager',
    component: HomePage
  }
  ]
}, {
  path: '/flagMusic',
  name: 'flagMusic',
  component: FlagMusic
}, {
  path: '/hotmoremusic',
  name: 'HotMoreMusic',
  component: HotMoreMusic
}, {
  path: '/songList',
  name: 'songList',
  component: SongList
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
