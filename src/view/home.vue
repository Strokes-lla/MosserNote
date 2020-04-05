<template>
  <div class="box_warpper __absolute">
    <video src="../assets/img/bg.mp4" autoplay loop muted>您当前的浏览器不支持video</video>
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
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;

    p {
      width: 300px;
      color: #2C7FF1;
      text-decoration: underline;
      cursor: pointer;
    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
