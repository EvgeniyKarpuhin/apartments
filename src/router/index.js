import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Catalog from './Catalog.vue'
import Apartment from './Apartment.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/apartment', name: 'Apartment', component: Apartment },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
