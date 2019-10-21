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
    methods: {},
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
        console.losg("f")
      }).catch(err => {
        throw "语法错误" + err
      });

      // new Promise((resolve, reject) => {
      //   return resolve()
      // }).then(() => {
      //   console.log(3)
      // }).catch(() => {
      //   console.log(2)
      // });
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
