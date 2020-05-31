<template>
	<div @click="getCoordinate()" @keyup="reset" class="box_warppe">
		<v-canvas/>
	</div>
</template>

<script>
  import canvas from './canvas'

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
        let scrollTop = document.getElementsByClassName('appContent')[0].scrollTop;
        let clientWidth = document.getElementsByClassName('appContent')[0].clientWidth;
        clientWidth = clientWidth > 1100 ? clientWidth : 1100;
        let clientX = event.clientX;
        let clientY = event.clientY;
        let X = clientX - ((clientWidth - 1100) / 2) - 10;
        let Y = (clientY - 102) + scrollTop;
        this.canvas(X, Y)
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
	}
</style>
