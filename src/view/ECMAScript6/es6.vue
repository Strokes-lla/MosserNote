<template>
  <div class="box_warpper">
    <p @click="Jump('/Object')">Object扩展</p>
    <p @click="Jump('/ObjectFunction')">Object的新增方法</p>
    <p @click="Jump('/Symbol')">Symbol</p>
    <p @click="Jump('/Set')">Set</p>
    <p @click="Jump('/Promise')">Promise</p>
    <p @click="Jump('/Class')">Class</p>
    <p @click="Jump('/Proxy')">Proxy</p>
    <p @click="Jump('/Reflect')">Reflect</p>
    <p @click="Jump('/Iterator')">Iterator</p>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      Jump(path) {
        this.$router.push(path)
      }
    },
    components: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    p {
      color: #2C7FF1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
