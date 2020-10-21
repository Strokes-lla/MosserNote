<template>
  <div class="box_function">
    <MaskModular :modularList="modularList"></MaskModular>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";

  export default {
    data() {
      return {
        modularList: [{
          icon: 'el-icon-time',
          text: 'timeLine'
        }, {
          icon: 'el-icon-thumb',
          text: 'svg show'
        }],
        list: [{
          name: 'daily',
          sonList: [
            {
              name: "timeLine",
              path: "/function/timeLine"
            }
          ]
        }, {
          name: 'tool',
          sonList: [
            {
              name: "svg show",
              path: "/function/svg"
            }
          ]
        }]
      }
    },
    filters: {},
    methods: {},
    components: {
      MaskModular
    },
    mounted() {
      console.log('add github test')
    }
  }
</script>

<style lang="less" scoped>
  .box_function {
    height: 100%;
  }
</style>
