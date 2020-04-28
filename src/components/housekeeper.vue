<template>
	<div class="box_warpper">
		<div class="housekeeper inlineBlock pointer">
			<div class="__absolute"></div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {}
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
		z-index: 9999;
		position: fixed;
		right: 30px;
		top: 100px;

		.housekeeper {
			width: 70px;
			height: 70px;
			background: rgba(128, 128, 128, 0.75);
			border-radius: 50%;
			box-shadow: 2px 3px 10px rgba(255, 255, 255, 0.7);
			animation: housekeeperJump1 0.7s infinite alternate;
			div {
				border-radius: 50%;
				width: 55px;
				height: 55px;
				top: 50%;
				left: 50%;
				animation: housekeeperJump2 0.7s infinite alternate;
				margin: -27px 0 0 -27px;
				background: rgba(128, 128, 128, 0.75);
			}
		}

		@keyframes housekeeperJump1 {
			0% {
				transform: scale(1.25, 1.25);
			}
		}
		@keyframes housekeeperJump2 {
			0% {
				transform: scale(0.6, 0.6);
			}
		}
	}
</style>
