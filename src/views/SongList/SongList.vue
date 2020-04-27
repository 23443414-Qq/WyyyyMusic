<template>
  <div class="SongList">
   <header>
      <div class="goBack" @click="goBack"><img src="../../assets/flagMusic/down.png" alt=""></div>
      <div class="tit">{{title}}歌曲列表</div>
    </header>
  </div>
</template>
<style lang="less" scoped>
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
</style>
<script>
export default {
  created () {
    this.getSongList()
  },
  data () {
    return {
      title: this.$route.params.name
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    getSongList () { // 页面开始的时候根据上一个页面传的 id 获取对应歌单的值
      this.$http.post('/playlist/detail?id=24381616')
      // this.$http.post(`/related/playlist?id=${this.$route.params.id}`)
        .then((res) => {
          console.log('获取歌单下的歌曲', res.data.playlist.tracks)
        })
    }
  }
}
</script>
