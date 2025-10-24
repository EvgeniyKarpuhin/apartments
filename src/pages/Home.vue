<template>
  <div v-if="isMobile">
    <MobileHome />
    <!-- <div class="mobile-home">
      <h1>Выберите город</h1>
      <div class="cities">
        <div
          v-for="city in cities"
          :key="city.name"
          class="city-block"
          @click="goToCity(city.link)"
        >
          <p>{{ city.name }}</p>
        </div>
      </div>
    </div> -->
  </div>
  <div v-else>
    <About />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// import { useRouter } from 'vue-router';
import About from './About.vue';
import MobileHome from './MobileHome.vue';

const isMobile = ref(window.innerWidth < 1024)
// const menuOpen = ref(false)
// const router = useRouter()

// function toggleMenu() {
//   menuOpen.value = !menuOpen.value
// }

// const cities = [
//   { name: 'Тель-Авив', link: '/telaviv', image: '/images/telaviv.jpg' },
//   { name: 'Бат-Ям', link: '/batyam', image: '/images/batyam.jpg' },
//   { name: 'Нетания', link: '/netanya', image: '/images/netanya.jpg' },
//   { name: 'Отели', link: '/hotels', image: '/images/hotels.jpg' },
// ]

// const goToCity = (link) => {
//   router.push(link)
// }

const handleResize = () => {
  isMobile.value = window.innerWidth < 770
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>

/*мобильная версия*/
.burger {
  display: none;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: slideIn 0.5s ease forwards;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu nav a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #1b263b;
}

.close {
  align-self: flex-end;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}

.mobile-menu.close {
  animation: slideOut 0.5s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .nav.desktop {
    display: none;
  }
  .burger {
    display: block;
  }
}

.mobile-home {
  text-align: center;
  
}

.cities {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 20px;
}

@media (max-width: 440px) {
    .cities {
        grid-template-columns: 1fr;
    }
}

.city-block {
  background: beige;
  border-radius: 12px;
  padding: 50px;
  cursor: pointer;
  transition: transform 0.2s;
  opacity: .8;
}

.city-block:hover {
  transform: scale(1.05);
}

.city-block p {
  margin-top: 6px;
  font-weight: bold;
}
</style>