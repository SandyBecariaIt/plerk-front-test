import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/Login'
import Principal from './pages/Principal'

const routes = [
  { path: '/', component: Login },
  { path: '/principal', component: Principal },
]


createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router
