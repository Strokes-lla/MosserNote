<template>
  <div>
    <v-leftList :list="list"></v-leftList>
    <div class="box_function">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftList from "@/components/leftList.vue"

  export default {
    data() {
      return {
        list: [{
          name: 'daily',
          sonList: [
            {
              name: "timeLine",
              path: "/function/timeLine"
            }
          ]
        }]
      }
    },
    filters: {},
    methods: {},
    components: {
      'v-leftList': leftList,
    },
    mounted() {
      console.log('add github test')
    }
  }
</script>

<style lang="less" scoped>
  .box_function {
    width: 1000px;
    display: block;
    margin: 0 auto;

    min-height: 1300px;
    border-radius: 10px;
    background: rgba(242, 245, 248, 0.95);
    padding: 10px;
  }
</style>
