<template>
  <div @[event]="cos()" class="box_warpper">
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
  </div>
</template>

<script>
  import child from "./child";
  import slot from "./slot"

  export default {
    data() {
      return {
        num: 0,
        event: 'click'
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
    mounted() {
      console.log(this.$route.params);
      // this.$router.push({path: '/'}, (res) => {
      //   console.log(res)
      // }, (res) => {
      //   console.log(res)
      // })
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
