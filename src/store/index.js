import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountnum:"1319975665",
    password:"xing123456",
    users:{
      userAccount:'11',
      userPassword:'111',
    },
    userAccountOn:'11111'
  },
  mutations: {
     userSignIn(state,pyload){
        state.users.userAccount=pyload.userAccount;
        state.users.userPassword=pyload.userPassword;
     }
  },
  actions: {
  },
  modules: {
  }
})
