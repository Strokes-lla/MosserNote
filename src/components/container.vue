<template>
  <div class="container __relative">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      init() {

      },
    },
    components: {},
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
