<template>
    <!-- <h2>Тель Авив</h2> -->
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
        description: [
            'Планировка: спальня + зал с кухней',
            'Количество человек: до 4',
            'Расстояние до пляжа: 600 метров',
            'Площадь: 40 кв.м.'
        ],
        images: [
            '/images/apartments/telaviv/1bdr-mrby/1.jpg',
            '/images/apartments/telaviv/1bdr-mrby/2.jpg',
            '/images/apartments/telaviv/1bdr-mrby/3.jpg',
            '/images/apartments/telaviv/1bdr-mrby/4.jpg',
            '/images/apartments/telaviv/1bdr-mrby/5.jpg',
            '/images/apartments/telaviv/1bdr-mrby/6.jpg'
        ],
        price: 110
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа, есть балкон',
        images: [
            '/images/apartments/telaviv/1bdr-mrbys/1.jpg',
            '/images/apartments/telaviv/1bdr-mrbys/2.jpg',
            '/images/apartments/telaviv/1bdr-mrbys/3.jpg',
            '/images/apartments/telaviv/1bdr-mrbys/4.jpg',
            '/images/apartments/telaviv/1bdr-mrbys/5.jpg',
            '/images/apartments/telaviv/1bdr-mrbys/6.jpg'
        ],
        price: 130
    },
    {
        id: 3,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Дизенгоф недалеко от пляжа, есть балкон',
        images: [
            '/images/apartments/telaviv/1bdr-mrdzb/1.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/2.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/3.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/4.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/5.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/6.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/7.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/8.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/9.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/10.jpg',
            '/images/apartments/telaviv/1bdr-mrdzb/11.jpg'
        ],
        price: 160
    },
    {
        id: 4,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Дизенгоф недалеко от пляжа, есть балкон',
        images: [
            '/images/apartments/telaviv/2bdr-mrdz/1.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/2.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/3.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/4.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/5.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/6.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/7.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/8.jpg',
            '/images/apartments/telaviv/2bdr-mrdz/9.jpg'
        ],
        price: 220
    },
    {
        id: 5,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Бен Иуда в пешей доступности до пляжа, есть терраса',
        images: [
            '/images/apartments/telaviv/2bdr-mrbyp/1.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/2.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/3.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/4.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/5.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/6.jpg',
            '/images/apartments/telaviv/2bdr-mrbyp/7.jpg'
        ],
        price: 270
    },
    {
        id: 6,
        title: 'Трёхкомнатная квартира',
        description: 'Квартира с 2я спальнями и залом на улице Пинскер недалеко от пляжа, 2 санузла, балкон',
        images: [
            '/images/apartments/telaviv/2bdr-mrpi/1.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/2.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/3.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/4.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/5.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/6.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/7.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/8.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/9.jpg',
            '/images/apartments/telaviv/2bdr-mrpi/10.jpg'
        ],
        price: 280
    }
]
</script>

<style scoped>

</style>