<template>
    <!-- <h2>Тель Авив</h2> -->
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
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 40 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mrby/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/6.webp')
        ],
        price: 110
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 50 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mrbys/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/6.webp')
        ],
        price: 130
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 750 метров',
            'Площадь: 45 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/6.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/7.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/8.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/9.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/10.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/11.webp')
        ],
        price: 160
    },
    {
        id: 4,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 750 метров',
            'Площадь: 65 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrdz/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/6.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/7.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/8.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/9.webp')
        ],
        price: 220
    },
    {
        id: 5,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 75 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/6.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/7.webp')
        ],
        price: 270
    },
    {
        id: 6,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 100 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrpi/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/6.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/7.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/8.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/9.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/10.webp')
        ],
        price: 280
    },
    {
        id: 7,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 45 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mrallb/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/6.webp')
        ],
        price: 100
    },
    {
        id: 8,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 50 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mralld/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/5.webp')
        ],
        price: 100
    },
    {
        id: 9,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 50 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mralllux/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/6.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/7.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/8.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/9.webp')
        ],
        price: 120
    },
    {
        id: 10,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 60 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrmon/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/6.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/7.webp')
        ],
        price: 210
    },
    {
        id: 11,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 500 метров',
            'Площадь: 65 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/6.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/7.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/8.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/9.webp')
        ],
        price: 240
    },
    {
        id: 12,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 900 метров',
            'Площадь: 80 кв.м.',
            'Санузел: 1',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrkats/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/6.webp')
        ],
        price: 230
    },
    {
        id: 13,
        title: 'Двухкомнатная квартира',
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 1200 метров',
            'Площадь: 55 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
        images: [
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/1.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/2.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/3.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/4.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/5.webp'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/6.webp')
        ],
        price: 120
    },
    {
        id: 14,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 6',
            'Расстояние до пляжа: 1200 метров',
            'Площадь: 90 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/6.webp')
        ],
        price: 250
    },
    {
        id: 15,
        title: 'Четырёхкомнатная квартира',
        description: [
            'Планировка: 3 спальни + зал с кухней',
            'Количество человек: до 8',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 120 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/3bdr-mrpig/1.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/2.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/3.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/4.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/5.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/6.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/7.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/8.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/9.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/10.webp')
        ],
        price: 270
    },
    {
        id: 16,
        title: 'Трёхкомнатная квартира',
        description: [
            'Планировка: 2 спальни + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 200 метров',
            'Площадь: 60 кв.м.',
            'Санузел: 1',
            'Балкон: нет'
        ],
        images: [
            imagePath('/images/apartments/telaviv/2bdr-mrallness/1.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrallness/2.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrallness/3.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrallness/4.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrallness/5.webp'),
            imagePath('/images/apartments/telaviv/2bdr-mrallness/6.webp')
        ],
        price: 250
    },
    {
        id: 17,
        title: 'Четырёхкомнатная квартира',
        description: [
            'Планировка: 3 спальни + зал с кухней',
            'Количество человек: до 8',
            'Расстояние до пляжа: 550 метров',
            'Площадь: 120 кв.м.',
            'Санузел: 2',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/3bdr-mryav/1.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/2.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/3.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/4.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/5.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/6.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/7.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/8.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/9.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/10.webp'),
            imagePath('/images/apartments/telaviv/3bdr-mryav/11.webp')
        ],
        price: 330
    },
    {
        id: 18,
        title: 'Пятикомнатная квартира',
        description: [
            'Планировка: 4 спальни + зал с кухней',
            'Количество человек: до 10',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 140 кв.м.',
            'Санузел: 3',
            'Балкон: есть'
        ],
        images: [
            imagePath('/images/apartments/telaviv/4bdr-mrpid/1.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/2.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/3.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/4.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/5.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/6.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/7.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/8.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/9.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/10.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/11.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/12.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/13.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/14.webp'),
            imagePath('/images/apartments/telaviv/4bdr-mrpid/15.webp')
        ],
        price: 700
    }
]
</script>

<style scoped>

</style>