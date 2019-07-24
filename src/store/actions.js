export default {
  // {commit} es6语法取出content下的commit 类似于content.commit
  actionsToken({commit}, payload) {
    console.log("actionsToken");
    commit('saveToken', payload)
  },
  actionsMessage({commit}, payload) {
    console.log("saveMessage");
    commit('saveMessage', payload)
  },
  actionsUninstall({commit}, payload) {
    commit('saveUninstall', payload)
  },

  //在命名空间中定义全局someAction
  someAction: {
    root: true,
    handler ({commit}, payload) {
      console.log(3);
      commit('saveToken', payload)
    }
  },
  actionsTest({dispatch, commit, getters, rootGetters}, payload) {
    console.log(1);
    console.log(rootGetters);
    commit('saveToken', payload)
  },
}
