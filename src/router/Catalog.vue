<template>
    <h2>Каталог квартир</h2>
    <!--Здесь будет список-->
    <div class="catalog">
        <ApartmentCard v-for:="apt in apartments" :key="apt.id" :apartment="apt" :src="aptImg1" />
        <!-- <img :src="aptImg1" alt="apt"> -->
    </div>
</template>

<script setup>
import ApartmentCard from '@/components/ApartmentCard.vue';
import aptImg1 from '@/assets/images/apartment1/1343521_IMG_ICG.jpg';

const apartments = [
    {
        id: 1,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа',
        image: aptImg1,
        price: 110
    }
]
</script>

<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
</style>