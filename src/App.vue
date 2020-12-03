<template>
  <div id="app">
    <Headers></Headers>
    <housekeeper></housekeeper>
    <div class="appContent __absolute">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import housekeeper from "./components/housekeeper/housekeeper";
  import Headers from "./components/Headers";

  export default {
    data() {
      return {}
    },
    components: {
      housekeeper,
      Headers
    },
    methods: {},
    mounted() {
      console.log(new Array(12).fill().map((item, index) => (index + 1) + '月'))
    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    /*height: 100%;*/
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    min-width: 1200px;
    /*设置灰度模式*/
    /*filter: grayscale(100%) !important;*/

    .appContent {
      top: 48px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: scroll;
    }
  }
</style>
