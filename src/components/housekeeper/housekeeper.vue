<template>
	<div ref="housekeeper" class="box_warpper">
		<div @mousemove="showBubble=true" @mouseout="showBubble=false">
			<div :class="(showBubble || longShowBubble) ? 'show':'hide'" class="bubble ovhide transition __relative">
				<p v-html="speak"></p>
				<el-input @keydown.enter.native="analysis" v-if="instructionsInput" v-model="instructionsStr"
									placeholder="Please enter here"
									type="text" size="small" class="mt10"></el-input>
			</div>
			<div @mouseup.left="help"
					 class="housekeeper inlineBlock pointer __absolute">
				<div class="__absolute"></div>
			</div>
		</div>
	</div>
</template>

<script>
  import home from "../../../api/home"
  import Cookie from 'js-cookie'

  export default {
    data() {
      return {
        speak: 'Hello, sir.',
        showBubble: false,
        longShowBubble: false,
        instructionsInput: false,
        instructionsStr: '',
      }
    },
    filters: {},
    methods: {
      setSpeak(str) {
        this.reduction();
        setTimeout(() => {
          this.speak = str;
          this.longShowBubble = true;
        }, 200);
        setTimeout(() => {
          this.reduction();
        }, 7000);
      },
      analysis() {
        let instructionsArr = ['天气'];
        let operation = ['weatherQuery'];
        let index = instructionsArr.findIndex((item, index) => this.instructionsStr.includes(item));
        if (index >= 0) {
          this[operation[index]]();
        } else {
          this.notFound();
        }
      },
      notFound() {
        this.setSpeak('No such service.')
      },
      weatherQuery() {
        home.getWeather('杭州').then((res) => {
          let data = res.data.data;
          let year = new Date().getFullYear();
          let month = new Date().getMonth() + 1;
          let str = '先生，今天是' + year + '年' + month + '月' + data.forecast[0].date + ',天气' + data.forecast[0].type + ' 最' + data.forecast[0].high + ' 最' + data.forecast[0].low;
          str = str + ' ' + data.forecast[0].fengxiang + data.forecast[0].fengli + '<br/>';
          str = str + ' 当前温度' + data.wendu + '℃ ' + data.ganmao;
          this.setSpeak(str)
        }).catch(() => {
          this.setSpeak('Sorry, query failed.')
        })
      },
      help() {
        this.speak = 'What can I do for you?';
        this.longShowBubble = true;
        this.instructionsInput = true;
      },
      reduction() {
        this.showBubble = false;
        this.longShowBubble = false;
        setTimeout(() => {
          this.speak = 'Hello, sir.';
          this.instructionsInput = false;
          this.instructionsStr = '';
        }, 200);
      },
      init() {
        if (Cookie.get('Welcome') !== 'hide') {
          let time = new Date().getTime();
          let date = new Date(time + (1000 * 60 * 60 * 5));
          this.setSpeak('Welcome back, sir.');
          Cookie.set('Welcome', 'hide', {expires: date});
        }
      },
    },
    components: {},
    created() {
      document.addEventListener('click', (e) => {
        if (!this.$refs.housekeeper.contains(e.target)) {
          setTimeout(() => {
            this.reduction()
          }, 500)
        }
      })
    },
    mounted() {
      this.init();
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
			top: 0;
			right: 0;

			div {
				border-radius: 50%;
				width: 50px;
				height: 50px;
				top: 50%;
				left: 50%;
				animation: housekeeperJump2 0.7s infinite alternate;
				margin: -24px 0 0 -25px;
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

		.transition {
			transition: all 0.2s;
			-moz-transition: all 0.2s; /* Firefox 4 */
			-webkit-transition: all 0.2s; /* Safari 和 Chrome */
			-o-transition: all 0.2s; /* Opera */
		}

		.bubble {
			display: block;
			border-radius: 5px;
			box-shadow: 0 3px 12px rgba(27, 31, 35, .15), 0 0 1px rgba(27, 31, 35, .2);
			background: white;
			min-width: 115px;
			max-width: 300px;
			min-height: 61px;
			top: 10px;
			right: 90px;
			padding: 20px;
		}

		.show {
			opacity: 1;
		}

		.hide {
			opacity: 0;
		}
	}
</style>
