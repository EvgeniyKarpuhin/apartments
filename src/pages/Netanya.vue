<template>
    <!-- <h2>Нетания</h2> -->
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
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом, есть балкон и вид на море',
        images: [
            '/images/apartment7/1.jpg',
            '/images/apartment7/2.jpg',
            '/images/apartment7/3.jpg',
            '/images/apartment7/4.jpg',
            '/images/apartment7/5.jpg',
            '/images/apartment7/6.jpg',
            '/images/apartment7/7.jpg'
        ],
        price: 150
    },
    {
        id: 2,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом в центре города',
        images: [
            '/images/apartment8/1.jpg',
            '/images/apartment8/2.jpg',
            '/images/apartment8/3.jpg',
            '/images/apartment8/4.jpg',
            '/images/apartment8/5.jpg',
            '/images/apartment8/6.jpg',
            '/images/apartment8/7.jpg',
            '/images/apartment8/8.jpg',
            '/images/apartment8/9.jpg',
            '/images/apartment8/10.jpg'
        ],
        price: 140
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом в центре города',
        images: [
            '/images/apartment9/1.jpg',
            '/images/apartment9/2.jpg',
            '/images/apartment9/3.jpg',
            '/images/apartment9/4.jpg',
            '/images/apartment9/5.jpg',
            '/images/apartment9/6.jpg',
            '/images/apartment9/7.jpg'
        ],
        price: 110
    },
    {
        id: 4,
        title: 'Четырёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом на улице Макдональд недалеко от пляжа',
        images: [
            '/images/apartment10/1.jpeg',
            '/images/apartment10/2.jpeg',
            '/images/apartment10/3.jpeg',
            '/images/apartment10/4.jpeg',
            '/images/apartment10/5.jpeg',
            '/images/apartment10/6.jpeg',
            '/images/apartment10/7.jpeg',
            '/images/apartment10/8.jpeg',
            '/images/apartment10/9.jpeg',
            '/images/apartment10/10.jpeg',
            '/images/apartment10/11.jpeg'
        ],
        price: 220
    },
    {
        id: 5,
        title: 'Пятикомнатная квартира',
        description: 'Квартира с 4я спальнями и залом на улице Шломо Мелех в пешей доступности до пляжа, есть терраса',
        images: [
            '/images/apartment11/1.jpeg',
            '/images/apartment11/2.jpeg',
            '/images/apartment11/3.jpeg',
            '/images/apartment11/4.jpeg',
            '/images/apartment11/5.jpeg',
            '/images/apartment11/6.jpeg',
            '/images/apartment11/7.jpeg',
            '/images/apartment11/8.jpeg',
            '/images/apartment11/9.jpeg',
            '/images/apartment11/10.jpeg'
        ],
        price: 300
    },
    {
        id: 6,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на набережной с видом на море',
        images: [
            '/images/apartment12/1.jpg',
            '/images/apartment12/2.jpg',
            '/images/apartment12/3.jpg',
            '/images/apartment12/4.jpg',
            '/images/apartment12/5.jpg',
            '/images/apartment12/6.jpg',
            '/images/apartment12/7.jpg'
        ],
        price: 150
    },
    {
        id: 7,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на бульваре Ница, есть балкон и вид на море',
        images: [
            '/images/apartment13/1.jpeg',
            '/images/apartment13/2.jpeg',
            '/images/apartment13/3.jpeg',
            '/images/apartment13/4.jpeg',
            '/images/apartment13/5.jpeg',
            '/images/apartment13/6.jpeg',
            '/images/apartment13/7.jpeg',
            '/images/apartment13/8.jpeg',
            '/images/apartment13/9.jpeg',
            '/images/apartment13/10.jpeg',
            '/images/apartment13/11.jpeg'
        ],
        price: 210
    },
    {
        id: 8,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом в новом доме, есть балкон и вид на море',
        images: [
            '/images/apartment14/1.jpeg',
            '/images/apartment14/2.jpeg',
            '/images/apartment14/3.jpeg',
            '/images/apartment14/4.jpeg',
            '/images/apartment14/5.jpeg',
            '/images/apartment14/6.jpeg',
            '/images/apartment14/7.jpeg',
            '/images/apartment14/8.jpeg',
            '/images/apartment14/9.jpeg',
            '/images/apartment14/10.jpeg',
            '/images/apartment14/11.jpeg',
            '/images/apartment14/12.jpeg'
        ],
        price: 200
    },
    {
        id: 9,
        title: 'Четыррёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом на улице Макдональд, есть балкон',
        images: [
            '/images/apartment15/1.jpeg',
            '/images/apartment15/2.jpeg',
            '/images/apartment15/3.jpeg',
            '/images/apartment15/4.jpeg',
            '/images/apartment15/5.jpeg',
            '/images/apartment15/6.jpeg',
            '/images/apartment15/7.jpeg',
            '/images/apartment15/8.jpeg',
            '/images/apartment15/9.jpeg',
            '/images/apartment15/10.jpeg',
            '/images/apartment15/11.jpeg',
            '/images/apartment15/12.jpeg',
            '/images/apartment15/13.jpeg',
            '/images/apartment15/14.jpeg',
            '/images/apartment15/15.jpeg',
            '/images/apartment15/16.jpeg',
            '/images/apartment15/17.jpeg',
            '/images/apartment15/18.jpeg',
            '/images/apartment15/19.jpeg'
        ],
        price: 180
    }
]
</script>

<style scoped>

</style>