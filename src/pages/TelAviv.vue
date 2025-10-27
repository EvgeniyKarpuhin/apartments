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

// function imagePath(path) {
//   return `${import.meta.env.BASE_URL}${path}`
// }

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
            imagePath('/images/apartments/telaviv/1bdr-mrby/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrby/6.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mrbys/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrbys/6.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/6.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/7.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/8.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/9.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/10.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrdzb/11.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrdz/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/6.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/7.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/8.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrdz/9.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/6.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrbyp/7.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrpi/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/6.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/7.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/8.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/9.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrpi/10.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mrallb/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrallb/6.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mralld/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralld/5.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mralllux/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/6.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/7.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/8.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mralllux/9.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrmon/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/6.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmon/7.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/6.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/7.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/8.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrmonsd/9.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrkats/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrkats/6.jpg')
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
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/1.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/2.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/3.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/4.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/5.jpg'),
            imagePath('/images/apartments/telaviv/1bdr-mrrothd/6.jpg')
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
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/1.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/2.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/3.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/4.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/5.jpg'),
            imagePath('/images/apartments/telaviv/2bdr-mrrothd/6.jpg')
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
            imagePath('/images/apartments/telaviv/3bdr-mrpig/1.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/2.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/3.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/4.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/5.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/6.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/7.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/8.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/9.jpg'),
            imagePath('/images/apartments/telaviv/3bdr-mrpig/10.jpg')
        ],
        price: 270
    },
]
</script>

<style scoped>

</style>