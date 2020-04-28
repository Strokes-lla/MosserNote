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
      console.log(this.$route.params);
      // this.$router.push({path: '/'}, (res) => {
      //   console.log(res)
      // }, (res) => {
      //   console.log(res)
      // })
    }
  }
</script>

<style lang="less" scoped>
	.box_warpper {
	}
</style>
