<template>
    <!-- <h2>Тель Авив</h2> -->
    <!--Здесь будет список-->
    <div class="catalog">
        <ApartmentCard v-for="apt in apartments" :key="apt.id" :apartment="apt" />
    </div>
</template>

<script setup>
import ApartmentCard from '@/components/ApartmentCard.vue';

function imagePath(path) {
  return `${import.meta.env.BASE_URL}${path}`
}

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
    }
]
</script>

<style scoped>

</style>