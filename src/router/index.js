import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import TelAviv from '../pages/TelAviv.vue'
import Netanya from '../pages/Netanya.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/telaviv', name: 'TelAviv', component: TelAviv },
  { path: '/netanya', name: 'Netanya', component: Netanya },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
