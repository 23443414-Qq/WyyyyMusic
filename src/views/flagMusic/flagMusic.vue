<template>
  <div class="flagMusic">
    <header>
      <div class="goBack" @click="goBack"><img src="../../assets/flagMusic/down.png" alt=""></div>
      <div class="tit"></div>
      <div class="share"></div>
    </header>
  </div>
</template>
<style lang="less" scoped>
.flagMusic{
  header{
    width: 100%;
    height: 36px;
    .goBack{
      width: 13%;
      height: 100%;
      display: inline-block;
      img{
        display: block;
        width: 40%;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
    .tit{
      overflow: hidden;
      width: 74%;
      height: 100%;
      display: inline-block;
      background-color: yellow;
    }
    .share{
      width: 13%;
      height: 100%;
      display: inline-block;
      background-color: red;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  }
}
</script>
