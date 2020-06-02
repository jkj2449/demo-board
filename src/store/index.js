import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {id: 1, name: 'hoza', email: 'hoza@gmail.com', password:'1234'},
      {id: 2, name: 'logo', email: 'logo@gmail.com', password:'1234'}
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    logout({commit}) {
      commit('logout');
      router.push({name: 'home'})
    },
    login({state, commit}, payload) {
      let selectUser = null;
      state.allUsers.forEach(user => {
          if(user.email === payload.email) {
              selectUser = user;
          }
      });

      if(selectUser === null || selectUser.password !== payload.password ) {
        commit('loginError');
      } else {
        commit('loginSuccess', selectUser);
        router.push({name: "mypage"})
      }
    }
  },
  modules: {
  }
})
