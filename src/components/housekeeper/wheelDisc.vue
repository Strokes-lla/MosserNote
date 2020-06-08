<template>
  <div class="box_wheelDisc">
    <div :class="!Judge ? 'rotate':''" class="wheelDiscBox transition4">
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
          ico: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/favicon/favicon_d87cd2a.ico',
          url: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh',
          top: 10,
          left: 20,
        }, {
          ico: 'https://weibo.com/favicon.ico',
          url: 'https://weibo.com/fenyu95/home?wvr=5',
          top: 85,
          left: -15,
        }, {
          ico: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1415637350,2159156262&fm=26&gp=0.jpg',
          url: 'https://www.zhihu.com/hot',
          top: 150,
          left: 20,
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
  }
</style>
