<template>
  <div class="box_warpper">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
      let obj = {
        0: "yy",
        1: 18,
        2: "n",
        length: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
      };
      // console.log(obj[Symbol.iterator]().next())
      for (let item of obj) {
        console.log(item)
      }

      let boxArr=document.getElementsByClassName('box');
      console.log(boxArr[Symbol.iterator]().next());
      for (let item of boxArr) {
        console.log(item)
      }

      let str='Hello world';
      console.log(str.slice(5))
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
