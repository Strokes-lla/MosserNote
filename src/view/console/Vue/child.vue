<template>
  <div class="box_warpper">
    <span @click="addNum()">child.vue</span>
    <v-child2 v-on="$listeners"></v-child2>
  </div>
</template>

<script>
  import child2 from "./child2";
  import bus from "./bus";
  export default {
    props: ['name', 'num'],
    data() {
      return {
        show:'yyyy'
      }
    },
    filters: {},
    methods: {
      addNum() {
        let sum = this.num;
        // this.$emit('update:num',parseFloat(sum)+1)
        // this.$parent.num = sum + 1;
        bus.$emit('onStatr')
      },
    },
    components: {
      'v-child2': child2
    },
    mounted() {
      console.log('child');
      console.log('name');
      console.log(this.$listeners);
      console.log(this.$attrs);
      // 访问最近的父级组件
      console.log(this.$parent);
      // 访问最底层的父级组件 单页面应用下应该是app
      console.log(this.$root)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
