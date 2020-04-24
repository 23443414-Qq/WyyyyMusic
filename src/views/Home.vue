<template>
  <div class="home">
 <router-view/>
    <div id="nav">
      <router-link to="/home/homepager">Home</router-link>
      <router-link to="/home/about">Iibrary</router-link>
      <div @click="goFlagMusic" class="flagMusic" :id="flagMusic?flagBGimg:'' "></div>
      <router-link to="/home/index">Rank</router-link>
      <router-link to="/home/MyInfo">My</router-link>
      <!-- <router-link v-for="item in navBar" :key="item.id" :to="item.path">{{item.name}}</router-link> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 3rem;
  #nav {
    position: absolute;
    bottom: 0;
    height: 3rem;
    width: 100%;
    background-color: rgba(0,0,0,0.4);

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
    width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    left: 47%;
    top: 0.14rem;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    background-size: 75px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('./bgi3.jpg');
    animation: spin 15s infinite linear;
  }
  #flagBGimg{
    animation-play-state:paused;
  }
   @keyframes spin {
       from {
           transform: rotate(0deg);
       }
       to {
           transform: rotate(360deg);
       }
   }
}
</style>

<script>
// import navBar from '../../data/navBar.json'
import Vue from 'vue'
import { Circle } from 'vant'

Vue.use(Circle)
export default {
  data () {
    return {
      currentRate: 0,
      flagMusic: false,
      flagBGimg: 'flagBGimg',
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      },
      isRotation: true
    }
  },
  methods: {
    goFlagMusic () {
      this.$router.push('/flagMusic')
    }
  }
}
</script>
