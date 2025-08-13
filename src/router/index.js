import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import TelAviv from '../pages/TelAviv.vue'
import Netanya from '../pages/Netanya.vue'
import BatYam from '../pages/BatYam.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/telaviv', name: 'TelAviv', component: TelAviv },
  { path: '/netanya', name: 'Netanya', component: Netanya },
  { path: '/batyam', name: 'BatYam', component: BatYam }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
