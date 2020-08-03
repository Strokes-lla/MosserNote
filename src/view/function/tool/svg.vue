<template>
  <div>
    <div class="inlineBlock tc" v-for="(item,index) in list">
      <svg class="svg" aria-hidden="true">
        <image :xlink:href="item"/>
      </svg>
      <p>{{item | toDot}}</p>
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
        const requireAll = requireContext => requireContext.keys().map(requireContext);
        const req = require.context('../../../assets/icon', true, /\.svg$/);
        console.log(requireAll(req));
        this.list = requireAll(req)
      }
    },
    components: {},
    mounted() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .svg {
    width: 100px;
    height: 100px;

    image {
      width: 100%;
      height: 100%;
    }
  }
</style>
