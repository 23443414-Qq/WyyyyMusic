<template>
  <div class="HotMoreMusic">
     <header>
      <div class="goBack" @click="goBack"><img src="../../assets/flagMusic/down.png" alt=""></div>
      <div class="tit">网友精选歌单</div>
    </header>
    <div :class="showList?hed1:hed">
        <van-button class="list" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="listGetMusic('Down')">Down</van-button>
        <van-button class="list" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="listGetMusic('最新')">最新</van-button>
        <van-button class="list" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="listGetMusic('最热')">最热</van-button>
        <van-button v-for="(item,index) in listName" :key="index" class="list" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="listGetMusic(item.name)">{{item.name}}</van-button>
    </div>
    <main class="main">
        <div class="itemgrid" @click="itemgrid(item.id)" v-for="item in HotMoreMusic" :key="item.id">
          <div class="img">
            <img :src="item.coverImgUrl">
          </div>
            <h3>{{item.name}}</h3>
      </div>
    </main>
</div>
</template>
<style lang="less" scoped>
.HotMoreMusic{
  position: relative;
}
.main{
  height: calc(100vh - 5.35rem);
  overflow: auto;
  padding-bottom: 1rem;
}
  header{
    width: 100%;
    height:  2.25rem /* 36/16 */;
    overflow: hidden;
    position: static;
    top: 0;
    .goBack{
      width: 13%;
      height: 100%;
      display: inline-block;
      img{
        display: block;
        width: 40%;
        margin: 0 auto;
        margin-top: 10px;
        transform: rotate(90deg);
      }
    }
    .tit{
      overflow: hidden;
      width: 87%;
      height: 100%;
      line-height: 2.9rem /* 36/16 */;
      display: inline-block;
      padding-right: 3.0625rem /* 49/16 */;
      text-align: center;
      font-size: 0.95rem /* 16/16 */;
    }
  }
  .hed{
    height: 2.5rem;
    margin-top: 0.6rem;
    width: 100vw;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    box-shadow: 0px 7px 9px 1px #ccc;
    margin-bottom: 0.8rem;
    position: static;
    top: 2.25rem;
    .list{
      width: 17%;
      height: 1.8rem;
      border-radius: 0.3rem;
      display: inline-block;
      margin-top: 0.35rem;
      margin-left: .5625rem /* 9/16 */;
      padding: 0;
      line-height: 1.8rem;
    }
  }
  .hed.showListMActive{
    height: 33rem;
  }
  .itemgrid{
    width: 45%;
    height: 13.5rem;
    float: left;
    margin-left: 3.33%;
    margin-bottom: 0.5rem;
    border: 1px solid #e4dfdf;
    border-radius: 0.5rem;
    padding: 0.2rem;
    box-shadow: 0px 0px 9px 1px #cdc6d0;
    .img{
      width: 100%;
      float: left;
      border-radius: 0.5rem;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    h3{
      float: left;
      padding: 0 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
    }
  }
</style>
<script>
import Vue from 'vue'
import { Toast, Button, Tab, Tabs } from 'vant'

Vue.use(Toast, Button, Tab, Tabs)
export default {
  created () {
    this.getPlayList()
    this.getlistName()
  },
  data () {
    return {
      week: '',
      HotMoreMusic: [],
      limit: 20,
      showList: false,
      hed1: ['hed', 'showListMActive'],
      hed: 'hed',
      order: '',
      songname: '',
      listName: [
        { name: 'Down', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '最新', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '最热', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '浪漫', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '华语', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: 'D J', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '话语', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '古风', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '学习', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '韩语', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '清晨', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '欧美', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '伤感', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '孤独', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '民谣', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '轻音乐', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        { name: '流行', color: 'linear-gradient(to right,  #4bb0ff, #6149f6)' }
      ]
    }
  },
  methods: {
    getPlayList () { // 首屏展示数据
      this.$http.post(`/top/playlist?limit=${this.limit}&order=${this.order}&cat=${this.songname}`)
        .then((res) => {
          // console.log(res)
          this.HotMoreMusic = res.data.playlists
        })
    },
    goBack () {
      this.$router.back(-1)
    },
    listGetMusic (item) {
      if (item === 'Down') {
        this.showList = !this.showList
      } else if (item === '最新') {
        this.order = 'new'
        this.getPlayList()
      } else if (item === '最热') {
        this.order = 'hot'
        this.getPlayList()
      } else {
        this.songname = item
        this.showList = false
        this.getPlayList()
      }
    },
    getlistName () { // 歌单获取
      this.$http.post('/playlist/catlist')
        .then((res) => {
          console.log(res)
          this.listName = res.data.sub
        })
    },
    itemgrid (data) {
      this.$router.push({ name: 'songList', params: { id: data } })
    }
  }
}
</script>
