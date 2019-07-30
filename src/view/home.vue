<template>
  <div class="box_warpper">
    <p @click="Jump('/Object')">Object扩展</p>
    <p @click="Jump('/ObjectFunction')">Object的新增方法</p>
    <p @click="Jump('/Symbol')">Symbol</p>
    <p @click="Jump('/Promise')">Promise</p>
    <p @click="Jump('/Class')">Class</p>
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
