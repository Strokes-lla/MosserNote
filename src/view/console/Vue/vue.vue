<template>
  <div @[event]="cos()" class="box_vue __absolute view">
    <p>{{num}}</p>
    <v-child @click.native="cos()" @cos="cos()" :num.sync="num" name="yy" :age="18" sex="n"></v-child>
    <v-slot v-slot="{user}">我是外部插入的文字{{user}}</v-slot>
    <v-slot>
      <template v-slot:footer="propSlot">
        头插尾{{propSlot}}
      </template>
      <template v-slot:header>
        尾入头
      </template>
    </v-slot>
    <span v-for="(item,index) in 10" ref="testRef">{{index}}</span>
  </div>
</template>

<script>
  import child from "./child";
  import slot from "./slot"

  let mixin = {
    mounted() {
      console.log('mixin混入')
    }
  };
  export default {
    mixins: [mixin],
    data() {
      return {
        num: 0,
        event: 'click',
        list: [1, 2, 3, 4, 5]
      }
    },
    filters: {},
    methods: {
      cos() {
        console.log(1)
      }
    },
    components: {
      'v-child': child,
      'v-slot': slot
    },
    // 开放时需要完全注释<template> 感觉没有多大用
    render(createElement) {
      return createElement('ul', {}, this.list.map(function (item) {
        return createElement('li', {}, item);
      }));
    },
    mounted() {
      console.log(this.$route.params);
      console.log(this.$refs.testRef)
      // this.$router.push({path: '/'}, (res) => {
      //   console.log(res)
      // }, (res) => {
      //   console.log(res)
      // })
    }
  }
</script>

<style lang="less" scoped>
  .box_vue {
  }
</style>
