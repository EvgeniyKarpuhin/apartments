import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyLoad from './directives/lazyLoad'

function setRealHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setRealHeight();
window.addEventListener('resize', setRealHeight);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('lazy', lazyLoad)

app.mount('#app')
