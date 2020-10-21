<template>
  <div class="box_warpper __relative flex alignCenter justifyCenter">
    <div class="mask __absolute">
      <div class="motto tc animate__animated animate__fadeInDown"
           :style="{animationDelay:(modularList.length*0.2)+'s'}">
        <span class="f42 white">{{motto}}</span>
      </div>
      <div class="modularJump tc">
        <div class="box inlineBlock tc pointer animate__animated animate__fadeInDown"
             :style="{animationDelay:(index*0.2)+'s'}"
             @click="Jump(index)"
             v-for="(item,index) in modularList">
          <div class="icon tc transition2">
            <span class="f28" :class="item.icon.includes('el') ? item.icon:'bold'">{{!item.icon.includes('el') ? item.icon:''}}</span>
          </div>
          <span class="text f20">{{item.text}}</span>
        </div>
      </div>
    </div>
    <img :src="url" class="bg __absolute" alt="">
  </div>
</template>

<script>
  import home from "../../api/home"

  export default {
    props: {
      modularList: {
        type: Array,
        default: () => []
      },
      modularIndex: {
        type: Number,
        default: () => null
      }
    },
    data() {
      return {
        wallpaperList: [
          'https://w.wallhaven.cc/full/ne/wallhaven-newwwl.jpg',
          'https://w.wallhaven.cc/full/96/wallhaven-96gqz8.jpg',
          'https://w.wallhaven.cc/full/nz/wallhaven-nzrvry.jpg',
          'https://w.wallhaven.cc/full/dg/wallhaven-dg6y63.jpg',
          'https://w.wallhaven.cc/full/nm/wallhaven-nm51ky.jpg',
          'https://w.wallhaven.cc/full/eo/wallhaven-eo58dk.jpg',
          'https://w.wallhaven.cc/full/4v/wallhaven-4v7eel.jpg',
          'https://w.wallhaven.cc/full/nz/wallhaven-nzem6w.jpg',
          'https://w.wallhaven.cc/full/r2/wallhaven-r2xrdq.jpg',
          'https://w.wallhaven.cc/full/zx/wallhaven-zx9ppw.jpg',
        ],
        url: '',
        motto: '“成人不自在，自在不成人”',
      }
    },
    filters: {},
    methods: {
      Jump(index) {
        this.$emit('update:modularIndex', index)
      },
      init() {
        if (navigator.onLine) {
          this.url = this.wallpaperList[parseInt(Math.random() * 10)]
        } else {
          this.url = require('../assets/img/wallpaper/img1.jpg')
        }
        let MinYan = sessionStorage.getItem('MinYan');
        if (MinYan === null) {
          home.getMinYan().then((res) => {
            this.motto = '“' + res.data.newslist[0].content + '”';
            sessionStorage.setItem('MinYan', this.motto);
          })
        } else {
          this.motto = MinYan
        }
      },
    },
    components: {},
    mounted() {
      this.init();
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .mask {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
      padding-top: 180px;

      .motto {
        width: 1000px;
        margin: 0 auto;
      }

      .modularJump {
        color: white;
        margin: 220px auto 0 auto;

        .box {
          width: 200px;
          vertical-align: top;

          .icon {
            width: 50px;
            height: 50px;
            border: solid 1px white;
            border-radius: 5px;
            margin: 0 auto 5px auto;

            span {
              line-height: 50px;
            }
          }

          .icon:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    img {
      width: 1920px;
      height: 1080px;
    }
  }

</style>
