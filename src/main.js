import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyLoad from './directives/lazyLoad'

// function setRealHeight() {
//   const vh = (document.documentElement.clientHeight || window.innerHeight) * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// setRealHeight();
// window.addEventListener('resize', setRealHeight);
// window.addEventListener('scroll', setRealHeight);
// window.addEventListener('orientationchange', setRealHeight);

function setRealHeight() { 
  const vh = window.innerHeight * 0.01; 
  document.documentElement.style.setProperty('--vh', `${vh}px`); 
} 

setRealHeight(); 
window.addEventListener('resize', setRealHeight);

// function setRealHeight() {
//   const h = (window.visualViewport && window.visualViewport.height)
//     || document.documentElement.clientHeight
//     || window.innerHeight;
//   document.documentElement.style.setProperty('--vh', `${h * 0.01}px`);
// }

// setRealHeight();

// window.addEventListener('resize', setRealHeight);
// window.addEventListener('scroll', setRealHeight, { passive: true });
// window.addEventListener('orientationchange', setRealHeight);
// if (window.visualViewport) {
//   window.visualViewport.addEventListener('resize', setRealHeight);
//   window.visualViewport.addEventListener('scroll', setRealHeight);
// }

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('lazy', lazyLoad)

app.mount('#app')
