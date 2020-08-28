<template>
  <div id="app">
    <v-header></v-header>
    <v-housekeeper></v-housekeeper>
    <div class="videoContent __absolute">
      <video src="@/assets/img/bg.mp4" autoplay loop muted>您当前的浏览器不支持video</video>
    </div>
    <div class="appContent __absolute">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import header from "@/components/header"
  import housekeeper from "@/components/housekeeper/housekeeper.vue"
  import list from '../static/list';

  export default {
    data() {
      return {
        list: list
      }
    },
    components: {
      'v-header': header,
      'v-housekeeper': housekeeper,
    },
    methods: {},
    mounted() {
      // orderShow = [0, 7, 1, 8, 2, 9, 4, 5, 3, 6];
      // orderShow = [0, 9, 1, 10, 2, 11, 3, 5, 6, 4, 7, 8];
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

    /*设置灰度模式*/
    /*filter: grayscale(100%) !important;*/

    .videoContent {
      top: 72px;
      left: 0;
      right: 0;
      bottom: 0;

      video {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .appContent {
      top: 72px;
      padding: 20px 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: scroll;
    }
  }
</style>
