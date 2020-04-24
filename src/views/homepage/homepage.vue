<template>
  <div class="about">
   <div class="headerNav">
      <span :class="sweper.thisIndex == '0' ? nav.active : nav.navItem " @click="navItemHot" >Hot</span>
      <span :class="sweper.thisIndex == '1' ? nav.active : nav.navItem " @click="navItemVideo" >Video</span>
      <span :class="sweper.thisIndex == '2' ? nav.active : nav.navItem " @click="navItemRadio" >Radio</span>
   </div>
   <div class="sweper">
     <van-swipe ref="swiper" @change="swepweChange" height="calc(100vh - 5.5rem)" :loop="sweper.loop" :initial-swipe="sweper.initSperNum" :duration="500" :show-indicators="sweper.Indicators">
          <van-swipe-item><RecommendOne /></van-swipe-item>
          <van-swipe-item><AudioPage /></van-swipe-item>
          <van-swipe-item><RadioStation /></van-swipe-item>
     </van-swipe>
   </div>
  </div>
</template>

<style lang="less" scoped>
.about{
  height: 100%;
  width: 100%;
  .headerNav{
    overflow:hidden;
    height:2.5rem;
    span{
      position: relative;
      padding: 0 1.3rem;
    }
  }
  .navItem{
   font-size: .875rem /* 14/16 */;
   display: inline-block;
   height: 2.5rem /* 40/16 */;
   line-height: 2.5rem /* 40/16 */;
   text-align:center;
   transition: 0.5s all ease-in-out;
  }
  .active{
    position: relative;
    display: inline-block;
    height: 2.4rem /* 40/16 */;
    text-align:center;
    font-size: 1.2rem /* 20/16 */;
    font-weight: 600;
    line-height: 1rem /* 36/16 */;
    transition: 0.5s all ease-in-out;
    color: #c95dd0;
  }
  .active::before{
      content: '';
      position: absolute;
      left: 50%;
      top: 54%;
      width: 40%;
      height: 4px;
      transform: translateX(-50%);
      background-color: #ffd3d9;
      border-radius: 4px;
    }
  .sweper{
    height: calc(100% - 2.5rem);
    .van-swipe{
      height: 100%;
      .van-swipe__track{
        height: 100%;
        .van-swipe-item{
          height: calc(100vh - 5.5rem);
          float: left;
        }
      }
    }
  }
}
</style>

<script>
import RecommendOne from '../../components/recommend/recommend.vue'
import AudioPage from '../../components/audioPage/audio.vue'
import RadioStation from '../../components/RadioStation/RadioStation.vue'
import hedNav from '../../../data/homepage/headerNav.json'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data () {
    return {
      nav: {
        active: 'active',
        navItem: 'navItem',
        HedNavData: hedNav.data
      },
      sweper: {
        Indicators: false,
        initSperNum: 0,
        loop: false,
        thisIndex: '0',
        height: 'calc(100vh - 5.5rem)'
      }
    }
  },
  methods: {
    swepweChange (index) {
      this.sweper.thisIndex = index
    },
    navItemHot () {
      this.$refs.swiper.swipeTo(0)
    },
    navItemVideo () {
      this.$refs.swiper.swipeTo(1)
    },
    navItemRadio () {
      this.$refs.swiper.swipeTo(2)
    }
  },
  components: {
    RecommendOne,
    AudioPage,
    RadioStation
  }
}
</script>
