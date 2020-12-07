<template>
  <div class="box_console">
    <container>
      <MaskModular :modularList="modularList" @getIndex="getIndex"></MaskModular>
    </container>
    <container>
      <consoles :modularIndex="modularIndex"></consoles>
    </container>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";
  import consoles from "../../components/console/consoles";
  import container from "../../components/container";

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
    methods: {
      getIndex(index) {
        this.modularIndex = index;
      }
    },
    components: {
      MaskModular,
      consoles,
      container
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_console {
    height: 100%;
  }
</style>
