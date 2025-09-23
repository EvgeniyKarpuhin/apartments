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
            '/images/apartments/netanya/2bdr-shb/1.jpg',
            '/images/apartments/netanya/2bdr-shb/2.jpg',
            '/images/apartments/netanya/2bdr-shb/3.jpg',
            '/images/apartments/netanya/2bdr-shb/4.jpg',
            '/images/apartments/netanya/2bdr-shb/5.jpg',
            '/images/apartments/netanya/2bdr-shb/6.jpg',
            '/images/apartments/netanya/2bdr-shb/7.jpg'
        ],
        price: 150
    },
    {
        id: 2,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом в центре города',
        images: [
            '/images/apartments/netanya/2bdr-sh/1.jpg',
            '/images/apartments/netanya/2bdr-sh/2.jpg',
            '/images/apartments/netanya/2bdr-sh/3.jpg',
            '/images/apartments/netanya/2bdr-sh/4.jpg',
            '/images/apartments/netanya/2bdr-sh/5.jpg',
            '/images/apartments/netanya/2bdr-sh/6.jpg',
            '/images/apartments/netanya/2bdr-sh/7.jpg',
            '/images/apartments/netanya/2bdr-sh/8.jpg',
            '/images/apartments/netanya/2bdr-sh/9.jpg',
            '/images/apartments/netanya/2bdr-sh/10.jpg'
        ],
        price: 140
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом в центре города',
        images: [
            '/images/apartments/netanya/1bdr-sh/1.jpg',
            '/images/apartments/netanya/1bdr-sh/2.jpg',
            '/images/apartments/netanya/1bdr-sh/3.jpg',
            '/images/apartments/netanya/1bdr-sh/4.jpg',
            '/images/apartments/netanya/1bdr-sh/5.jpg',
            '/images/apartments/netanya/1bdr-sh/6.jpg',
            '/images/apartments/netanya/1bdr-sh/7.jpg'
        ],
        price: 110
    },
    {
        id: 4,
        title: 'Четырёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом на улице Макдональд недалеко от пляжа',
        images: [
            '/images/apartments/netanya/3bdr-mc11/1.jpeg',
            '/images/apartments/netanya/3bdr-mc11/2.jpeg',
            '/images/apartments/netanya/3bdr-mc11/3.jpeg',
            '/images/apartments/netanya/3bdr-mc11/4.jpeg',
            '/images/apartments/netanya/3bdr-mc11/5.jpeg',
            '/images/apartments/netanya/3bdr-mc11/6.jpeg',
            '/images/apartments/netanya/3bdr-mc11/7.jpeg',
            '/images/apartments/netanya/3bdr-mc11/8.jpeg',
            '/images/apartments/netanya/3bdr-mc11/9.jpeg',
            '/images/apartments/netanya/3bdr-mc11/10.jpeg',
            '/images/apartments/netanya/3bdr-mc11/11.jpeg'
        ],
        price: 220
    },
    {
        id: 5,
        title: 'Пятикомнатная квартира',
        description: 'Квартира с 4я спальнями и залом на улице Шломо Мелех в пешей доступности до пляжа, есть терраса',
        images: [
            '/images/apartments/netanya/4bdr-shlmel/1.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/2.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/3.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/4.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/5.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/6.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/7.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/8.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/9.jpeg',
            '/images/apartments/netanya/4bdr-shlmel/10.jpeg'
        ],
        price: 300
    },
    {
        id: 6,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на набережной с видом на море',
        images: [
            '/images/apartments/netanya/1bdr-crm/1.jpg',
            '/images/apartments/netanya/1bdr-crm/2.jpg',
            '/images/apartments/netanya/1bdr-crm/3.jpg',
            '/images/apartments/netanya/1bdr-crm/4.jpg',
            '/images/apartments/netanya/1bdr-crm/5.jpg',
            '/images/apartments/netanya/1bdr-crm/6.jpg',
            '/images/apartments/netanya/1bdr-crm/7.jpg'
        ],
        price: 150
    },
    {
        id: 7,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на бульваре Ница, есть балкон и вид на море',
        images: [
            '/images/apartments/netanya/2bdr-op/1.jpeg',
            '/images/apartments/netanya/2bdr-op/2.jpeg',
            '/images/apartments/netanya/2bdr-op/3.jpeg',
            '/images/apartments/netanya/2bdr-op/4.jpeg',
            '/images/apartments/netanya/2bdr-op/5.jpeg',
            '/images/apartments/netanya/2bdr-op/6.jpeg',
            '/images/apartments/netanya/2bdr-op/7.jpeg',
            '/images/apartments/netanya/2bdr-op/8.jpeg',
            '/images/apartments/netanya/2bdr-op/9.jpeg',
            '/images/apartments/netanya/2bdr-op/10.jpeg',
            '/images/apartments/netanya/2bdr-op/11.jpeg'
        ],
        price: 210
    },
    {
        id: 8,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом в новом доме, есть балкон и вид на море',
        images: [
            '/images/apartments/netanya/2bdr-gdmhs/1.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/2.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/3.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/4.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/5.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/6.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/7.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/8.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/9.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/10.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/11.jpeg',
            '/images/apartments/netanya/2bdr-gdmhs/12.jpeg'
        ],
        price: 200
    },
    {
        id: 9,
        title: 'Четыррёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом на улице Макдональд, есть балкон',
        images: [
            '/images/apartments/netanya/3bdr-mc14/1.jpeg',
            '/images/apartments/netanya/3bdr-mc14/2.jpeg',
            '/images/apartments/netanya/3bdr-mc14/3.jpeg',
            '/images/apartments/netanya/3bdr-mc14/4.jpeg',
            '/images/apartments/netanya/3bdr-mc14/5.jpeg',
            '/images/apartments/netanya/3bdr-mc14/6.jpeg',
            '/images/apartments/netanya/3bdr-mc14/7.jpeg',
            '/images/apartments/netanya/3bdr-mc14/8.jpeg',
            '/images/apartments/netanya/3bdr-mc14/9.jpeg',
            '/images/apartments/netanya/3bdr-mc14/10.jpeg',
            '/images/apartments/netanya/3bdr-mc14/11.jpeg',
            '/images/apartments/netanya/3bdr-mc14/12.jpeg',
            '/images/apartments/netanya/3bdr-mc14/13.jpeg',
            '/images/apartments/netanya/3bdr-mc14/14.jpeg',
            '/images/apartments/netanya/3bdr-mc14/15.jpeg',
            '/images/apartments/netanya/3bdr-mc14/16.jpeg',
            '/images/apartments/netanya/3bdr-mc14/17.jpeg',
            '/images/apartments/netanya/3bdr-mc14/18.jpeg',
            '/images/apartments/netanya/3bdr-mc14/19.jpeg'
        ],
        price: 180
    }
]
</script>

<style scoped>

</style>