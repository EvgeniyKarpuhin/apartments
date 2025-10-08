<template>
    <div class="hotel-list">
        <div class="hotel-card" v-for="(hotel, index) in hotels" :key="index">
            <img :src="hotel.images[0]" :alt="hotel.name" @click="openModal(hotel)" />
            <div class="info">
                <h3>{{ hotel.name }}</h3>
                <p class="desc">{{ hotel.description }}</p>
                <p class="price">от {{ hotel.price }} $ в сутки / Есть сезонные скидки</p>
            </div>
        </div>

        <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <swiper :modules="[Navigation]" 
                        :slides-per-view="1" 
                        navigation 
                        :initial-slide="currentIndex" 
                        class="modal-swiper"
                >
                    <swiper-slide v-for="(img, i) in currentHotel.images" :key="i">
                        <div class="slide-content">
                            <img :src="img" :alt="currentHotel.name" />
                        </div>
                    </swiper-slide>
                </swiper>

                <button class="close-button" @click="closeModal">✖</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imagePath } from '@/components/imagePath';

import 'swiper/css'
import 'swiper/css/navigation'

const hotels = ref([
    {
        name: 'Dan Tel Aviv Hotel',
        description: 'Один из самых известных отелей в городе, удобно расположен на морском побережье. Из отеля открывается вид на Средиземное море. К услугам гостей терраса для загара с видом на пляж и большим открытым бассейном.',
        price: 500,
        images: [
            imagePath('/images/hotels/telaviv/dan/11843033.jpg'),
            imagePath('/images/hotels/telaviv/dan/183827187.jpg'),
            imagePath('/images/hotels/telaviv/dan/183827178.jpg'),
            imagePath('/images/hotels/telaviv/dan/183827199.jpg')
            
        ]
    },
    {
        name: 'Royal Beach Hotel Tel Aviv',
        description: 'Отель расположен на набережной, между улицами Ха-Яркон и Герберт Самуэль. К услугам гостей открытый бассейн, ресторан с обслуживанием по меню, бар, оздоровительный центр и спа-салон, представительский лаундж и фитнес-центр.',
        price: 300,
        images: [
            imagePath('/images/hotels/telaviv/royal/1.jpg'),
            imagePath('/images/hotels/telaviv/royal/2.jpg'),
            imagePath('/images/hotels/telaviv/royal/3.jpg'),
            imagePath('/images/hotels/telaviv/royal/4.jpg')
        ]
    },
    {
        name: 'The David Kempinski Tel Aviv',
        description: 'Отель 5 звезд на первой линии города Тель-Авив. В распоряжении гостей бесплатные велосипеды, открытый бассейн, фитнес-центр, терраса, ресторан и бар. Можно воспользоваться трансфером от/до аэропорта или доставкой еды и напитков.',
        price: 600,
        images: [
            imagePath('/images/hotels/telaviv/kempinski/1.jpg'),
            imagePath('/images/hotels/telaviv/kempinski/2.jpg'),
            imagePath('/images/hotels/telaviv/kempinski/3.jpg'),
            imagePath('/images/hotels/telaviv/kempinski/4.jpg'),
            imagePath('/images/hotels/telaviv/kempinski/5.jpg')
        ]
    },
    {
        name: 'Tal By The Beach в Тель Авиве',
        description: 'Отель расположен всего в нескольких шагах от прекрасного пляжа, недалеко от модного порта и торговых районов Тель-Авива. К услугам гостей современные номера с бесплатным Wi-Fi. Неподалеку находятся рестораны и клубы.',
        price: 300,
        images: [
            imagePath('/images/hotels/telaviv/tal/1.jpg'),
            imagePath('/images/hotels/telaviv/tal/2.jpg'),
            imagePath('/images/hotels/telaviv/tal/3.jpg'),
            imagePath('/images/hotels/telaviv/tal/4.jpg')
        ]
    },
    {
        name: 'Melody Hotel в Тель Авиве',
        description: 'Отель расположен в центре Тель-Авива, всего в 3 минутах ходьбы от песчаного пляжа. С великолепной террасы на крыше отеля открывается вид на городской пейзаж и Средиземное море. В районе открыты многочисленные рестораны и магазины.',
        price: 300,
        images: [
            imagePath('/images/hotels/telaviv/mel/1.jpg'),
            imagePath('/images/hotels/telaviv/mel/2.jpg'),
            imagePath('/images/hotels/telaviv/mel/3.jpg'),
            imagePath('/images/hotels/telaviv/mel/4.jpg')
        ]
    },
    {
        name: 'Shalom Hotel & Relax в Тель Авиве',
        description: 'Отель находится в нескольких шагах от пляжа. К услугам гостей лаундж на крыше с видом на город и Средиземное море. Отель расположен в 10 минутах ходьбы от торгового района Тель-Авива. Прогулка до порта Тель-Авива займет 5 минут.',
        price: 300,
        images: [
            imagePath('/images/hotels/telaviv/shlm/1.jpg'),
            imagePath('/images/hotels/telaviv/shlm/2.jpg'),
            imagePath('/images/hotels/telaviv/shlm/3.jpg'),
            imagePath('/images/hotels/telaviv/shlm/4.jpg'),
            imagePath('/images/hotels/telaviv/shlm/5.jpg')
        ]
    },
    {
        name: 'The Ritz-Carlton',
        description: 'Отель расположен в районе пристани для яхт, над торговым центром Arena. Из бассейна на крыше открывается вид на океан. К услугам гостей элегантные номера, оздоровительный и спа-центр, бесплатный Wi-Fi, а также различные рестораны и бары на территории отеля. Все номера выходят на балкон с видом на Средиземное море. ',
        price: 600,
        images: [
            imagePath('/images/hotels/herzliya/ritz/1.jpg'),
            imagePath('/images/hotels/herzliya/ritz/2.jpg'),
            imagePath('/images/hotels/herzliya/ritz/3.jpg'),
            imagePath('/images/hotels/herzliya/ritz/4.jpg')
        ]
    },
    {
        name: 'Dan Accadia Herzliya Hotel',
        description: 'Отель Dan Accadia расположен прямо на песчаном пляже в городе Герцлия. К услугам гостей этого роскошного отеля современные номера, превосходные удобства для отдыха и большой выбор ресторанов. Отель Dan Accadia Herzliya расположен на пляже в нескольких минутах ходьбы от набережной города.',
        price: 400,
        images: [
            imagePath('/images/hotels/herzliya/dan/1.jpg'),
            imagePath('/images/hotels/herzliya/dan/2.jpg'),
            imagePath('/images/hotels/herzliya/dan/3.jpg'),
            imagePath('/images/hotels/herzliya/dan/4.jpg')
        ]
    },
    {
        name: 'Herods Herzliya',
        description: 'Отель с открытым бассейном и садом расположен на побережье города Герцлия. К услугам гостей тренажерный зал, бесплатный Wi-Fi и бесплатная парковка. При отеле работают бар и ресторан, где подают фирменные блюда местной кухни. Отель расположен у пристани и побережья Герцлии.',
        price: 250,
        images: [
            imagePath('/images/hotels/herzliya/hrds/1.jpg'),
            imagePath('/images/hotels/herzliya/hrds/2.jpg'),
            imagePath('/images/hotels/herzliya/hrds/3.jpg'),
            imagePath('/images/hotels/herzliya/hrds/4.jpg')
        ]
    },
    {
        name: 'David Tower Hotel Netanya',
        description: 'Отель с панорамным видом на Средиземное море расположен в центре Нетании, всего в 150 метрах от пляжа. К услугам гостей спа-центр, ресторан с модным баром, а также элегантно обставленные номера.',
        price: 230,
        images: [
            imagePath('/images/hotels/netanya/david/1.jpg'),
            imagePath('/images/hotels/netanya/david/2.jpg'),
            imagePath('/images/hotels/netanya/david/3.jpg'),
            imagePath('/images/hotels/netanya/david/4.jpg')
        ]
    },
    {
        name: 'Island Luxurious Suites Hotel and Spa',
        description: 'Тридцатиэтажный отель расположен в городе Нетания. К услугам гостей плавательный бассейн и очень просторные люксы с большим балконом, откуда открывается вид на Средиземное море.',
        price: 240,
        images: [
            imagePath('/images/hotels/netanya/island/1.jpg'),
            imagePath('/images/hotels/netanya/island/2.jpg'),
            imagePath('/images/hotels/netanya/island/3.jpg'),
            imagePath('/images/hotels/netanya/island/4.jpg')
        ]
    },
    {
        name: 'Medi Terre Boutique Hotel',
        description: 'Отель с бесплатным WiFi расположен в Нетании, в 200 м от пляжа Сизон и в 5 минутах ходьбы от пляжа Тамбона. К услугам гостей ресторан и бесплатная парковка на территории.',
        price: 220,
        images: [
            imagePath('/images/hotels/netanya/medi/1.jpg'),
            imagePath('/images/hotels/netanya/medi/2.jpg'),
            imagePath('/images/hotels/netanya/medi/3.jpg'),
            imagePath('/images/hotels/netanya/medi/4.jpg')
        ]
    },
    {
        name: 'Leonardo Plaza Netanya Hotel',
        description: 'Отель расположен в Нетании, в 350 метрах от песчаного пляжа на берегу Средиземного моря. К услугам гостей сезонный открытый бассейн с солнечной террасой.',
        price: 220,
        images: [
            imagePath('/images/hotels/netanya/leo/1.jpg'),
            imagePath('/images/hotels/netanya/leo/2.jpg'),
            imagePath('/images/hotels/netanya/leo/3.jpg'),
            imagePath('/images/hotels/netanya/leo/4.jpg')
        ]
    },
    {
        name: 'Residence Beach Hotel',
        description: 'Отель с видом на популярный пляж Сиронит расположен в самом центре Нетании. К услугам гостей современные номера с видом на Средиземное море.',
        price: 130,
        images: [
            imagePath('/images/hotels/netanya/res/1.jpg'),
            imagePath('/images/hotels/netanya/res/2.jpg'),
            imagePath('/images/hotels/netanya/res/3.jpg'),
            imagePath('/images/hotels/netanya/res/4.jpg')
        ]
    },
    {
        name: 'Margoa Hotel Netanya',
        description: 'Отель расположен на берегу моря в Нетании. Лифт рядом с отелем доставит гостей до пляжа. В отеле есть ресторан, бар и круглосуточная стойка регистрации.',
        price: 110,
        images: [
            imagePath('/images/hotels/netanya/margoa/1.jpg'),
            imagePath('/images/hotels/netanya/margoa/2.jpg'),
            imagePath('/images/hotels/netanya/margoa/3.jpg'),
            imagePath('/images/hotels/netanya/margoa/4.jpg')
        ]
    }
])

const modalVisible = ref(false)
const currentHotel = ref(null)
const currentIndex = ref(0)

function openModal(hotel, index = 0) {
    currentHotel.value = hotel;
    currentIndex.value = index;
    modalVisible.value = true;
}

function closeModal() {
    modalVisible.value = false;
}
</script>

<style scoped>
.hotel-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 50px 0;
}

.hotel-card {
    max-width: 350px;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.hotel-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    cursor: zoom-in;
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

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    position: relative;
    max-width: 40vw;
    max-height: 90vh;
    border-radius: 12px;
    overflow: hidden;
}

.modal-swiper {
    width: 100%;
    height: 100%;
}

.modal-swiper :deep(.swiper-slide) {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 8px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.25rem 0.6rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 10;
}
</style>