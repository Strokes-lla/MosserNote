<template>
	<div id="app">
		<v-header></v-header>
		<v-housekeeper></v-housekeeper>
		<div class="videoContent __absolute">
			<video src="@/assets/img/bg.mp4" autoplay loop muted>您当前的浏览器不支持video</video>
		</div>
		<div class="appContent __absolute">
			<div class="box __relative" id="content">
				<div class="contentLeft inlineBlock">
					<router-view/>
				</div>
				<v-contentRight></v-contentRight>
			</div>
		</div>
	</div>
</template>

<script>
  import header from "@/components/header"
  import housekeeper from "@/components/housekeeper/housekeeper.vue"
  import contentRight from "@/components/contentRight.vue"

  export default {
    data() {
      return {}
    },
    components: {
      'v-header': header,
      'v-housekeeper': housekeeper,
      'v-contentRight': contentRight
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

		/*设置灰度模式*/
		/*filter: grayscale(100%) !important;*/

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

		.appContent {
			top: 72px;
			padding: 20px 0;
			bottom: 0;
			left: 0;
			right: 0;
			overflow-y: scroll;

			> .box {
				width: 1000px;
				display: block;
				margin: 0 auto;

				> .contentLeft {
					min-height: 1300px;
					width: 700px;
					border-radius: 10px;
					background: rgba(242, 245, 248, 0.95);
					padding: 10px;
				}
			}
		}
	}
</style>
