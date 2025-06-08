import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Catalog from './Catalog.vue'
import ApartmentDetails from '../pages/TelAviv.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  // { path: '/apartment/:id', name: 'ApartmentDetails', component: ApartmentDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
