<template>
  <div class="box_warpper">
    <div class="header __relative">
      <div @click="Jump(item.path)" class="inlineBlock __relative transition2 tc" v-for="(item,index) in list"
           :class="showIndex===index ? 'active':''">
        <span class="f16 pointer transition2">{{item.name}}</span>
      </div>
      <div class="inlineBlock __absolute headPortrait"></div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        showIndex: 0,
        list: [{
          name: 'home',
          path: '/'
        }, {
          name: 'console',
          path: '/console'
        }, {
          name: 'function',
          path: '/function'
        }, {
          name: 'Guitar',
          path: '/guitar'
        }]
      }
    },
    filters: {},
    methods: {
      Jump(path) {
        this.$router.push(path);
      },
    },
    watch: {
      '$route.fullPath': {
        handler(val) {
          this.showIndex = this.list.findIndex((item, index) => item.path === val)
        },
      }
    },
    components: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    .header {
      padding: 0 50px;
      width: 100%;
      height: 48px;
      background: #24292e;

      div {
        width: 125px;

        > span {
          line-height: 47px;
          color: #FFF;
        }
      }

      div:hover {
        border-bottom: solid 1px #FFE300;

        > span {
          color: #FFE300;
        }
      }

      .active {
        border-bottom: solid 1px #FFE300;

        > span {
          color: #FFE300;
        }
      }

      .headPortrait {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
        top: 8px;
        right: 60px;
        background: url('../assets/img/mosser.jpg');
        background-size: 100% 100%;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.7);
      }
    }
  }
</style>
