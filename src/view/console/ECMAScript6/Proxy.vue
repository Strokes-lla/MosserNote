<template>
	<div class="box_proxy __absolute view">
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
      let obj = {
        name: 'yy',
        sex: "n",
        // age:18,
      };
      // Reflect.deleteProperty(obj, 'name');
      // console.log(obj);

      let proxy = new Proxy(obj, {
        get(target, property) {
          console.log(property);
          console.log(target);
          if (property == 'age') {
            return 35;
          } else {
            return target[property]
          }
        },
      });
      console.log(proxy.name);
      // console.log(proxy.age);


    }
  }
</script>

<style lang="less" scoped>
	.box_proxy {
	}
</style>
