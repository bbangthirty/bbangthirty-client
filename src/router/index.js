import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/LoginView.vue')
  },
  {
    path: '/login/signup',
    name: 'SignupView',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/SignupView.vue')
  },
  {
    path: '/login/signup/user',
    name: 'SignupUserView',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/login/SignupUserView.vue'
      )
  },
  {
    path: '/login/signup/owner',
    name: 'SignupOwnerView',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/login/SignupOwnerView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
