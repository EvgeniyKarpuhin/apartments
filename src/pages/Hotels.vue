<template>
    <div class="hotel-list">
        <div class="hotel-card" v-for="(hotel, index) in hotels" :key="index">
            <img :src="hotel.images[0]" :alt="hotel.name"/>
            <div class="info">
                <h3>{{ hotel.name }}</h3>
                <p class="desc">{{ hotel.description }}</p>
                <p class="price">от {{ hotel.price }} $ в сутки / Есть сезонные скидки</p>
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
    },
    {
        name: 'Tal By The Beach в Тель Авиве',
        description: 'Отель расположен всего в нескольких шагах от прекрасного пляжа, недалеко от модного порта и торговых районов Тель-Авива. К услугам гостей современные номера с бесплатным Wi-Fi. Неподалеку находятся рестораны и клубы.',
        price: 300,
        images: [
            '/images/hotels/telaviv/tal/1.jpg',
            '/images/hotels/telaviv/tal/2.jpg',
            '/images/hotels/telaviv/tal/3.jpg',
            '/images/hotels/telaviv/tal/4.jpg'
        ]
    },
    {
        name: 'Melody Hotel в Тель Авиве',
        description: 'Отель расположен в центре Тель-Авива, всего в 3 минутах ходьбы от песчаного пляжа. С великолепной террасы на крыше отеля открывается вид на городской пейзаж и Средиземное море. В районе открыты многочисленные рестораны и магазины.',
        price: 300,
        images: [
            '/images/hotels/telaviv/mel/1.jpg',
            '/images/hotels/telaviv/mel/2.jpg',
            '/images/hotels/telaviv/mel/3.jpg',
            '/images/hotels/telaviv/mel/4.jpg'
        ]
    },
    {
        name: 'Shalom Hotel & Relax в Тель Авиве',
        description: 'Отель находится в нескольких шагах от пляжа. К услугам гостей лаундж на крыше с видом на город и Средиземное море. Отель расположен в 10 минутах ходьбы от торгового района Тель-Авива. Прогулка до порта Тель-Авива займет 5 минут.',
        price: 300,
        images: [
            '/images/hotels/telaviv/shlm/1.jpg',
            '/images/hotels/telaviv/shlm/2.jpg',
            '/images/hotels/telaviv/shlm/3.jpg',
            '/images/hotels/telaviv/shlm/4.jpg',
            '/images/hotels/telaviv/shlm/5.jpg'
        ]
    },
    {
        name: 'The Ritz-Carlton',
        description: 'Отель расположен в районе пристани для яхт, над торговым центром Arena. Из бассейна на крыше открывается вид на океан. К услугам гостей элегантные номера, оздоровительный и спа-центр, бесплатный Wi-Fi, а также различные рестораны и бары на территории отеля. Все номера выходят на балкон с видом на Средиземное море. ',
        price: 600,
        images: [
            '/images/hotels/herzliya/ritz/1.jpg',
            '/images/hotels/herzliya/ritz/2.jpg',
            '/images/hotels/herzliya/ritz/3.jpg',
            '/images/hotels/herzliya/ritz/4.jpg'
        ]
    },
    {
        name: 'Dan Accadia Herzliya Hotel',
        description: 'Отель Dan Accadia расположен прямо на песчаном пляже в городе Герцлия. К услугам гостей этого роскошного отеля современные номера, превосходные удобства для отдыха и большой выбор ресторанов. Отель Dan Accadia Herzliya расположен на пляже в нескольких минутах ходьбы от набережной города.',
        price: 400,
        images: [
            '/images/hotels/herzliya/dan/1.jpg',
            '/images/hotels/herzliya/dan/2.jpg',
            '/images/hotels/herzliya/dan/3.jpg',
            '/images/hotels/herzliya/dan/4.jpg'
        ]
    },
    {
        name: 'Herods Herzliya',
        description: 'Отель с открытым бассейном и садом расположен на побережье города Герцлия. К услугам гостей тренажерный зал, бесплатный Wi-Fi и бесплатная парковка. При отеле работают бар и ресторан, где подают фирменные блюда местной кухни. Отель расположен у пристани и побережья Герцлии.',
        price: 250,
        images: [
            '/images/hotels/herzliya/hrds/1.jpg',
            '/images/hotels/herzliya/hrds/2.jpg',
            '/images/hotels/herzliya/hrds/3.jpg',
            '/images/hotels/herzliya/hrds/4.jpg'
        ]
    },
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