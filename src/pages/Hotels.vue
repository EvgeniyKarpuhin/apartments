<template>
    <div class="hotel-list">
        <div class="hotel-card" v-for="(hotel, index) in hotels" :key="index">
            <img :src="hotel.images[0]" :alt="hotel.name"/>
            <div class="info">
                <h3>{{ hotel.name }}</h3>
                <p class="desc">{{ hotel.description }}</p>
                <p class="price">от {{ hotel.price }} $ в сутки</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const hotels = ref([
    {
        name: 'Dan Tel Aviv Hotel',
        description: 'Один из самых известных отелей в городе, удобно расположен на морском побережье. Из отеля открывается вид на Средиземное море. К услугам гостей терраса для загара с видом на пляж и большим открытым бассейном.',
        price: 500,
        images: [
            '/images/hotels/telaviv/dan/11843033.jpg',
            '/images/hotels/telaviv/dan/183827178.jpg',
            '/images/hotels/telaviv/dan/183827187.jpg',
            '/images/hotels/telaviv/dan/183827199.jpg'
        ]
    },
    {
        name: 'Royal Beach Hotel Tel Aviv',
        description: 'Отель расположен на набережной, между улицами Ха-Яркон и Герберт Самуэль. К услугам гостей открытый бассейн, ресторан с обслуживанием по меню, бар, оздоровительный центр и спа-салон, представительский лаундж и фитнес-центр.',
        price: 300,
        images: [
            '/images/hotels/telaviv/royal/1.jpg',
            '/images/hotels/telaviv/royal/2.jpg',
            '/images/hotels/telaviv/royal/3.jpg',
            '/images/hotels/telaviv/royal/4.jpg'
        ]
    },
    {
        name: 'The David Kempinski Tel Aviv',
        description: 'Отель 5 звезд на первой линии города Тель-Авив. В распоряжении гостей бесплатные велосипеды, открытый бассейн, фитнес-центр, терраса, ресторан и бар. Можно воспользоваться трансфером от/до аэропорта или доставкой еды и напитков.',
        price: 600,
        images: [
            '/images/hotels/telaviv/kempinski/1.jpg',
            '/images/hotels/telaviv/kempinski/2.jpg',
            '/images/hotels/telaviv/kempinski/3.jpg',
            '/images/hotels/telaviv/kempinski/4.jpg',
            '/images/hotels/telaviv/kempinski/5.jpg'
        ]
    }
])
</script>

<style scoped>
.hotel-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 50px;
}

.hotel-card {
    max-width: 350px;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    /* text-align: left; */
}

.hotel-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.hotel-card .info {
    padding: 1rem;
}

.desc {
    padding: 10px 0;
} 

.price {
    font-weight: bold;
    margin-top: 0.5rem;
    color: #1b263b;
}
</style>