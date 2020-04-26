<template>
  <div class="home">
        <van-button class="stop" @click="stopFlag">停止/播放</van-button>
 <router-view/>
    <div id="nav">
      <router-link to="/home/homepager">Home</router-link>
      <router-link to="/home/about">Iibrary</router-link>
      <div class="route" @click="goFlagMusic"><div class="flagMusic" :id="flagMusic?flagBGimg:'' "></div></div>
      <router-link to="/home/index">Rank</router-link>
      <router-link to="/home/MyInfo">My</router-link>
      <!-- <router-link v-for="item in navBar" :key="item.id" :to="item.path">{{item.name}}</router-link> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.route{
  position: absolute;
  width: 2.7rem;
  height: 2.7rem;
  left: 53%;
  top: 0.1rem;
  transform: translateX(-50%);
}
.home {
  height: 100%;
  width: 100%;
  padding-bottom: 3rem;
  position: relative;

  #nav {
    position: fixed;
    top: calc(100vh - 3rem);
    left: 0rem;
    height: 3rem;
    width: 100vw;
    background-color: #99969666;

    a {
      position: absolute;
      width: 25%;
      font-size: 10px;
      height: 100%;
      text-align: center;
      display: inline-block;
      background-size: 28%;
      transition: 0.3s all ease-in-out;
      background-repeat: no-repeat;
      background-position: center 0;
      padding-top: 7%;
      color: #f9edf6;

      &.router-link-exact-active {
        color: #0a0a0a;
        font-size:15px;
        background-size: 32%;
      }
    }
    a:nth-child(1) {
      background-image: url("../assets/home.png");
          top: 3px;
    }
    a:nth-child(2) {
      background-image: url("../assets/Iibrary.png");
      top: 3px;
      left: 20%;
    }
    a:nth-child(4) {
      background-image: url("../assets/park.png");
          top: 3px;
      left: 60%;
    }
    a:nth-child(5) {
      background-image: url("../assets/my.png");
          top: 3px;
      right: 0;
    }
    .router-link-active:nth-child(1) {
      background-image: url("../assets/home-hover.png");
    }
    .router-link-active:nth-child(2) {
      background-image: url("../assets/Iibrary-hover.png");
    }
    .router-link-active:nth-child(4) {
      background-image: url("../assets/park-hover.png");
    }
    .router-link-active:nth-child(5) {
      background-image: url("../assets/my-hover.png");
    }
  }
  .flagMusic{
    position: absolute;
    width: 2.7rem;
    height: 2.7rem;
    left: 0;
    background-color: #fff;
    border-radius: 50%;
    background-size: 75px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('./bgi3.jpg');
    animation: spin 30s infinite linear;
    border: thick double #a2e4ff;
  }
  #flagBGimg{
    animation-play-state:paused;
  }
  .route::after{
     content: '';
     position: absolute;
     left: 50%;
     transform: translate(-50%,-50%);
     top: 50%;
     width: 1.5rem;
     height: 1.5rem;
     background-color: #ff2e13;
     border-radius: 50%;
     background-image: url('../assets/flagMusic/flag1.png');
     background-size: 100% 100%;
  }
   @keyframes spin {
       from {
           transform: rotate(0deg);
       }
       to {
           transform: rotate(360deg);
       }
   }

    // @keyframes spin2 {
    //     from {
    //         transform: translate(-50%, 22px) rotate(0turn) translate(50%, -22px) rotate(1turn)
    //     }

    //     to {
    //         transform: translate(-50%, 22px) rotate(1turn) translate(50%, -22px) rotate(0turn)
    //     }
    // }
}

</style>

<script>
// import navBar from '../../data/navBar.json'
import Vue from 'vue'
import { Circle } from 'vant'

Vue.use(Circle)
export default {
  props: {
  },
  data () {
    return {
      currentRate: 0,
      flagMusic: false,
      flagBGimg: 'flagBGimg',
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      },
      isRotation: true,
      pseudoElementBoxShadow: { default: 'spin2 5s infinite linear' }
    }
  },
  methods: {
    goFlagMusic () {
      this.$router.push('/flagMusic')
    },
    stopFlag () {
      this.flagMusic = !this.flagMusic
      console.log(this.$refs.singleDom)
    }
  }
}
</script>
