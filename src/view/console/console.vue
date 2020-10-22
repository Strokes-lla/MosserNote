<template>
  <div class="box_console">
    <MaskModular :modularList="modularList" :modularIndex.sync="modularIndex"></MaskModular>
    <console :modularIndex="modularIndex"></console>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";
  import console from "../../components/console/console";

  export default {
    data() {
      return {
        modularIndex: null,
        modularList: [{
          icon: 'E',
          text: 'ECMAScript6',
        }, {
          icon: 'V',
          text: 'vue',
        }, {
          icon: 'I',
          text: 'Integration',
        }, {
          icon: 'H',
          text: 'highcharts',
        }, {
          icon: 'C',
          text: 'Canvas',
        }],
      }
    },
    filters: {},
    methods: {},
    components: {
      MaskModular,
      console
    },
    watch: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_console {
    height: 100%;
  }
</style>
