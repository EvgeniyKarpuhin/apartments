<template>
    <h2>Каталог квартир</h2>
    <!--Здесь будет список-->
    <div class="catalog">
        <ApartmentCard v-for:="apt in apartments" :key="apt.id" :apartment="apt" />
    </div>
</template>

<script setup>
import ApartmentCard from '@/components/ApartmentCard.vue';

const apartments = [
    {
        id: 1,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа',
        image: '@/pablic/images/apartment1/1343521_IMG_ICG.jpg',
        price: 110
    }
]
</script>

<style scoped>

</style>