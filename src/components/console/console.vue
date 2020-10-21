<template>
  <div class="box_warpper __relative" ref="content">
    <div v-for="(item,index) in rendering"
         :style="{opacity:item.opacity,top:item.top+'px',left:item.left+'px',fontSize:item.font+'px',transform:'rotate('+item.deg+'deg)'}"
         :class="!item.Judge ? 'shadow':''"
         class="__absolute white word pointer">{{item.name}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      modularIndex: {
        type: Number,
        default: () => null
      }
    },
    data() {
      return {
        list: [
          {
            name: "ECMAScript6",
            sonList: [
              {
                name: "Object扩展",
                path: "/console/Object",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Object的新增方法",
                path: "/console/ObjectFunction",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Symbol",
                path: "/console/Symbol",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Set",
                path: "/console/Set",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Promise",
                path: "/console/Promise",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Class",
                path: "/console/Class",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Proxy",
                path: "/console/Proxy",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Reflect",
                path: "/console/Reflect",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Iterator",
                path: "/console/Iterator",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Generator",
                path: "/console/Generator",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "async",
                path: "/console/async",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              }
            ]
          },
          {
            name: "vue",
            sonList: [
              {
                name: "vue",
                path: "/console/vue/1",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "vuex",
                path: "/console/vuex",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              }
            ]
          },
          {
            name: "Integration",
            sonList: [
              {
                name: "Integration",
                path: "/console/Integration",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
            ]
          },
          {
            name: "highcharts",
            sonList: [
              {
                name: "highcharts",
                path: "/console/highcharts",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
            ]
          },
          {
            name: "Canvas",
            sonList: [
              {
                name: "Canvas基础绘制",
                path: "/CanvasBasics",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              },
              {
                name: "Canvas路径",
                path: "/CanvasRoute",
                deg: 0,
                opacity: 0,
                top: 0,
                left: 0,
                font: 0,
                Judge: true,
              }
            ]
          }
        ],
        rendering: [],
        time: '',
      }
    },
    filters: {},
    methods: {
      RandomNumBoth(Min, Max) {
        let Range = Max - Min;
        let Rand = Math.random();
        return Min + parseInt(Rand * Range);
      },
      random() {
        let width = this.$refs.content.clientWidth;
        let height = this.$refs.content.clientHeight;
        this.rendering.forEach((item) => {
          item.deg = this.RandomNumBoth(0, 360);
          item.opacity = item.Judge ? Math.random() : 1;
          item.top = this.RandomNumBoth(0, height);
          item.left = this.RandomNumBoth(0, width);
          item.font = this.RandomNumBoth(16, 42);
        })
      },
      init() {
        this.rendering = [];
        this.rendering = this.list.map((item, index) => {
          let data = JSON.parse(JSON.stringify(item.sonList));
          if (this.modularIndex !== null && this.modularIndex === index) {
            data.forEach((val, num) => {
              val.Judge = false;
            })
          }
          return data
        }).flat(1);
        this.random();
        let time = setTimeout(() => {
          clearInterval(time);
          this.random();
          this.time = setInterval(() => {
            this.random();
          }, 5000)
        }, 500);
      },
    },
    watch: {
      modularIndex: {
        handler() {
          if (this.time !== '') {
            clearInterval(this.time);
          }
          this.init();
        },
      }
    },
    components: {},
    mounted() {
      this.init();
    },
    destroyed() {
      clearInterval(this.time)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/wallpaper/bg.jpg');
    overflow: hidden;

    .word {
      transition: all 4.95s linear;
      -moz-transition: all 4.95s linear; /* Firefox 4 */
      -webkit-transition: all 4.95s linear; /* Safari 和 Chrome */
      -o-transition: all 4.95s linear;
      white-space: nowrap;
    }

    .shadow {
      text-shadow: 0 0 20px #FFE300;
    }
  }
</style>
