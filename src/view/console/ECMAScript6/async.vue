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
    methods: {},
    components: {},
    mounted() {
      function timeout(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

      async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
      }

      asyncPrint('hello world', 2000);


      async function f() {
        throw new Error('error');
        return '';
      }

      f().then(v => {
        console.log(1)
      }).catch(() => {
        console.log(2)
      });

      function time() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(123);
          }, 1000)
        })
      }

      async function test() {
        let str = await time();
        console.log(str)
      }

      test();

      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(456);
      //   }, 3000)
      // }).then((res) => {
      //   console.log(res)
      // })

    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
