<template>
  <div class="box_warpper">
    <MaskModular :modularList="modularList"></MaskModular>
  </div>
</template>

<script>
  import home from "../../api/home"
  import MaskModular from "../components/MaskModular";

  export default {
    data() {
      return {
        modularList: [{
          icon: 'el-icon-user',
          text: 'Personal experience'
        }, {
          icon: 'el-icon-camera',
          text: 'hobby'
        }, {
          icon: 'el-icon-folder',
          text: 'technology'
        }, {
          icon: 'el-icon-magic-stick',
          text: 'life'
        }],
      }
    },
    filters: {},
    methods: {
      cos() {
        console.log(1)
      }
    },
    components: {
      MaskModular
    },
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
    height: 100%;
  }
</style>
