<template>
	<div @click="getCoordinate()" class="box_warpper">
		<v-canvas/>
	</div>
</template>

<script>
  import canvas from './canvas'

  export default {
    data() {
      return {
        innerWidth: document.getElementById('content').clientWidth - 20,
        innerHeight: document.getElementById('content').clientHeight - 20,
        positionX: 0,
        positionY: 0,
        coreX: 0,
        coreY: 0,
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
        this.positionX = clientX - ((clientWidth - 1100) / 2) - 10;
        this.positionY = (clientY - 102) + scrollTop;
        this.canvas(this.positionX, this.positionY)
      },
      canvas(x, y) {
        let c = document.getElementById("myCanvas");
        let cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.strokeStyle = "#FF0000";
        console.log('coreX' + this.coreX);
        console.log('coreY' + this.coreY);
        console.log('x' + x);
        console.log('y' + y);
        if (this.coreX === x && this.coreY === y) {
          cxt.fillStyle = "#FF0000";
          cxt.arc(x, y, 15, 0, Math.PI * 2, true);
          cxt.fill();
        } else {
          cxt.clearRect(0, 0, this.innerWidth, this.innerHeight);
          let coreX = this.coreX > x ? this.coreX-- : this.coreX++;
          let coreY = this.coreY > y ? this.coreY-- : this.coreY++;
          cxt.moveTo(coreX, coreY);
          cxt.lineTo(x, y);
          cxt.stroke();
          cxt.beginPath();
          cxt.fillStyle = "#FF0000";
          cxt.arc(coreX, coreY, 15, 0, Math.PI * 2, true);
          cxt.fill();
          setTimeout(() => {
            this.canvas(x, y)
          }, 10)
        }
      },
      init() {
        let c = document.getElementById("myCanvas");
        let cxt = c.getContext("2d");
        this.coreX = this.innerWidth / 2;
        this.coreY = (this.innerHeight / 2) - 200;
        cxt.fillStyle = "#FF0000";
        cxt.arc(this.coreX, this.coreY, 15, 0, Math.PI * 2, true);
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
