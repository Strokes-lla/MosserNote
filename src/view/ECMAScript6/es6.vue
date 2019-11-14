<template>
  <div class="box_warpper">
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      Jump(path) {
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
    p {
      width:300px;
      color: #2C7FF1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
