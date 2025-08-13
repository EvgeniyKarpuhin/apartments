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
            '/images/apartment16/1.jpeg',
            '/images/apartment16/2.jpeg',
            '/images/apartment16/3.jpeg',
            '/images/apartment16/4.jpeg',
            '/images/apartment16/5.jpeg',
            '/images/apartment16/6.jpeg',
            '/images/apartment16/7.jpeg',
            '/images/apartment16/8.jpeg',
            '/images/apartment16/9.jpeg',
            '/images/apartment16/10.jpeg',
            '/images/apartment16/11.jpeg'
        ],
        price: 100
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartment17/1.jpeg',
            '/images/apartment17/2.jpeg',
            '/images/apartment17/3.jpeg',
            '/images/apartment17/4.jpeg',
            '/images/apartment17/5.jpeg',
            '/images/apartment17/6.jpeg'
        ],
        price: 80
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartment18/1.jpeg',
            '/images/apartment18/2.jpeg',
            '/images/apartment18/3.jpeg',
            '/images/apartment18/4.jpeg',
            '/images/apartment18/5.jpeg',
            '/images/apartment18/6.jpeg',
            '/images/apartment18/7.jpeg',
            '/images/apartment18/8.jpeg',
            '/images/apartment18/9.jpeg'
        ],
        price: 90
    },
    {
        id: 4,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartment19/1.jpeg',
            '/images/apartment19/2.jpeg',
            '/images/apartment19/3.jpeg',
            '/images/apartment19/4.jpeg',
            '/images/apartment19/5.jpeg',
            '/images/apartment19/6.jpeg',
            '/images/apartment19/7.jpeg',
            '/images/apartment19/8.jpeg',
            '/images/apartment19/9.jpeg',
            '/images/apartment19/10.jpeg',
            '/images/apartment19/11.jpeg'
        ],
        price: 110
    },
    {
        id: 5,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на набережной Бен Гурион с видом на море',
        images: [
            '/images/apartment20/1.jpeg',
            '/images/apartment20/2.jpeg',
            '/images/apartment20/3.jpeg',
            '/images/apartment20/4.jpeg',
            '/images/apartment20/5.jpeg',
            '/images/apartment20/6.jpg',
            '/images/apartment20/7.jpg',
            '/images/apartment20/8.jpg',
            '/images/apartment20/9.jpeg',
            '/images/apartment20/10.jpeg',
            '/images/apartment20/11.jpeg',
            '/images/apartment20/12.jpeg'
        ],
        price: 120
    },
    {
        id: 6,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на набережной Бен Гурион с видом на море',
        images: [
            '/images/apartment21/1.jpeg',
            '/images/apartment21/2.jpeg',
            '/images/apartment21/3.jpeg',
            '/images/apartment21/4.jpeg',
            '/images/apartment21/5.jpeg',
            '/images/apartment21/6.jpeg',
            '/images/apartment21/7.jpeg',
            '/images/apartment21/8.jpeg',
            '/images/apartment21/9.jpeg'
        ],
        price: 90
    },
    {
        id: 7,
        title: 'Четырёхкомнатная квартира',
        description: 'Квартира с 3я спальнями и залом недалеко от набережной Бен Гурион',
        images: [
            '/images/apartment22/1.jpeg',
            '/images/apartment22/2.jpeg',
            '/images/apartment22/3.jpeg',
            '/images/apartment22/4.jpeg',
            '/images/apartment22/5.jpeg',
            '/images/apartment22/6.jpeg',
            '/images/apartment22/7.jpeg',
            '/images/apartment22/8.jpeg',
            '/images/apartment22/9.jpeg',
            '/images/apartment22/10.jpeg',
            '/images/apartment22/11.jpeg',
            '/images/apartment22/12.jpeg'
        ],
        price: 120
    },
    {
        id: 8,
        title: 'Пятикомнатная квартира',
        description: 'Квартира с 4я спальнями и залом в новом доме, есть балкон и вид на море',
        images: [
            '/images/apartment23/1.jpeg',
            '/images/apartment23/2.jpeg',
            '/images/apartment23/3.jpeg',
            '/images/apartment23/4.jpeg',
            '/images/apartment23/5.jpeg',
            '/images/apartment23/6.jpeg',
            '/images/apartment23/7.jpeg',
            '/images/apartment23/8.jpeg',
            '/images/apartment23/9.jpeg',
            '/images/apartment23/10.jpeg',
            '/images/apartment23/11.jpeg',
            '/images/apartment23/12.jpeg',
            '/images/apartment23/13.jpeg',
            '/images/apartment23/14.jpeg',
            '/images/apartment23/15.jpeg',
            '/images/apartment23/16.jpeg',
            '/images/apartment23/17.jpeg',
            '/images/apartment23/18.jpeg',
            '/images/apartment23/19.jpeg',
            '/images/apartment23/20.jpeg',
            '/images/apartment23/21.jpeg',
            '/images/apartment23/22.jpeg',
            '/images/apartment23/23.jpeg',
            '/images/apartment23/24.jpeg',
            '/images/apartment23/25.jpeg',
            '/images/apartment23/26.jpeg',
            '/images/apartment23/27.jpeg',
            '/images/apartment23/28.jpeg',
            '/images/apartment23/29.jpeg',
            '/images/apartment23/30.jpeg'
        ],
        price: 300
    },
    {
        id: 9,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бальфур недалеко от набережной Бен Гурион',
        images: [
            '/images/apartment24/1.jpeg',
            '/images/apartment24/2.jpeg',
            '/images/apartment24/3.jpeg',
            '/images/apartment24/4.jpeg',
            '/images/apartment24/5.jpeg',
            '/images/apartment24/6.webp',
            '/images/apartment24/7.webp',
            '/images/apartment24/8.jpeg'
        ],
        price: 80
    }
]
</script>