<template>
  <div class="mobile-home">
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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const cities = [
  { name: 'Тель-Авив', link: '/telaviv', image: '/images/telaviv.jpg' },
  { name: 'Бат-Ям', link: '/batyam', image: '/images/batyam.jpg' },
  { name: 'Нетания', link: '/netanya', image: '/images/netanya.jpg' },
  { name: 'Отели', link: '/hotels', image: '/images/hotels.jpg' },
]

const goToCity = (link) => {
  router.push(link)
}
</script>

<style scoped>
.mobile-home {
  text-align: center;
  padding: 16px;
}

.cities {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 20px;
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

.city-block img {
  width: 100%;
  border-radius: 8px;
}

.city-block p {
  margin-top: 6px;
  font-weight: bold;
}

.info {
  margin-top: 40px;
  font-size: 14px;
  color: #555;
}
</style>
