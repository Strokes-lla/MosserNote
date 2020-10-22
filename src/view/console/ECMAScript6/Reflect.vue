<template>
  <div class="box_reflect __absolute view">
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    filters: {},
    methods: {},
    components: {},
    computed: {
    },
    mounted() {
      let myObject = {
        foo: 1,
        bar: 2,
        get baz() {
          return this.foo + this.bar;
        },
      };
      console.log(myObject.baz)
      // Reflect.get(myObject, 'foo');// 1
      // Reflect.get(myObject, 'bar');// 2
      // Reflect.get(myObject, 'baz');// 3
      console.log(Reflect.has(myObject, 'foo'))
      let p = {
        a: 'a'
      };

      let handler = {
        get(target, key, value, receiver) {
          console.log('get');
          return Reflect.get(target, key)
        },
      };

      let obj = new Proxy(p, handler);
      console.log(obj.a)
    }
  }
</script>

<style lang="less" scoped>
  .box_reflect {
  }
</style>
