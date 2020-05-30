<template>
  <div @[event]="cos()" class="box_warpper">
  </div>
</template>

<script>
  export default {
    data() {
      return {
				event:'click'
			}
    },
    filters: {},
    methods: {
    	cos(){
    		console.log(1)
			}
		},
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
