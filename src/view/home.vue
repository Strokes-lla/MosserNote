<template>
  <div class="box_warpper __relative">
  </div>
</template>

<script>
  import home from "../../api/home"

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      cos() {
        console.log(1)
      }
    },
    components: {},
    mounted() {
      // home.getData();
      // home.getHtml().then((res)=>{
      //   console.log(res)
      // })
      console.log(process.env.VUE_APP_STR)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    width: 1000px;
    display: block;
    margin: 0 auto;
    min-height: 1300px;
    border-radius: 10px;
    background: rgba(242, 245, 248, 0.95);
    padding: 10px;
  }
</style>
