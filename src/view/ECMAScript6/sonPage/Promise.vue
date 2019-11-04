<template>
  <div class="box_warpper">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "yy"
      }
    },
    filters: {},
    methods: {
      test() {
        return 213
      },
    },
    components: {},
    mounted() {
      function timeout(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done');
        });
      }

      timeout(100).then((value) => {
        console.log(value);
      }).finally(() => {
        console.log(1)
      });

      Promise.try(f => {
        console.log("f")
      }).catch(err => {
        throw "语法错误" + err
      });


      new Promise((resolve, reject) => {
        resolve(1123)
        // reject()
      }).then(() => {
        console.log(x + 2);
        console.log('a');
      }).then(() => {
        console.log('b');
      }).catch(() => {
        console.log('c');
      });


      Promise.resolve(this.test()).then((data) => {
        console.log(data)
      })
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
