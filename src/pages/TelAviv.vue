<template>
    <h2>Тель Авив</h2>
    <!--Здесь будет список-->
    <div class="catalog">
        <ApartmentCard v-for="apt in apartments" :key="apt.id" :apartment="apt" />
    </div>
</template>

<script setup>
import ApartmentCard from '@/components/ApartmentCard.vue';


const apartments = [
    {
        id: 1,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа',
        images: [
            '/images/apartment1/1.jpg',
            '/images/apartment1/2.jpg',
            '/images/apartment1/3.jpg',
            '/images/apartment1/4.jpg',
            '/images/apartment1/5.jpg',
            '/images/apartment1/6.jpg'
        ],
        price: 110
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа, есть балкон',
        images: [
            '/images/apartment2/1.jpg',
            '/images/apartment2/2.jpg',
            '/images/apartment2/3.jpg',
            '/images/apartment2/4.jpg',
            '/images/apartment2/5.jpg',
            '/images/apartment2/6.jpg'
        ],
        price: 130
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Дизенгоф недалеко от пляжа, есть балкон',
        images: [
            '/images/apartment3/1.jpg',
            '/images/apartment3/2.jpg',
            '/images/apartment3/3.jpg',
            '/images/apartment3/4.jpg',
            '/images/apartment3/5.jpg',
            '/images/apartment3/6.jpg',
            '/images/apartment3/7.jpg',
            '/images/apartment3/8.jpg',
            '/images/apartment3/9.jpg',
            '/images/apartment3/10.jpg',
            '/images/apartment3/11.jpg'
        ],
        price: 160
    },
    {
        id: 4,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Дизенгоф недалеко от пляжа, есть балкон',
        images: [
            '/images/apartment4/1.jpg',
            '/images/apartment4/2.jpg',
            '/images/apartment4/3.jpg',
            '/images/apartment4/4.jpg',
            '/images/apartment4/5.jpg',
            '/images/apartment4/6.jpg',
            '/images/apartment4/7.jpg',
            '/images/apartment4/8.jpg',
            '/images/apartment4/9.jpg'
        ],
        price: 220
    },
    {
        id: 5,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Бен Иуда в пешей доступности до пляжа, есть терраса',
        images: [
            '/images/apartment5/1.jpg',
            '/images/apartment5/2.jpg',
            '/images/apartment5/3.jpg',
            '/images/apartment5/4.jpg',
            '/images/apartment5/5.jpg',
            '/images/apartment5/6.jpg',
            '/images/apartment5/7.jpg'
        ],
        price: 270
    },
    {
        id: 6,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Пинскер недалеко от пляжа, 2 санузла, балкон',
        images: [
            '/images/apartment6/1.jpg',
            '/images/apartment6/2.jpg',
            '/images/apartment6/3.jpg',
            '/images/apartment6/4.jpg',
            '/images/apartment6/5.jpg',
            '/images/apartment6/6.jpg',
            '/images/apartment6/7.jpg',
            '/images/apartment6/8.jpg',
            '/images/apartment6/9.jpg',
            '/images/apartment6/10.jpg'
        ],
        price: 280
    }
]
</script>

<style scoped>
h2 {
    margin-bottom: 50px;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>