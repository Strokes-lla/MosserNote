<template>
  <div class="box_warpper">
    <canvas id="myCanvas" :width="innerWidth" :height="innerHeight"></canvas>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      }
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
