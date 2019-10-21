<template>
  <div class="box_warpper">
    <div></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        BgImg:require("../../../assets/img/bg_1.jpg")
      }
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
      let body = document.getElementsByTagName("body")[0];
      // background-size: cover;
      body.setAttribute("style","background:url("+this.BgImg+") center 0;background-repeat: no-repeat;")
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    .header {
      height: 30px;
    }
  }
</style>
