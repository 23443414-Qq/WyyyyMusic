<template>
  <div class="cantainer">
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-size:100% 100%;
  font-size: 10px;
}

</style>
