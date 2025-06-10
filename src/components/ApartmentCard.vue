<template>
    <div class="apartment-card">
      <swiper :modules="[Navigation, Pagination, Autoplay ]" 
        :slides-per-view="1" 
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" 
        navigation 
        pagination 
        class="mySwiper"
      >
        <swiper-slide v-for="(img, index) in apartment.images" :key="index" @click="openModal(index)">
          <img :src="img" alt="Фото квартиры" class="image" />
        </swiper-slide>
      </swiper>
    <div class="info">
      <h3>{{ apartment.title }}</h3>
      <p>{{ apartment.description }}</p>
      <p class="price">💰 {{ apartment.price }} $ в сутки</p>
      <!-- <button @click="addToFavorites">❤️ В избранное</button> -->
    </div>
    <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="apartment.images[currentIndex]" alt="Увеличенное фото">
        <button class="close-button" @click="closeModal">✖</button>
        <button class="nav-button prev" @click.stop="prevImage">◀</button>
        <button class="nav-button next" @click.stop="nextImage">▶</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { apartment } = defineProps ({
    apartment: Object
})

const modalVisible = ref(false)
const currentIndex = ref(0)

function openModal(index) {
  currentIndex.value = index
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + apartment.images.length) % apartment.images.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % apartment.images.length
}


// function addToFavorites() {
//     store.addFavorite(apartment.id)
// }
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
  cursor: zoom-in;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: -5px;
  right: 10px;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem 0.6rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: rgba(255,255,255,0.8); */
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.nav-button.prev {
  left: 40px;
}

.nav-button.next {
  right: 40px;
}
</style>