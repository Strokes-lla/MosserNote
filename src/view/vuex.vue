<template>
  <div class="box_warpper" >
    <p>{{$store.state.stateA.token}}</p>
    <p @click="puls">{{token}}</p>
    <p>{{message}}</p>
    <input type="text" v-model="message">
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, createNamespacedHelpers} from "vuex"

  export default {
    data() {
      return {
      }
    },
    watch:{
    },
    filters: {},
    methods: {
      ...createNamespacedHelpers('stateA').mapActions(['actionsToken','actionsUninstall']),
      ...mapActions(['stateA/actionsTest', 'someAction']),
      // stateA下的actionsTest 可用于State Getters
      ...mapActions('stateA', ['actionsTest']),
      puls() {
        let data = this.$store.state.token + "1";
        this.$store.commit("stateA/saveToken", data);
      },
    },
    computed: {
      // ...mapState(['token','todos']),

      //model写法
      message: {
        get () {
          return this.$store.state.stateA.message
        },
        set (value) {
          this.$store.commit('stateA/saveMessage', value)
        }
      },
      ...mapState({
        token: state => state.stateA.token,
      }),
      ...mapGetters(['stateA/doneTodos']),
    },
    components: {},
    mounted() {
      // 注册新模块
      this.$store.registerModule('yeye', {
        state: {
          name: "yy",
          age: '18',
          sex: 'n'
        }
      });
      // this.$store.registerModule(['stateA', 'yeye'], {});
      // 卸载‘新’模块
      // this.actionsUninstall(this.$store);
      console.log(this.$store.state);
      // console.log(this['stateA/doneTodos']);
      // this.$store.state.stateA.token = "123";
      // this.$store.commit("stateA/saveToken",{type:"saveToken",token:"token"});
      // this['actionsTest']();
      // this.actionsToken(123121113);
      // console.log(this.token);
      // this.$store.dispatch('someAction',123123)
      // this.someAction(123);
      // this.$store.dispatch('actionsToken',123)
      // console.log(this.$store.state.stateA.token)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
