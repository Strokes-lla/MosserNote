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
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms);
        });
      }

      async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
      }

      asyncPrint('1000Show', 1000);


      async function f() {
        throw new Error('error');
        return '';
      }

      f().then(v => {
        console.log(1)
      }).catch(() => {
        console.log(2)
      });


      console.log()
    }
  }
</script>

<style lang="less" scoped>
	.box_warpper {
	}
</style>
