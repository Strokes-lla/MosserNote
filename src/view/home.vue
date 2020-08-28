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
      // response.data.items.slice(0, 8).map(item => {
      //   const { order_no: orderNo, price: prices, status: state } = item;
      //   this.aa.push({ orderNo, prices, state })
      // })

      // home.getData();
      // home.getHtml().then((res)=>{
      //   console.log(res)
      // })
      console.log(process.env.VUE_APP_STR)


      // setInterval(() => {
      //   const degArr = [51, 90, 138, 230, 270, 310];
      //   let obj = this.scattering[0];
      //   this.scattering.splice(0, 1);
      //   this.scattering.push(obj);
      //   this.scattering.forEach((item) => {
      //     let deg = degArr[item.index];
      //     if (item.deg === deg) {
      //       item.deg = 360 + deg;
      //     } else {
      //       let rounding = parseInt(item.deg / 360);
      //       let surplus = item.deg - (rounding * 360);
      //       item.deg = (360 - surplus) + (rounding * 360) + surplus + deg;
      //     }
      //   });
      //   console.log(this.scattering.find((item) => item.index === 0).deg)
      // }, 5000);
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
