<template>
  <div class="box_warpper">
    <p @click="Jump('/ObjectFunction/Symbol')">Object</p>
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        obj: {foo: 123, baz: 45},
        arr: [['foo', 'bar'], ['baz', 42]]
      }
    },
    filters: {},
    methods: {
      Jump(path) {
        this.$router.push(path)
      },
      is() {
        console.log(Object.is('foo', 'foo'));
        console.log(Object.is({}, {}))
      },
      assign() {
        const target = {a: 1};

        const source1 = {b: 2};
        const source2 = {c: 3};

        Object.assign(target, source1, source2);
        console.log(target)
      },
      assgin2() {
        const obj1 = {a: {b: 1}};
        const obj2 = Object.assign({}, obj1);

        obj1.a.b = 2;
        console.log(obj2.a.b) // 2
      }
    },
    components: {},
    mounted() {
      this.is();
      this.assign();
      let obj = {a: 1};

      // Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，
      // 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个
      // 对象的引用。
      this.assgin2();

      //Object.keys
      console.log(Object.keys(this.obj));

      //Object.keys
      console.log(Object.values(this.obj));

      //Object.keys
      console.log(Object.entries(this.obj));

      // *****
      const ob = Object.create({}, {p: {value: 42}});
      console.log(Object.values(ob));

      // Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
      console.log(Object.fromEntries(this.arr))


      let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      console.log(a.slice(0,10))

      let arr = [1, '', 2, 3, '', 5];
      console.log([...(arr.map((item)=> item!=""?item:''))])
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
