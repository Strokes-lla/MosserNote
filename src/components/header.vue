<template>
  <div class="box_warpper">
    <div class="header __relative">
      <div @mouseover="showIndex=index" @mouseout="showIndex=''" class="inlineBlock __relative ml18"
           v-for="(item,index) in list">
        <span @click="Jump(item.path)" class="f16 pointer transition2">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        showIndex: '',
        list: [{
          name: 'home',
          path: '/'
        }, {
          name: 'experience',
          path: '/experience'
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
        this.$router.push(path)
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
      padding: 0 40px;
      width: 100%;
      height: 72px;
      background: #24292e;
      div {
        > span {
          line-height: 72px;
          color: #FFF;
        }
      }

      div:hover {
        > span {
          color: hsla(0, 0%, 100%, .75);
        }
      }
    }

  }
</style>
