<template>
  <div class="box_warpper">
    <span @click="addNum()">child.vue</span>
    <v-child2 v-on="$listeners" v-bind="$attrs"></v-child2>
  </div>
</template>

<script>
  import child2 from "./child2";

  export default {
    props:['name','num'],
    data() {
      return {}
    },
    filters: {},
    methods: {
      addNum(){
        let sum=this.num;
        this.$emit('update:num',parseFloat(sum)+1)
      },
    },
    components: {
      'v-child2':child2
    },
    mounted() {
      console.log('child');
      console.log('name');
      console.log(this.$listeners);
      console.log(this.$attrs)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
