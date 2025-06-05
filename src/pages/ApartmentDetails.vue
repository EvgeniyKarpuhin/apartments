<template>
    <div v-if="apartment">
        <h2>{{ apartment.title }}</h2>

        <Carousel :items-to-show="1" :wrap-around="true" autoplay="true">
            <Slide v-for="(img, index) in apartment.images[0]" :key="index">
                <img :src="img" alt="фото" class="slider-image">
            </Slide>
        </Carousel>

        <!-- <img :src="apartment.image" alt="фото"> -->
        <p>{{ apartment.description }}</p>
        <p>{{ apartment.price }} $ в сутки</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';

const mockApartments = [
    {
        id: 1,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа',
        images: [
            '/images/apartment1/1.jpg',
            '/images/apartment1/2.jpg',
            '/images/apartment1/3.jpg',
            '/images/apartment1/4.jpg',
            '/images/apartment1/5.jpg',
            '/images/apartment1/6.jpg'
        ],
        price: 110
    },
    {
        id: 2,
        title: 'Двухкомнатная квартира',
        description: 'Квартира с 1й спальней и залом на улице Бен Иуда в пешей доступности до пляжа, есть балкон',
        images: [
            '/images/apartment2/1.jpg',
            '/images/apartment2/2.jpg',
            '/images/apartment2/3.jpg',
            '/images/apartment2/4.jpg',
            '/images/apartment2/5.jpg',
            '/images/apartment2/6.jpg'
        ],
        price: 130
    },
]

const route = useRoute()
const apartment = ref(null)

onMounted(() => {
    const id = Number(route.params.id)
    apartment.value = mockApartments.find(a => a.id === id)
})
</script>

<style scoped>
.slider-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  max-height: 400px;
}
</style>