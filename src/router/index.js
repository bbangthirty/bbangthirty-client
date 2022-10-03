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
    path: '/login/signup/user',
    name: 'SignupUserView',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/login/SignupUserView.vue'
      )
  },
  {
    path: '/dongne',
    name: 'DongneStoreView',
    component: () =>
      import(
        /* webpackChunkName: "user" */ '../views/userPage/DongneStoreView.vue'
      )
  },
  {
    path: '/dongne/landing/regist',
    name: 'DongneRegistView',
    component: () =>
      import(
        /* webpackChunkName: "user" */ '../views/userPage/DongneRegistView.vue'
      )
  },
  {
    path: '/mypage',
    name: 'DongneSettingView',
    component: () =>
      import(
        /* webpackChunkName: "mypage" */ '../views/userMyPage/DongneSettingView.vue'
      )
  },
  {
    path: '/mypage/bakery',
    name: 'RegistBakeryView',
    component: () =>
      import(
        /* webpackChunkName: "mypage" */ '../views/userMyPage/RegistBakeryView.vue'
      )
  },
  {
    path: '/mypage/fvbread',
    name: 'RegistFvBreadView',
    component: () =>
      import(
        /* webpackChunkName: "mypage" */ '../views/userMyPage/RegistFvBreadView.vue'
      )
  },
  {
    path: '/mypage/user',
    name: 'UserInfoUpdateView',
    component: () =>
      import(
        /* webpackChunkName: "mypage" */ '../views/userMyPage/UserInfoUpdateView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
