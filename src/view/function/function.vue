<template>
  <div class="box_function">
<!--    <MaskModular :modularList="modularList"></MaskModular>-->
    <SvgShow></SvgShow>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";
  import SvgShow from "./tool/svg";
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
        }],
      }
    },
    filters: {},
    methods: {},
    components: {
      MaskModular,
      SvgShow
    },
    mounted() {
      console.log('add github test')
    }
  }
</script>

<style lang="less" scoped>
  .box_function {
    height: 100%;
    width:100%;
  }
</style>
