<template>
  <div class="box_warpper">
    <p @click="Jump('/es6')">ECMAScript6</p>
    <p @click="Jump('/vuex')">vuex</p>
    <p @click="Jump('/Integration')">Integration</p>
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
      Jump(path){
        this.$router.push(path)
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
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper{
    p{
      color:#2C7FF1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
