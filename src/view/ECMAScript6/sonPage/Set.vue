<template>
    <div class="box_warpper">
      <div class="test" v-for="(item,index) in 20"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        filters: {},
        methods: {},
        components: {},
        mounted() {
          let testArr=document.getElementsByClassName("test");
          let setArr=new Set(testArr);
          console.log(testArr);
          console.log(setArr);


          let testSet=new Set();
          testSet.add(1).add(2).add(3).add(4).add(5).add(5).add("name");
          console.log(testSet);
          console.log(testSet.keys());

          //怎么试都没有效果，不知道是不是因为回收机制回收了 *****
          // let ws = new WeakSet([{"age":18}]);
          // console.log(ws)
          let a1={'boo':2};
          let a2=a1;
          const set = new Set([
            ['foo', 1],
            ['foo', 1],
            // a1,a2
          ]);
          console.log(set);

          //不接受Object
          const m1 = new Map(set);
          console.log(m1);


        }
    }
</script>

<style lang="less" scoped>
    .box_warpper {
    }
</style>
