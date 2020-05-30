<template>
  <div :class="!show ? 'disappear':''" class="box_leftList transition2">
    <div @click="show=!show" class="switch __absolute tc pointer">
      <span v-show="!show" class="el-icon-right f28"></span>
      <span v-show="show" class="el-icon-back f28"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .box_leftList {
    position: fixed;
    top: 72px;
    bottom: 0;
    width: 220px;
    background: #24292e;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.7);
    left: 0;

    .switch {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 50%;
      margin-top: -25px;
      left: 230px;
      background: #24292e;
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.7);

      span {
        line-height: 50px;
        color: hsla(0, 0%, 100%, .75);
      }
    }
  }

  .disappear {
    left: -220px;
  }
</style>
