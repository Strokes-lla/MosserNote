<template>
  <div ref="housekeeper" class="box_warpper animate__animated animate__fadeInRightBig">
    <menus v-if="menu" class="__relative menu"></menus>
    <wheelDisc v-if="wheelDisc" class="__relative wheelDisc"></wheelDisc>

    <div @mousemove="showBubble=true" @mouseout="showBubble=false">
      <div v-if="isOccupy" :class="setClassBubble()"
           class="bubble ovhide __relative">
        <p v-html="speak"></p>
        <el-input @keydown.enter.native="analysis" v-if="instructionsInput" v-model="instructionsStr"
                  placeholder="Please enter here"
                  type="text" size="small" class="mt10"></el-input>
      </div>
      <div @click="help()" @dblclick="awakenWheelDisc"
           class="housekeeper inlineBlock pointer __absolute">
        <div class="top __absolute"></div>
        <div class="center __absolute"></div>
        <div class="bottom __absolute"></div>
        <div class="core __absolute"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import home from "../../../api/home"
  import menus from "./menus";
  import wheelDisc from "./wheelDisc";
  import Cookie from 'js-cookie'

  export default {
    data() {
      return {
        isOccupy: true,

        speak: 'Hello, sir.',
        showBubble: false,
        longShowBubble: false,
        instructionsInput: false,
        instructionsStr: '',
        menu: false,
        wheelDisc: false,
      }
    },
    filters: {},
    methods: {
      setClassBubble() {
        let classStr = '';
        classStr = (this.showBubble || this.longShowBubble) && this.isOccupy ? 'show' : 'hide';
        classStr = !this.wheelDisc ? classStr + ' transition2' : classStr;
        return classStr
      },
      awakenWheelDisc() {
        if (this.isOccupy) {
          this.isOccupy = false;
          this.wheelDisc = true;
        }
      },
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
        let instructionsArr = ['天气', '收藏'];
        let operation = ['weatherQuery', 'menuShow'];
        let index = instructionsArr.findIndex((item, index) => this.instructionsStr.includes(item));
        if (index >= 0) {
          this.isOccupy = false;
          this[operation[index]]();
        } else {
          this.notFound();
        }
      },
      notFound() {
        this.setSpeak('No such service.')
      },
      menuShow() {
        this.reduction();
        this.menu = true;
        this.isOccupy = false;
      },
      weatherQuery() {
        home.getWeather('杭州').then((res) => {
          let data = res.data.data;
          let year = new Date().getFullYear();
          let month = new Date().getMonth() + 1;
          let str = '先生，今天是' + year + '年' + month + '月' + data.forecast[0].date + ',外面的天气' + data.forecast[0].type + ' 最' + data.forecast[0].high + ' 最' + data.forecast[0].low;
          str = str + ' ' + data.forecast[0].fengxiang + data.forecast[0].fengli + '<br/>';
          str = str + ' 当前温度' + data.wendu + '℃ ' + data.ganmao;
          this.setSpeak(str)
        }).catch(() => {
          this.setSpeak('Sorry, query failed.')
        })
      },
      help() {
        if (this.isOccupy) {
          this.speak = 'What can I do for you?';
          this.longShowBubble = true;
          this.instructionsInput = true;
        }
      },
      reduction() {
        this.isOccupy = true;
        this.menu = false;
        this.wheelDisc = false;
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
    components: {
      menus,
      wheelDisc,
    },
    created() {
      document.addEventListener('click', (e) => {
        if (!this.$refs.housekeeper.contains(e.target)) {
          setTimeout(() => {
            this.reduction()
          }, 300)
        }
      });
    },
    mounted() {
      setInterval(() => {
        this.init();
      }, 300);
    },
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    z-index: 9999;
    position: fixed;
    right: 30px;
    top: 100px;
    animation-delay: 0.3s;

    .menu {
      top: 20px;
      right: 120px;
    }

    .wheelDisc {
      top: -50px;
      left: 50px;
    }

    .housekeeper {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      top: 0;
      right: 0;

      .top {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: url('../../assets/img/housekeeper/solid.png') no-repeat;
        background-size: 100% 100%;
        animation: housekeeperRotate1 1s infinite linear;
      }

      .center {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        background: url('../../assets/img/housekeeper/dotted.png') no-repeat;
        background-size: 100% 100%;
        top: 7px;
        left: 7px;
        animation: housekeeperRotate2 1s infinite linear;
      }

      .bottom {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: url('../../assets/img/housekeeper/solid1.png') no-repeat;
        background-size: 100% 100%;
        top: 15px;
        left: 15px;
        animation: housekeeperRotate1 1s infinite linear;
      }

      .core {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #FFE300;
        top: 30px;
        left: 30px;
        z-index: 10;
        animation: housekeeperJump3 0.5s infinite alternate;
      }
    }

    @keyframes housekeeperRotate1 {
      to {
        transform: rotate(0deg);
      }
      from {
        transform: rotate(360deg);
      }
    }
    @keyframes housekeeperRotate2 {
      to {
        transform: rotate(360deg);
      }
      from {
        transform: rotate(0deg);
      }
    }
    @keyframes housekeeperJump3 {
      to {
        transform: scale(1);
      }
      from {
        transform: scale(1.2);
      }
    }

    .bubble {
      display: block;
      border-radius: 5px;
      box-shadow: 0 3px 12px rgba(27, 31, 35, .15), 0 0 1px rgba(27, 31, 35, .2);
      background: white;
      max-width: 300px;
      top: 20px;
      right: 120px;
      padding: 20px;
      overflow: hidden;
    }

    .show {
      opacity: 1;
      visibility: visible;
    }

    .hide {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
