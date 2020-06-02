import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../http/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    isSignIn: false,
    isSignInError: false
  },
  mutations: {
    signInSuccess(state, payload) {
      state.isSignIn = true
      state.isSignInError = false
      state.userInfo = payload
    },
    signInError(state) {
      state.isSignIn = false
      state.isSignInError = true
    },
    signOut(state) {
      state.isSignIn = false
      state.isSignInError = false
      state.userInfo = null
    }
  },
  actions: {
    signOut({commit}) {
      commit('signOut');
      router.push({name: 'home'})
    },
    signIn({state, commit}, payload) {
      axios.post('/api/v1/signIn', {
        email : payload.email,
        password : payload.password
      }).then((response) => {
        console.log(response)
        
        if(response.data.errorCode) {
          commit('signInError')
          return
        }
        
        commit('signInSuccess', response.data);
        router.push({name: "mypage"})
      }).catch((error) => {
        console.log(error)
        commit('signInError')
      })
    }
  },
  modules: {
  }
})
