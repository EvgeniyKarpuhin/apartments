<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
    <header>
      <nav class="nav desktop">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/telaviv">Тель Авив</RouterLink>
        <RouterLink to="/netanya">Нетания</RouterLink>
        <RouterLink to="/batyam">Бат Ям</RouterLink>
        <RouterLink to="/hotels">Отели</RouterLink>
      </nav>

      <div class="header-contact">
        <span class="contact-text">Связаться с нами:</span>
        <a href="https://t.me/ArrowKnight" target="_blank" class="icon telegram" aria-label="Telegram">
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a href="https://wa.me/972526717648" target="_blank" class="icon whatsapp" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>

      <button class="burger" @click="toggleMenu">☰</button>

      <div v-if="menuOpen" class="mobile-menu">
        <button class="close" @click="toggleMenu">✖</button>
        <nav>
          <router-link to="/telaviv" @click="toggleMenu">Тель Авив</router-link>
          <router-link to="/netanya" @click="toggleMenu">Нетания</router-link>
          <router-link to="/batyam" @click="toggleMenu">Бат Ям</router-link>
          <router-link to="/hotels" @click="toggleMenu">Отели</router-link>
          <router-link to="/about" @click="toggleMenu">О нас</router-link>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  margin-top: 2vh;
  max-height: 5vh;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}

.header-contact {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-text {
  font-size: 1rem;
  font-weight: 500;
  opacity: .9;
}

@media (max-width: 440px) {
  .contact-text {
    font-size: 0.9rem;
  }
}

.icon {
  font-size: 1.5rem;
  transition: transform 0.2s, color 0.3s;
}

.icon:hover {
  transform: scale(1.2);
  background: none;
}

.telegram {
  color: #0088cc;
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
</style>
