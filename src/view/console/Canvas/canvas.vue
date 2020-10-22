<template>
  <div class="box_canvas">
    <canvas id="myCanvas" :width="innerWidth" :height="innerHeight"></canvas>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        innerHeight: 0,
        innerWidth: 0,
      }
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
      this.$nextTick(() => {
        this.innerWidth = document.getElementById('content').clientWidth;
        this.innerHeight = document.getElementById('content').clientHeight;
      })
    }
  }
</script>

<style lang="less" scoped>
  .box_canvas {
  }
</style>
