<template>
  <div class="box_warpper">
    <div class="inlineBlock tc" v-for="(item,index) in list">
<!--      <svg class="svg" aria-hidden="true">-->
<!--        <image :xlink:href="item"/>-->
<!--      </svg>-->
      <img :src="require('../../../assets/icon'+item.slice(1))" alt="">
      <p>{{item.slice(1)}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    filters: {
      toDot(str) {
        return str.split('/')[3].split('.')[0]
      }
    },
    methods: {
      init() {
        // const requireAll = requireContext => requireContext.keys().map(requireContext);
        const req = require.context('../../../assets/icon', true, /\.png$/);
        // console.log(requireAll(req));
        this.list = req.keys()
      }
    },
    components: {},
    mounted() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    width: 100%;
    height: 100%;
    background: url('../../../assets/img/wallpaper/bg.jpg');
    overflow: scroll;
    div{
      margin:0 20px 20px 0;
      background: rgba(0,0,0,0.4);
      .svg {
        width: 100px;
        height: 100px;
        image {
          width: 100%;
          height: 100%;
        }
      }

      img{
        margin:0 auto;
        box-shadow:3px 3px 20px 3px #FFF;
      }
      p{
        color:#FFF
      }
    }

  }

</style>
