<template>
  <div>
    <v-leftList></v-leftList>
    <div class="box_warpper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftList from "@/components/leftList.vue"

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {},
    components: {
      'v-leftList': leftList,
    },
    mounted() {

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
