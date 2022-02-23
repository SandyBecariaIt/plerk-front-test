import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from './auth/authGuard'

import Principal from './pages/Principal'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import NewPassword from './pages/ForgetPassword/NewPassword'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    },
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: ForgetPassword,
    meta: {
      title: 'ForgetPassword'
    }
  },
  {
    path: '/new-password',
    name: 'new-password',
    component: NewPassword,
    meta: {
      title: 'NewPassword'
    }
  },
  {
    path: '/principal',
    name: 'principal',
    component: Principal,
    beforeEnter: authGuard,
    meta: {
      title: 'Principal'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
