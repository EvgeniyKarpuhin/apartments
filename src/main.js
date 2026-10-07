import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router'
import lazyLoad from './directives/lazyLoad'
import { getApartmentPaths } from '@/data/apartments'

function setRealHeight() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    app.use(createPinia())
    app.directive('lazy', lazyLoad)

    if (isClient) {
      setRealHeight()
      window.addEventListener('resize', setRealHeight)
    }

    return { app, router }
  }
)

export const includedRoutes = getApartmentPaths()

