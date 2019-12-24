<template>
  <div @click="getCoordinate()" class="box_warpper ovhide __absolute bottom0 left0 right0">
    <v-canvas/>
  </div>
</template>

<script>
  import canvas from '../canvas'

  export default {
    data() {
      return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      }
    },
    filters: {},
    methods: {
      getCoordinate() {
        console.log(event.clientX);
        console.log(event.clientY);
        this.canvas(event.clientX, (event.clientY - 72))
      },
      canvas(x, y) {
        let c = document.getElementById("myCanvas");
        let cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.strokeStyle = "#FF0000";
        cxt.moveTo(this.innerWidth, this.innerHeight);
        cxt.lineTo(x, y);
        cxt.fill();
        cxt.stroke();
      },
      init() {
        let c = document.getElementById("myCanvas");
        let cxt = c.getContext("2d");
        cxt.fillStyle = "#FF0000";
        this.innerHeight = (this.innerHeight / 2) - 200;
        this.innerWidth = this.innerWidth / 2;
        cxt.arc(this.innerWidth, this.innerHeight, 15, 0, Math.PI * 2, true);
        cxt.fill();
        cxt.beginPath();
      }
    },
    components: {
      'v-canvas': canvas,
    },
    mounted() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    top: 72px;
  }
</style>
