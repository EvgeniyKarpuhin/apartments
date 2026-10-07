<template>
  <div class="details-page" v-if="apartment">
    <h1>{{ apartment.title }} в {{ apartment.cityName }}</h1>
    <div class="gallery">
      <img v-for="(img, index) in apartment.images" :key="index" :src="img" :alt="`Фото ${apartment.title} ${index + 1}`" />
    </div>
    <div class="info">
      <p class="price">от {{ apartment.price }} $ в сутки</p>
      <ul>
        <li v-for="(desc, index) in apartment.description" :key="index">{{ desc }}</li>
      </ul>
      <div class="contacts">
        <a class="cta" href="https://wa.me/972526717648" target="_blank" rel="noreferrer">Связаться в WhatsApp</a>
        <a class="cta secondary" href="https://t.me/Sofia_Reminska" target="_blank" rel="noreferrer">Написать в Telegram</a>
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
import { getApartment } from '@/data/apartments'

const route = useRoute()
const apartment = getApartment(route.params.city, route.params.slug)

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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
}

.info {
  min-width: 0;
  box-sizing: border-box;
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.price {
  font-weight: 700;
  margin-bottom: 1rem;
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
  background: #54c7fc;
  color: #1b263b;
}

.not-found {
  text-align: center;
  padding: 4rem;
}

@media (max-width: 600px) {
  .details-page {
    padding: 1rem;
  }

  .gallery {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
  }

  .gallery img {
    height: auto;
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
}
</style>
