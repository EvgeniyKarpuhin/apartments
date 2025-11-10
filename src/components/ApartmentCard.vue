<template>
  <div class="apartment-card">
    <swiper 
      :modules="[Autoplay]" 
      :slides-per-view="1" 
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" 
      class="mySwiper"
    >
      <swiper-slide 
        v-for="(img, index) in apartment.images" 
        :key="index" 
        @click="openModal(index)"
      >
        <img v-lazy :data-src="img" alt="Фото квартиры" class="image" />
      </swiper-slide>
    </swiper>
    <div class="info">
      <h3 class="fw">{{ apartment.title }}</h3>
      <ul>
        <li v-for="(desc, index) in apartment.description" :key="index">
          {{ desc }}
        </li>
      </ul>
      <p class="fw">от {{ apartment.price }} $ в сутки</p>
    </div>

    <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-swiper-wrapper">
          <swiper :modules="[Navigation]" :slides-per-view="1" navigation :initial-slide="currentIndex"
            class="modal-swiper">
            <swiper-slide v-for="(img, index) in apartment.images" :key="index">
              <div class="slide-content">
                <img v-lazy :data-src="img" alt="Увеличенное фото">
                <button class="close-button" @click="closeModal">✖</button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { apartment } = defineProps({
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
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}

.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.apartment-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 350px;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  cursor: zoom-in;
}

.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  display: none !important;
}

.swiper-zoom-container img {
  max-width: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13rem;
  margin: 1rem;
}

.info ul {
  list-style: none;
  padding: 0;
}

.fw {
  font-weight: bold;
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-swiper-wrapper {
  width: 100%;
  height: 100%;
}

.modal-swiper {
  width: 100%;
  height: 100%;
}

.slide-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-swiper :deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 0;
  right: 10px;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem 0.6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.nav-button.prev {
  left: 40px;
}

.nav-button.next {
  right: 40px;
}
</style>