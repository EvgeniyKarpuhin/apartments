<template>
    <!-- <h2>Бат Ям</h2> -->
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
        description: 'Квартира с 2я спальнями и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/2bdr-bf87/1.jpeg',
            '/images/apartments/batyam/2bdr-bf87/2.jpeg',
            '/images/apartments/batyam/2bdr-bf87/3.jpeg',
            '/images/apartments/batyam/2bdr-bf87/4.jpeg',
            '/images/apartments/batyam/2bdr-bf87/5.jpeg',
            '/images/apartments/batyam/2bdr-bf87/6.jpeg',
            '/images/apartments/batyam/2bdr-bf87/7.jpeg',
            '/images/apartments/batyam/2bdr-bf87/8.jpeg',
            '/images/apartments/batyam/2bdr-bf87/9.jpeg',
            '/images/apartments/batyam/2bdr-bf87/10.jpeg',
            '/images/apartments/batyam/2bdr-bf87/11.jpeg'
        ],
        price: 100
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/1bdr-bf87/1.jpeg',
            '/images/apartments/batyam/1bdr-bf87/2.jpeg',
            '/images/apartments/batyam/1bdr-bf87/3.jpeg',
            '/images/apartments/batyam/1bdr-bf87/4.jpeg',
            '/images/apartments/batyam/1bdr-bf87/5.jpeg',
            '/images/apartments/batyam/1bdr-bf87/6.jpeg'
        ],
        price: 80
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/1bdr-bf122/1.jpeg',
            '/images/apartments/batyam/1bdr-bf122/2.jpeg',
            '/images/apartments/batyam/1bdr-bf122/3.jpeg',
            '/images/apartments/batyam/1bdr-bf122/4.jpeg',
            '/images/apartments/batyam/1bdr-bf122/5.jpeg',
            '/images/apartments/batyam/1bdr-bf122/6.jpeg',
            '/images/apartments/batyam/1bdr-bf122/7.jpeg',
            '/images/apartments/batyam/1bdr-bf122/8.jpeg',
            '/images/apartments/batyam/1bdr-bf122/9.jpeg'
        ],
        price: 90
    },
    {
        id: 4,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/2bdr-bf122/1.jpeg',
            '/images/apartments/batyam/2bdr-bf122/2.jpeg',
            '/images/apartments/batyam/2bdr-bf122/3.jpeg',
            '/images/apartments/batyam/2bdr-bf122/4.jpeg',
            '/images/apartments/batyam/2bdr-bf122/5.jpeg',
            '/images/apartments/batyam/2bdr-bf122/6.jpeg',
            '/images/apartments/batyam/2bdr-bf122/7.jpeg',
            '/images/apartments/batyam/2bdr-bf122/8.jpeg',
            '/images/apartments/batyam/2bdr-bf122/9.jpeg',
            '/images/apartments/batyam/2bdr-bf122/10.jpeg',
            '/images/apartments/batyam/2bdr-bf122/11.jpeg'
        ],
        price: 110
    },
    {
        id: 5,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на набережной Бен Гурион с видом на море',
        images: [
            '/images/apartments/batyam/2bdr-bg5a/1.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/2.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/3.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/4.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/5.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/6.jpg',
            '/images/apartments/batyam/2bdr-bg5a/7.jpg',
            '/images/apartments/batyam/2bdr-bg5a/8.jpg',
            '/images/apartments/batyam/2bdr-bg5a/9.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/10.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/11.jpeg',
            '/images/apartments/batyam/2bdr-bg5a/12.jpeg'
        ],
        price: 120
    },
    {
        id: 6,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на набережной Бен Гурион с видом на море',
        images: [
            '/images/apartments/batyam/1bdr-bg4a/1.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/2.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/3.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/4.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/5.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/6.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/7.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/8.jpeg',
            '/images/apartments/batyam/1bdr-bg4a/9.jpeg'
        ],
        price: 90
    },
    {
        id: 7,
        title: 'Четырёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/3bdr-mrg4/1.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/2.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/3.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/4.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/5.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/6.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/7.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/8.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/9.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/10.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/11.jpeg',
            '/images/apartments/batyam/3bdr-mrg4/12.jpeg'
        ],
        price: 120
    },
    {
        id: 8,
        title: 'Пятикомнатная квартира',
        description: 'Квартира с 4я спальнями и залом в новом доме, есть балкон и вид на море',
        images: [
            '/images/apartments/batyam/4bdr-sade/1.jpeg',
            '/images/apartments/batyam/4bdr-sade/2.jpeg',
            '/images/apartments/batyam/4bdr-sade/3.jpeg',
            '/images/apartments/batyam/4bdr-sade/4.jpeg',
            '/images/apartments/batyam/4bdr-sade/5.jpeg',
            '/images/apartments/batyam/4bdr-sade/6.jpeg',
            '/images/apartments/batyam/4bdr-sade/7.jpeg',
            '/images/apartments/batyam/4bdr-sade/8.jpeg',
            '/images/apartments/batyam/4bdr-sade/9.jpeg',
            '/images/apartments/batyam/4bdr-sade/10.jpeg',
            '/images/apartments/batyam/4bdr-sade/11.jpeg',
            '/images/apartments/batyam/4bdr-sade/12.jpeg',
            '/images/apartments/batyam/4bdr-sade/13.jpeg',
            '/images/apartments/batyam/4bdr-sade/14.jpeg',
            '/images/apartments/batyam/4bdr-sade/15.jpeg',
            '/images/apartments/batyam/4bdr-sade/16.jpeg',
            '/images/apartments/batyam/4bdr-sade/17.jpeg',
            '/images/apartments/batyam/4bdr-sade/18.jpeg',
            '/images/apartments/batyam/4bdr-sade/19.jpeg',
            '/images/apartments/batyam/4bdr-sade/20.jpeg',
            '/images/apartments/batyam/4bdr-sade/21.jpeg',
            '/images/apartments/batyam/4bdr-sade/22.jpeg',
            '/images/apartments/batyam/4bdr-sade/23.jpeg',
            '/images/apartments/batyam/4bdr-sade/24.jpeg',
            '/images/apartments/batyam/4bdr-sade/25.jpeg',
            '/images/apartments/batyam/4bdr-sade/26.jpeg',
            '/images/apartments/batyam/4bdr-sade/27.jpeg',
            '/images/apartments/batyam/4bdr-sade/28.jpeg',
            '/images/apartments/batyam/4bdr-sade/29.jpeg',
            '/images/apartments/batyam/4bdr-sade/30.jpeg'
        ],
        price: 300
    },
    {
        id: 9,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartments/batyam/1bdr-bf50/1.jpeg',
            '/images/apartments/batyam/1bdr-bf50/2.jpeg',
            '/images/apartments/batyam/1bdr-bf50/3.jpeg',
            '/images/apartments/batyam/1bdr-bf50/4.jpeg',
            '/images/apartments/batyam/1bdr-bf50/5.jpeg',
            '/images/apartments/batyam/1bdr-bf50/6.webp',
            '/images/apartments/batyam/1bdr-bf50/7.webp',
            '/images/apartments/batyam/1bdr-bf50/8.jpeg'
        ],
        price: 80
    }
]
</script>