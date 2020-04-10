<template>
	<div @click="getCoordinate()" class="box_warpper">
		<v-canvas/>
	</div>
</template>

<script>
  import canvas from '../canvas'

  export default {
    data() {
      return {
        innerHeight: document.getElementById('content').clientHeight - 20,
        innerWidth: document.getElementById('content').clientWidth - 20,
      }
    },
    filters: {},
    methods: {
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
	}
</style>
