<template>
    <div class="apartment-card">
      <swiper :modules="[Navigation, Pagination, Autoplay ]" 
        :slides-per-view="1" 
        :autoplay="{ delay: 3000, disableOnInteraction: false }" 
        navigation 
        pagination 
        class="mySwiper"
      >
        <swiper-slide v-for="(img, index) in apartment.images" :key="index">
          <img :src="img" alt="Фото квартиры" class="image" />
        </swiper-slide>
      </swiper>
    <div class="info">
      <h3>{{ apartment.title }}</h3>
      <p>{{ apartment.description }}</p>
      <p class="price">💰 {{ apartment.price }} $ в сутки</p>
      <button @click="addToFavorites">❤️ В избранное</button>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps ({
    apartment: Object
})

function addToFavorites() {
    store.addFavorite(apartment.id)
}
</script>

<style scoped>

.swiper {
  width: 100%;
  height: 300px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.apartment-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  max-width: 350px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.swiper-zoom-container img {
  max-width: 100%;
}

.info {
  padding: 1rem;
}

.price {
  font-weight: bold;
  margin-top: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #1b263b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>