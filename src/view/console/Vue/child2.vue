<template>
  <div class="box_warpper">
    child2.vue
  </div>
</template>

<script>
  export default {
    props:['age'],
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
      this.$emit('cos')
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
