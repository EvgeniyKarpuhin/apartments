<template>
  <div class="details-page" v-if="apartment">
    <h1>{{ apartment.title }} в {{ apartment.cityName }}</h1>
    <div>
      <div class="gallery">
      <Swiper
        :slides-per-view="1"
        :loop="apartment.images.length > 1"
        class="photo-swiper"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(img, index) in apartment.images" :key="img">
          <img :src="img" :alt="`Фото ${apartment.title} ${index + 1}`" />
        </SwiperSlide>
      </Swiper>
      <span v-if="beachDistance" class="distance-badge">{{ beachDistance }}</span>
      <button
        v-if="apartment.images.length > 1"
        class="gallery-arrow gallery-arrow-prev"
        type="button"
        aria-label="Предыдущее фото"
        @click="swiperInstance?.slidePrev()"
      >
        ‹
      </button>
      <button
        v-if="apartment.images.length > 1"
        class="gallery-arrow gallery-arrow-next"
        type="button"
        aria-label="Следующее фото"
        @click="swiperInstance?.slideNext()"
      >
        ›
      </button>
      <span v-if="apartment.images.length > 1" class="gallery-counter" aria-live="polite">
        {{ activeSlide + 1 }} / {{ apartment.images.length }}
      </span>
    </div>
    <div class="info">
      <div class="pice-btm">
        <p class="price">от {{ apartment.price }}$ в сутки</p>
        <span class="price-info">цена зависит от сезона и количества ночей</span>
      </div>
      
      <ApartmentFacts :apartment="apartment" />
      <ul v-if="visibleDescription.length" class="description-list">
        <li v-for="(desc, index) in visibleDescription" :key="index">{{ desc }}</li>
      </ul>
      <div class="contacts">
        <a class="cta" href="https://wa.me/972526717648" target="_blank" rel="noreferrer">Связаться в WhatsApp</a>
        <a class="cta secondary" href="https://t.me/Sofia_Reminska" target="_blank" rel="noreferrer">Написать в Telegram</a>
      </div>
    </div>
    </div>
    
  </div>
  <div v-else class="not-found">
    <h1>Объявление не найдено</h1>
    <p>Проверьте правильность ссылки или вернитесь на главную страницу.</p>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ApartmentFacts from '@/components/ApartmentFacts.vue'
import { getAdditionalApartmentDescription } from '@/data/apartmentFacts'
import { getBeachDistance } from '@/components/beachDistance'
import 'swiper/css'
import { getApartment } from '@/data/apartments'

const route = useRoute()
const apartment = getApartment(route.params.city, route.params.slug)
const visibleDescription = getAdditionalApartmentDescription(apartment?.description || [])
const beachDistance = getBeachDistance(apartment?.distanceToBeach)
const swiperInstance = ref(null)
const activeSlide = ref(0)

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function onSlideChange(swiper) {
  activeSlide.value = swiper.realIndex
}

if (apartment) {
  useHead({
    title: `${apartment.title} в ${apartment.cityName} — аренда квартиры в Израиле`,
    meta: [
      { name: 'description', content: `${apartment.title} в ${apartment.cityName}. ${apartment.description.join('. ')} Цена: от ${apartment.price} $ за ночь.` },
      { property: 'og:title', content: `${apartment.title} — аренда в ${apartment.cityName}` },
      { property: 'og:description', content: `${apartment.description.join('. ')} Цена: от ${apartment.price} $ в сутки.` },
      { property: 'og:image', content: `https://rentalisrael.com/assets/og/${apartment.city}-${apartment.slug}.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'product' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `https://rentalisrael.com/assets/og/${apartment.city}-${apartment.slug}.png` }
    ]
  })
}
</script>

<style scoped>
.details-page {
  max-width: 1024px;
  min-width: 0;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
}

.details-page h1 {
  overflow-wrap: anywhere;
}

.gallery {
  position: relative;
  overflow: hidden;
  /* margin-bottom: 1.5rem; */
  border-radius: 16px 16px 0 0;
  /* background: #111; */
}

.photo-swiper {
  width: 100%;
}

.photo-swiper :deep(.swiper-slide) {
  aspect-ratio: 16 / 10;
}

.gallery img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.distance-badge {
  position: absolute;
  z-index: 1;
  bottom: 1rem;
  left: 1rem;
  max-width: calc(100% - 2rem);
  padding: 0.35rem 0.65rem;
  border-radius: 4px;
  background: rgb(0 0 0 / 72%);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
  pointer-events: none;
}

.gallery-arrow {
  position: absolute;
  z-index: 1;
  top: 50%;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  padding: 0;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: none;
  color: #2808e0;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
}

.gallery-arrow-prev {
  left: 1rem;
}

.gallery-arrow-next {
  right: 1rem;
}

.gallery-arrow:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

.gallery-counter {
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 1rem;
  padding: 0.35rem 0.65rem;
  border-radius: 4px;
  background: rgb(0 0 0 / 65%);
  color: #fff;
  font-size: 0.875rem;
}

.info {
  min-width: 0;
  box-sizing: border-box;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.pice-btm {
  margin-bottom: 1rem;
}

.price {
  font-weight: 700;
  
}

.price-info {
  display: block;
  font-size: 0.700rem;
  color: #555;
}

.description-list {
  padding-left: 1rem;
}

.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 200px;
  min-width: 0;
  box-sizing: border-box;
  padding: 0.9rem 1.4rem;
  background: #0fbd34;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  overflow-wrap: anywhere;
  transition: transform 0.2s ease;
}

.cta:hover {
  transform: translateY(-2px);
}

.secondary {
  background: #229ED9;
  /* color: #1b263b; */
}

.not-found {
  text-align: center;
  padding: 4rem;
}

@media (max-width: 600px) {
  .details-page {
    padding: 1rem;
  }

  .photo-swiper :deep(.swiper-slide) {
    aspect-ratio: 4 / 3;
  }

  .info {
    padding: 1rem;
  }

  .contacts {
    flex-direction: column;
  }

  .cta {
    width: 100%;
    flex-basis: auto;
  }

  .gallery-arrow-prev {
    left: 0.75rem;
  }

  .gallery-arrow-next,
  .gallery-counter {
    right: 0.75rem;
  }
}
</style>
