<template>
	<div class="box_warpper">
		<canvas id="myCanvas" :width="innerWidth" :height="innerHeight"></canvas>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        innerHeight: document.getElementById('content').clientHeight-20,
        innerWidth: document.getElementById('content').clientWidth-20,
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
