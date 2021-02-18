<template>
  <div class="box_warpper">
    child2.vue
  </div>
</template>

<script>
  import bus from "./bus";

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
      console.log('child2');
      console.log(this.age);
      console.log(this.$attrs);
      this.$emit('cos');
      bus.$on('onStatr', (e) => {
        console.log('on start!!!')
      })
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
