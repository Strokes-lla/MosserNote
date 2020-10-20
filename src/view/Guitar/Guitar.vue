<template>
  <div class="box_warpper">
    <MaskModular :modularList="modularList"></MaskModular>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";

  export default {
    data() {
      return {
        modularList: [{
          icon: 'el-icon-edit',
          text: 'string'
        }],
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
  .box_warpper {

  }
</style>
