<template>
  <div @click="getCoordinate()" @keyup="reset" class="box_warpper ovhide __absolute bottom0 left0 right0">
    <v-canvas/>
  </div>
</template>

<script>
  import canvas from '../canvas'
  export default {
    data() {
      return {
        empty: false,
        clientX: 0,
        clientY: 0,
      }
    },
    filters: {},
    methods: {
      reset(e) {
        console.log(e)
      },
      getCoordinate() {
        console.log(event.clientX);
        console.log(event.clientY);
        this.canvas(event.clientX, (event.clientY - 72))
      },
      canvas(x, y) {
        let c = document.getElementById("myCanvas");
        let cxt = c.getContext("2d");
        if (this.empty) {
          this.empty = false;
          cxt.beginPath();
        }
        cxt.lineTo(x, y);
        cxt.save();
        cxt.stroke();
      },
    },
    created() {
      let that = this;
      document.onkeyup = function (e) {
        if (e.keyCode === 27) {
          that.empty = true;
        }
      }
    },
    components: {
      'v-canvas': canvas,
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    top: 72px;
    #myCanvas {
    }
  }
</style>
