<template>
	<div class="box_wheelDisc">
		<div :class="!Judge ? 'rotate':''" class="wheelDiscBox transition">
			<div v-for="(item,index) in list" class="__absolute pointer" @click="Jump(item.url)"
					 :style="{top:item.top+'px',left:item.left+'px'}">
				<div :style="{background:'url('+item.ico+')',backgroundSize:'100% 100%'}"></div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          ico: 'https://github.githubassets.com/favicons/favicon.svg',
          url: 'https://github.com/Strokes-lla',
          top: -15,
          left: 85,
        }, {
          ico: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/favicon/favicon-32x32_ca689c3.png',
          url: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh',
          top: 15,
          left: 15,
        }, {
          ico: 'https://weibo.com/favicon.ico',
          url: 'https://weibo.com/fenyu95/home?wvr=5',
          top: 85,
          left: -15,
        }, {
          ico: 'https://static.zhihu.com/static/favicon.ico',
          url: 'https://www.zhihu.com/hot',
          top: 155,
          left: 15,
        }, {
          ico: 'https://tb1.bdstatic.com/tb/favicon.ico',
          url: 'https://tieba.baidu.com/index.html',
          top: 185,
          left: 85,
        }],
        Judge: false,
      }
    },
    filters: {},
    methods: {
      Jump(url) {
        window.open(url)
      }
    },
    components: {},
    mounted() {
      setTimeout(() => {
        this.Judge = true;
      }, 100)
    }
  }
</script>

<style lang="less" scoped>
	.box_wheelDisc {
		.wheelDiscBox {
			width: 200px;
			height: 200px;
			/*background: red;*/
			border-radius: 50%;
			transform: rotate(-20deg);

			> .__absolute {
				width: 30px;
				height: 30px;
				overflow: hidden;
				border-radius: 50%;
				background: white;
				opacity: 0.9;
				box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.7);
				div {
					width: 30px;
					height: 30px;
					border-radius: 50%;
				}
			}
		}

		.rotate {
			transform: rotate(-120deg);
			opacity: 0;
		}

		.transition {
			transition: all 0.4s;
			-moz-transition: all 0.4s; /* Firefox 4 */
			-webkit-transition: all 0.4s; /* Safari 和 Chrome */
			-o-transition: all 0.4s; /* Opera */
		}

	}
</style>
