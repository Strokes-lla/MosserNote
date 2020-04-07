<template>
	<div id="app">
		<v-header></v-header>
		<div class="videoContent __absolute">
			<video src="@/assets/img/bg.mp4" autoplay loop muted>您当前的浏览器不支持video</video>
		</div>
		<div class="Content __absolute">
			<div class="box __relative">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
  import header from "@/components/header"

  export default {
    data() {
      return {}
    },
    components: {
      'v-header': header
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		/*height: 100%;*/
		position: absolute;
		top: 0;
		bottom: 0;
		overflow: auto;
		-webkit-overflow-scrolling: touch;

		.videoContent {
			top: 72px;
			left: 0;
			right: 0;
			bottom: 0;

			video {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}

		.Content {
			top: 72px;
			padding: 20px 0;
			bottom: 0;
			left: 0;
			right: 0;
			overflow-y: scroll;

			> .box {
				border-radius: 10px;
				padding: 10px;
				width: 1100px;
				display: block;
				margin: 0 auto;
				background: rgba(242, 245, 248,0.95);
				min-height: 1300px;
			}
		}
	}
</style>
