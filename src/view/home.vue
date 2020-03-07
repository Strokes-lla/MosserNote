<template>
  <div class="box_warpper">

  </div>
</template>

<script>
  import home from "../../api/home"

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
      // response.data.items.slice(0, 8).map(item => {
      //   const { order_no: orderNo, price: prices, status: state } = item;
      //   this.aa.push({ orderNo, prices, state })
      // })

      // home.getData();
      // home.getHtml().then((res)=>{
      //   console.log(res)
      // })
      console.log("Show Time!!!")
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    p {
      width: 300px;
      color: #2C7FF1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
