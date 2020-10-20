<template>
  <div class="box_console">
    <MaskModular :modularList="modularList"></MaskModular>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";

  export default {
    data() {
      return {
        modularList: [{
          icon: 'E',
          text: 'ECMAScript6'
        }, {
          icon: 'V',
          text: 'vue'
        }, {
          icon: 'I',
          text: 'Integration'
        }, {
          icon: 'H',
          text: 'highcharts'
        }, {
          icon: 'C',
          text: 'Canvas'
        }],
        list: [
          {
            name: "ECMAScript6",
            sonList: [
              {
                name: "Object扩展",
                path: "/console/Object"
              },
              {
                name: "Object的新增方法",
                path: "/console/ObjectFunction"
              },
              {
                name: "Symbol",
                path: "/console/Symbol"
              },
              {
                name: "Set",
                path: "/console/Set"
              },
              {
                name: "Promise",
                path: "/console/Promise"
              },
              {
                name: "Class",
                path: "/console/Class"
              },
              {
                name: "Proxy",
                path: "/console/Proxy"
              },
              {
                name: "Reflect",
                path: "/console/Reflect"
              },
              {
                name: "Iterator",
                path: "/console/Iterator"
              },
              {
                name: "Generator",
                path: "/console/Generator"
              },
              {
                name: "async",
                path: "/console/async"
              }
            ]
          },
          {
            name: "vue",
            sonList: [
              {
                name: "vue",
                path: "/console/vue/1"
              },
              {
                name: "vuex",
                path: "/console/vuex"
              }
            ]
          },
          {
            name: "Integration",
            sonList: [
              {
                name: "Integration",
                path: "/console/Integration"
              },
            ]
          },
          {
            name: "highcharts",
            sonList: [
              {
                name: "highcharts",
                path: "/console/highcharts"
              },
            ]
          },
          {
            name: "Canvas",
            sonList: [
              {
                name: "Canvas基础绘制",
                path: "/CanvasBasics"
              },
              {
                name: "Canvas路径",
                path: "/CanvasRoute"
              }
            ]
          }
        ],
      }
    },
    filters: {},
    methods: {},
    components: {
      MaskModular
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .box_console {
  }
</style>
