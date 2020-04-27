<template>
  <div class="recommend">
    <template>
      <div class="head">
        <span class="ThisDay">{{this.$moment().format('DD')}}</span> A P R
        <span class="ThisWeek">周&nbsp;{{ this.$moment().format('E') | NumberToCharacter }}</span>
        <span class="more" @click="HotMoreMusic">更多歌单≯</span>
      </div>
      <div class="MusicList">
        <div v-for="item in hot.MusicList" :key="item.id" @click="MusicItem(item,item.tags[0])" class="MusicItem">
          <img :src="item.coverImgUrl" alt="">
          <p class="Musictext">{{item.name}}</p>
        </div>
         <div class="head">
          <span class="titDay">Day</span> 推荐&nbsp;&nbsp;Music
          <span class="more">更多单曲≯</span>
        </div>

      </div>
    </template>
  </div>
</template>

<script>
export default {
  created () {
    this.login()
    this.getPlayList()
    this.day()
  },
  data () {
    return {
      userId: '',
      week: '',
      hot: {
        MusicList: []
      },
      dayMusic: []
    }
  },
  methods: {
    getPlayList () {
      this.$http.post('/top/playlist?limit=6')
        .then((res) => {
          // console.log(res)
          this.hot.MusicList = res.data.playlists
        })
    },
    HotMoreMusic () {
      this.$router.push('/hotmoremusic')
    },
    MusicItem (item, name) {
      // console.log(item)
      this.$router.push({ name: 'songList', params: { id: item.id, name: name } })
      // 979519558
    },
    day () {
      this.$http.post('/login/refresh')
      this.$http.post('/personal_fm')
        .then((res) => {
          console.log(res)
          this.dayMusic = res.data.recommend
        })
    },
    login () {
      this.$http.post('/login/cellphone?phone=13564278597&password=qq23443414')
        .then((res) => {
          // console.log(res)
          this.userId = res.deta.account.id
        })
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  width:100%;
  height:100%;
  overflow: auto;
  padding: 0 10px;
}
.head{
  width: 100%;
  height: 36px;
  overflow: hidden;
  // background-color: yellow;
  .ThisDay{
    font-size: 30px;
  }
  .ThisWeek{
    font-size: 14px;
    margin-left: 15px;
  }
  .more{
    float: right;
    line-height: 45px;
    font-size: 12px;
  }
}
.MusicList{
  background-color: #fff;
  margin-top: 10px;
  .MusicItem{
    width: 30%;
    // height: 145px;
    float: left;
    margin-left: 2.6%;
    margin-bottom: 10px;
    background-color: #d2d2d266;
    padding-bottom: 5px;
    border-radius: 6px;
    img{
      width: 100%;
      // height: 110px;
      border-radius: 10px;
    }
    .Musictext{
      height: 1.625rem /* 26/16 */;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
      margin: 0 auto;
      font-size: 12px;
      line-height: 13px;
      // height: 28px;
      color: #565050;
      font-weight: 600;
    }
  }
  .titDay{
    font-size: 1.2rem;
    line-height: 36px;
  }
}
</style>
