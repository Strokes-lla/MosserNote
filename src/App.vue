<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
  import header from "@/components/header"
  export default {
    data() {
      return {}
    },
    components: {
      'v-header':header
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    position: relative;
    /*overflow: auto;*/
    -webkit-overflow-scrolling: touch;
  }
</style>
