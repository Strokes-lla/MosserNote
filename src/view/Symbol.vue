<template>
  <div class="box_warpper">
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
      let s = Symbol("yy lvoe");
      let s1 = Symbol("yy lvoe");
      let s2 = Symbol();
      let obj = {};
      obj[s] = "yy";
      obj[s1] = "yy";
      console.log(obj[s1]);

      // let obj = {[s]:'yy', [s1]:'yw', [s2]:'ys',s};
      // obj[s2] = "yw love1";
      // console.log(obj);
      // console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
      // console.log(obj[s2]);
      // console.log(obj.s.description);

      let d = Symbol();
      let x = Symbol();
      let so = {
        [d]: "sss",
        [s]: "sss",
      };
      console.log(so[d] == so[x]);

      let a1 = Symbol.for('foo');
      let a2 = Symbol.for('foo');
      console.log(a1 === a2);

      Symbol.keyFor(a1);// "foo"

      let s3 = Symbol("foo");
      Symbol.keyFor(s3);  // undefined


      let arr1 = ['a', 'b'], arr2 = ['c', 'd', 'e'];
      arr1 = arr1.concat(arr2);
      console.log(arr1);
      console.log(arr1[Symbol.isConcatSpreadable]); // undefined

      arr2[Symbol.isConcatSpreadable] = false;
      arr1 = arr1.concat(arr2);
      console.log(arr1)


      // class MyClass {
      //   [Symbol.hasInstance](foo) {
      //     console.log(foo)
      //   }
      // }
      //
      // console.log([1, 2, 3] instanceof new MyClass())


    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
