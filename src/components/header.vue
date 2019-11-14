<template>
  <div class="box_warpper">
    <div class="header __relative">
      <div @mouseover="showIndex=index" @mouseout="showIndex=''" class="inlineBlock __relative ml18"
           v-for="(item,index) in list">
        <span @click="Jump(item.path)" class="f16 pointer transition">{{item.name}}</span>
        <div v-if="item.show" :class="showIndex===index ? 'show':'hide'" class="menu ovhide show transition __absolute">
          <div>
            <p @click.stop="Jump(val.path)" class="f14 pointer transition" v-for="(val,num) in item.sonList">{{val.name}}</p>
          </div>
        </div>
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
          name: 'ECMAScript6',
          path: '/es6',
          show: true,
          sonList: [{
            name: 'Object扩展',
            path: '/Object'
          }, {
            name: 'Object的新增方法',
            path: '/ObjectFunction'
          }, {
            name: 'Symbol',
            path: '/Symbol'
          }, {
            name: 'Set',
            path: '/Set'
          }, {
            name: 'Promise',
            path: '/Promise'
          }, {
            name: 'Class',
            path: '/Class'
          }, {
            name: 'Proxy',
            path: '/Proxy'
          }, {
            name: 'Reflect',
            path: '/Reflect'
          }, {
            name: 'Iterator',
            path: '/Iterator'
          }, {
            name: 'Generator',
            path: 'Generator'
          }]
        }, {
          name: 'vuex',
          path: '/vuex',
          show: false,
        }, {
          name: 'Integration',
          path: '/Integration',
          show: false,
        }]
      }
    },
    filters: {},
    methods: {
      Jump(path) {
        console.clear();
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

        .menu {
          display: block;
          border-radius: 5px;
          box-shadow: 0 3px 12px rgba(27, 31, 35, .15), 0 0 1px rgba(27, 31, 35, .2);
          background: white;

          div {
            padding: 20px;
            p {
              white-space: nowrap;
              color: #586069;
              padding: 8px 0;
            }

            p:hover {
              color: #0366d6;
            }
          }
        }

        .show {
          top: 60px;
          opacity: 1;
        }

        .hide {
          top: 30px;
          opacity: 0;
          height: 0;
          width: 0
        }
      }

      div:hover {
        > span {
          color: hsla(0, 0%, 100%, .75);
        }
      }

      .transition {
        transition: all 0.2s;
        -moz-transition: all 0.2s; /* Firefox 4 */
        -webkit-transition: all 0.2s; /* Safari 和 Chrome */
        -o-transition: all 0.2s; /* Opera */
      }
    }

  }
</style>
