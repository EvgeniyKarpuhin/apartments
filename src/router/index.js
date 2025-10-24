import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import TelAviv from '../pages/TelAviv.vue'
import Netanya from '../pages/Netanya.vue'
import BatYam from '../pages/BatYam.vue'
import Hotels from '../pages/Hotels.vue'
import About from '@/pages/About.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/telaviv', name: 'TelAviv', component: TelAviv },
  { path: '/netanya', name: 'Netanya', component: Netanya },
  { path: '/batyam', name: 'BatYam', component: BatYam },
  { path: '/hotels', name: 'Hotels', component: Hotels },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory('/apartments/'),
  routes
})

// router.beforeEach((to, from, next) => {
//   const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
//   if(isMobile && to.path === 'Home') {
//     next({name: 'MobileHome'})
//   } else {
//     next()
//   }
// })

export default router
