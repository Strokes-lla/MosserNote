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
      function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
      }

      console.log(helloWorldGenerator());
      let hw = helloWorldGenerator();
      console.log(hw.next());
      console.log(hw.next());
      console.log(hw.next());
      for (let item of helloWorldGenerator()) {
        console.log(item)
      }

      let obj = {
        * fun() {
          let s = 1;
          yield s = 2;
          yield s + 3;
          return s + 4
        }
      };
      let of = obj.fun();
      console.log(of.next());
      console.log(of.next());
      console.log(of.next());


      function* foo(x) {
        let y = 2 * (yield (x + 1));
        let z = yield (y / 3);
        return (x + y + z);
      }

      let b = foo(5);
      console.log(b.next());
      console.log(b.next(12));
      console.log(b.next(13));

      function* dataConsumer() {
        console.log('Started');
        console.log(`1. ${yield 'sss'}`);
        console.log(`2. ${yield}`);
        return 'result';
      }

      let genObj = dataConsumer();
      console.log(genObj.next());

      function* fot() {
        yield 'a';
        yield 'b';
      }

      let ba = (function* () {
        yield 'x';
        yield* fot();
        yield 'y';
      }());
      console.log(ba.next());
      console.log(ba.next());
      console.log(ba.next());
      console.log(ba.next())

    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
