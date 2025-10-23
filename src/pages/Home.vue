<template>
    <div>
        <div v-if="isMobile">
            <!-- <div v-if="menuOpen" class="mobile-menu">
                <button class="close" @click="toggleMenu">✖</button>
                <nav>
                    <router-link to="/" @click="toggleMenu">О нас</router-link>
                    <router-link to="/telaviv" @click="toggleMenu">Тель Авив</router-link>
                    <router-link to="/netanya" @click="toggleMenu">Нетания</router-link>
                    <router-link to="/batyam" @click="toggleMenu">Бат Ям</router-link>
                    <router-link to="/hotels" @click="toggleMenu">Отели</router-link>
          
                </nav>
            </div> -->
            <div class="mobile-home">
                <h1>Выберите город</h1>
                <div class="cities">
                    <div
                        v-for="city in cities"
                        :key="city.name"
                        class="city-block"
                        @click="goToCity(city.link)"
                    >
                        <p>{{ city.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="overlay">
            <h1 class="mrg">Аренда жилья в Израиле — просто и удобно</h1>
            <h2 class="mrg">Мы помогаем найти квартиры и дома для краткосрочной и долгосрочной аренды.<br>
                Все объекты проверены лично — вы будете уверены в качестве жилья.<br>
                Мы работаем с многими отелями от эконом до класса Люкс с видом на море.<br>
                Нужен трансфер? Мы предоставим комфортные условия для передвижения в любую точку страны.
            </h2>
        
            <h2>
                Наши услуги:
            </h2>
            <ul class="size-li">
                <li>Аренда квартир, домов и отелей на разный срок</li>
                <li>Подбор жилья под ваши даты и бюджет</li>
                <li>Помощь с покупкой недвижимости и сопровождение документов</li>
            </ul>
            <h2>
                Почему выбирают нас:
            </h2>
            <ul class="size-li">
                <li>Более 5 лет на рынке</li>
                <li>Сотни довольных клиентов</li>
                <li>Работаем в главных городах Израиля: Тель-Авив, Нетания, Бат-Ям, Герцлия, Хайфа, Эйлат, Иерусалим</li>
                <li>Лично проверяем состояние жилья</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const isMobile = ref(window.innerWidth < 1024)
const menuOpen = ref(false)
const router = useRouter()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const cities = [
  { name: 'Тель-Авив', link: '/telaviv', image: '/images/telaviv.jpg' },
  { name: 'Бат-Ям', link: '/batyam', image: '/images/batyam.jpg' },
  { name: 'Нетания', link: '/netanya', image: '/images/netanya.jpg' },
  { name: 'Отели', link: '/hotels', image: '/images/hotels.jpg' },
]

const goToCity = (link) => {
  router.push(link)
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 770
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.overlay {
    background: rgba(255, 255, 255, 0.63);
    border-radius: 10px;
    padding: 30px;
    margin-top: 50px;
}

@media (max-width: 768px) {
    .overlay {
        padding: 20px;
        margin-top: 20px;
    }
    .mrg {
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
    .size-li {
        font-size: 16px;
        margin: 15px 0;
    }
}

.mrg {
    margin-bottom: 50px;
}

.size-li {
    font-size: 20px;
    margin: 30px 0;
    list-style-type: disclosure-closed;
}

.size-li:last-child {
    margin: 0;
}

/*мобильная версия*/
.burger {
  display: none;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: slideIn 0.5s ease forwards;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu nav a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #1b263b;
}

.close {
  align-self: flex-end;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}

.mobile-menu.close {
  animation: slideOut 0.5s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .nav.desktop {
    display: none;
  }
  .burger {
    display: block;
  }
}

.mobile-home {
  text-align: center;
  
}

.cities {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 20px;
}

@media (max-width: 440px) {
    .cities {
        grid-template-columns: 1fr;
    }
}

.city-block {
  background: beige;
  border-radius: 12px;
  padding: 50px;
  cursor: pointer;
  transition: transform 0.2s;
  opacity: .8;
}

.city-block:hover {
  transform: scale(1.05);
}

.city-block p {
  margin-top: 6px;
  font-weight: bold;
}
</style>