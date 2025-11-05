<template>
    <!-- <h2>Нетания</h2> -->
    <!--Здесь будет список-->
    <div class="catalog">
        <ApartmentCard v-for="apt in apartments" :key="apt.id" :apartment="apt" />
    </div>
</template>

<script setup>
import ApartmentCard from '@/components/ApartmentCard.vue';
import { imagePath } from '@/components/imagePath';

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
            imagePath('/images/apartments/netanya/2bdr-shb/1.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/2.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/3.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/4.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/5.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/6.webp'),
            imagePath('/images/apartments/netanya/2bdr-shb/7.webp')
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
            imagePath('/images/apartments/netanya/2bdr-sh/1.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/2.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/3.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/4.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/5.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/6.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/7.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/8.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/9.webp'),
            imagePath('/images/apartments/netanya/2bdr-sh/10.webp')
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
            imagePath('/images/apartments/netanya/1bdr-sh/1.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/2.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/3.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/4.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/5.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/6.webp'),
            imagePath('/images/apartments/netanya/1bdr-sh/7.webp')
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
            imagePath('/images/apartments/netanya/3bdr-mc11/1.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/2.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/3.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/4.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/5.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/6.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/7.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/8.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/9.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/10.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc11/11.webp')
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
            imagePath('/images/apartments/netanya/4bdr-shlmel/1.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/2.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/3.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/4.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/5.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/6.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/7.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/8.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/9.webp'),
            imagePath('/images/apartments/netanya/4bdr-shlmel/10.webp')
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
            imagePath('/images/apartments/netanya/1bdr-crm/1.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/2.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/3.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/4.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/5.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/6.webp'),
            imagePath('/images/apartments/netanya/1bdr-crm/7.webp')
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
            imagePath('/images/apartments/netanya/2bdr-op/1.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/2.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/3.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/4.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/5.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/6.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/7.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/8.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/9.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/10.webp'),
            imagePath('/images/apartments/netanya/2bdr-op/11.webp')
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
            imagePath('/images/apartments/netanya/2bdr-gdmhs/1.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/2.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/3.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/4.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/5.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/6.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/7.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/8.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/9.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/10.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/11.webp'),
            imagePath('/images/apartments/netanya/2bdr-gdmhs/12.webp')
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
            imagePath('/images/apartments/netanya/3bdr-mc14/1.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/2.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/3.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/4.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/5.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/6.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/7.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/8.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/9.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/10.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/11.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/12.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/13.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/14.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/15.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/16.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/17.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/18.webp'),
            imagePath('/images/apartments/netanya/3bdr-mc14/19.webp')
        ],
        price: 180
    }
]
</script>

<style scoped>

</style>