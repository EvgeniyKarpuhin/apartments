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
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 400 метров',
            'Площадь: 100 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
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
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 400 метров',
            'Площадь: 90 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
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
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 650 метров',
            'Площадь: 40 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
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
        description: [
            'Планировка: 3 спальни + зал с кухней',
            'Количество человек: до 7',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 120 кв.м.',
            'Санузел: 3',
            'Балкон: нет'
        ],
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
        description: [
            'Планировка: 4 спальни + зал с кухней',
            'Количество человек: до 9',
            'Расстояние до пляжа: 300 метров',
            'Площадь: 155 кв.м.',
            'Санузел: 3',
            'Балкон: есть'
        ],
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
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 350 метров',
            'Площадь: 40 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
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
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 5',
            'Расстояние до пляжа: 300 метров',
            'Площадь: 90 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
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
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 250 метров',
            'Площадь: 100 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
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
        description: [
            'Планировка: 3 спальни + зал с кухней',
            'Количество человек: до 8',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 135 кв.м.',
            'Санузел: 3',
            'Балкон: есть'
        ],
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