import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 这是一个vuex的插件
const syncStorage = (store) => {
  // 当 store 初始化后调用

  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log("syncStorage");
    console.log(mutation, state)
  })
};

const stateA = {
  namespaced: true,
  state: {
    message:'111',
    test: '',
    token: '123',
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  mutations,
  actions,
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
};

const stateB = {
  state: {
    token: '',
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
};

export default new Vuex.Store({
  // 严格模式
  // strict: true,
  plugins: [syncStorage],
  modules: {
    stateA,
    stateB
  },
})
