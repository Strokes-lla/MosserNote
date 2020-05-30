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
      console.log(obj[Symbol.iterator]().next());
      for (let item of obj) {
        console.log(item)
      }

      let boxArr = document.getElementsByClassName('box');
      console.log(boxArr[Symbol.iterator]().next());
      for (let item of boxArr) {
        console.log(item)
      }


      let yy = {
        name: 'yy',
        age: 18,
        sex: 'n',
        [Symbol.iterator]() {
          let index = 0;
          let obj = Object.keys(this);
          return {
            next: () => {
              return index < obj.length ? {
                value: this[obj[index++]],
                done: false
              } : {
                value: undefined,
                done: true
              }
            },
            return() {
              console.log('return');
              return {done: true};
            }
          }
        }
      };
      for (let item of yy) {
        console.log(item);
        if (item === 18) {
          break;
        }
      }

      function testCos() {
        for (let item = 0; item < 10; item++) {
          if (item === 3) {
            return item
          } else {
            console.log(item)
          }
        }
      }

      console.log(testCos());


      let yw = {
        name: 'yw',
        age: '23',
        sex: 'n',
      };

      for (let item of Object.entries(yw)) {
        console.log(item)
      }
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
