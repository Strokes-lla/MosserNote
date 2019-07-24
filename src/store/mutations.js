export default {
  //token
  saveToken(state, payload) {
    // localStorage.setItem('token', payload)
    console.log(payload);
    state.token = payload
  },
  saveMessage(state, payload) {
    // localStorage.setItem('token', payload)
    console.log(payload);
    state.message = payload
  },
  saveUninstall(state, payload) {
    payload.unregisterModule('yeye');
  },
}
