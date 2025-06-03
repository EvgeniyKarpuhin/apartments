<template>
    <div class="apartment-card">
    <img :src="apartment.image" alt="Фото квартиры" class="image" />
    <div class="info">
      <h3>{{ apartment.title }}</h3>
      <p>{{ apartment.description }}</p>
      <p class="price">💰 {{ apartment.price }} $ в сутки</p>
      <button @click="addToFavorites">❤️ В избранное</button>
    </div>
  </div>
</template>

<script setup>
import { useApartmentSrore } from '@/store/apartmentStore';

const props = defineProps ({
    apartment: Object
})

const store = useApartmentSrore()

function addToFavorites() {
    store.addFavorite(apartment.id)
}
</script>

<style scoped>
.apartment-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  max-width: 320px;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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