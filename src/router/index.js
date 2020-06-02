import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin) {
    alert('이미 로그인 되어있습니다.')
    next('/')
  } else {
    next();
  }
}

const onlyAuthUser = (to, from, next) => {
  if(!store.state.isLogin) {
    alert('로그인을 해주세요')
    next('/login')
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: rejectAuthUser,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    beforeEnter: onlyAuthUser,
    component: () => import(/* webpackChunkName: "login" */ '../views/Mypage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
