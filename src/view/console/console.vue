<template>
  <div>
    <v-leftList :list="list"></v-leftList>
    <div class="box_console">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftList from "@/components/leftList.vue"

  export default {
    data() {
      return {
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
      'v-leftList': leftList,
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .box_console {
    width: 1000px;
    display: block;
    margin: 0 auto;

    min-height: 1300px;
    border-radius: 10px;
    background: rgba(242, 245, 248, 0.95);
    padding: 10px;
  }
</style>
