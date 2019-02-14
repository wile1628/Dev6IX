<template>
  <div id="app">
    <img  src="./assets/bck8.jpg" id="bg" alt=""/>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main.styl';
  body{
    overflow-y: unset;
    margin: 0;
    padding: 0;
  //  background-image: url("http://articles.mtgcardmarket.com/wp-content/uploads/2016/06/Progenitus-MtG-Art-e1467312077717.jpg");
    // background-image: url("assets/bck5.jpg");
    // background-size: 1925px 1030px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
  #bg {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
</style>
