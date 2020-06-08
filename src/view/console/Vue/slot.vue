<template>
  <div class="box_warpper">
    <p>这里是外部插入的内容:
      <slot :user="user">默认</slot>
    </p>
    <p>
      <slot name="header"></slot>
    </p>
    <p>
      <slot name="footer" :user="user"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: 'yy'
        }
      }
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
