<template>
  <div class="flagMusic">
      <div class="bg" ref="bg"></div>
    <header>
      <div class="goBack" @click="goBack"><img src="../../assets/flagMusic/down.png" alt=""></div>
      <div class="tit">{{tit}}</div>
      <div class="share"></div>
    </header>
    <main>
    </main>
    <div class="flag"></div>
  </div>
</template>
<style lang="less" scoped>
.flagMusic{
  color: #fff;
  .bg{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-position: center center;
    background-image: url('../../assets/bgi3.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: -1;
    filter:blur(7px);
  }
  header{
    width: 100%;
    height: 2.25rem /* 36/16 */;
    box-shadow: 1px 1px 8px 1px #ccc;
    .goBack{
      width: 13%;
      height: 100%;
      display: inline-block;
      transform: rotate(90deg);
      img{
        display: block;
        width: 30%;
        margin: 0 auto;
        margin-top: 10px;
        background-image: url();
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
    .share{
      width: 13%;
      height: 100%;
      display: inline-block;
    }
  }
  main{
    height: calc( 100vh - 10.25rem);
    width: 100%;
    // background-color: #ccc;
    // filter:blur(1.2px);
  }
  .flag{
    height: 8rem;
    // background-color: red;
    width: 100%;
  }
}
</style>
<script>
export default {
  created () {
    this.parmas()
  },
  data () {
    return {
      tit: this.$route.params.name,
      id: this.$route.params.id,
      imgSrc: this.$route.params.imgsrc,
      audioSrc: this.$route.params.audiosrc,
      style: {
        bg: `background-image: url('${this.$route.params.imgsrc}');`
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    parmas () {
      console.log(this.$refs)
    }
  }
}
</script>
