<template>
    <header class="header" :class="{ 'header--reproductions': isReproductionsActive }">
        <div class="container" style="max-width: 1110px;">
            <div class="row align-items-center">
                <div class="col">
                    <div class="header__wrap d-none d-sm-flex">
                        <a href="/" class="header__logo d-flex align-items-center text-decoration-none">
                            <img :src="headerImages['favicon-house']" alt="Ink. House" loading="lazy">
                            <span class="header__logo-text">Ink. House</span>
                        </a>

                        <nav class="header__nav">
                            <ul class="header__list list-unstyled d-flex mb-0">
                                <li class="header__list-item">
                                    <a href="#" class="header__list-link" @click.prevent="setActiveTab('reproductions')">Репродукции</a>
                                </li>
                                <li class="header__list-item">
                                    <a href="/new" class="header__list-link">Новинки</a>
                                </li>
                                <li class="header__list-item">
                                    <a href="/about" class="header__list-link">О нас</a>
                                </li>
                            </ul>
                            <div class="header__basket">
                                <a href="/cart" class="header__basket-link">
                                    <img 
                                        :src="headerImages['basket']" 
                                        alt="basket" 
                                        class="svg-icon svg-icon--star"
                                        width="24" 
                                        height="24"
                                        loading="lazy"
                                    >
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="header__mobile-menu d-flex d-sm-none">
                        <a href="/" class="header__logo-mobile">
                            <img :src="headerImages['favicon-house']" alt="favicon-house" loading="lazy">
                            <span class="header__logo-text">Ink. House</span>
                        </a>
                        <div class="header__menu-mobile-wrap">
                            <div class="header__mobile-nav">
                                <div class="header__burger" @click="toggleMobileMenu">
                                    <img :src="headerImages['list']" alt="burger">
                                </div>
                                <div class="header__basket">
                                    <a href="/cart" class="header__basket-link">
                                        <img 
                                            :src="headerImages['basket']" 
                                            alt="basket" 
                                            class="svg-icon svg-icon--star"
                                            width="24" 
                                            height="24"
                                            loading="lazy"
                                        >
                                    </a>
                                </div>
                            </div>
                            <nav class="header__mobile-menu-nav"
                                :class="{ active: isMobileMenuOpen }"
                            >
                                <div class="header__mobile-close" @click="closeMobileMenu">
                                    <img :src="headerImages['close']" alt="Закрыть">
                                </div>
                                <ul class="header__list-mobile list-unstyled d-flex mb-0">
                                    <li class="header__mobile-item">
                                        <a href="/reproductions" class="header__mobile-link">Репродукции</a>
                                    </li>
                                    <li class="header__mobile-item">
                                        <a href="/new" class="header__mobile-link">Новинки</a>
                                    </li>
                                    <li class="header__mobile-item">
                                        <a href="/about" class="header__mobile-link">О нас</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header__overlay"
                :class="{ active: isMobileMenuOpen }"
                @click="closeMobileMenu"
            ></div>
        </div>

    </header>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    isReproductionsActive: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['tab-change'])

const setActiveTab = (tabName) => {
    emit('tab-change', tabName)
}

// Состояние мобильного меню
const isMobileMenuOpen = ref(false)

// Переключение меню
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Открытие мобильного меню
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden' // Блокируем скролл
}

// Закрытие мобильного меню
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = '' // Восстанавливаем скролл
}

// Автоматически импортируем все изображения из папки
const images = import.meta.glob('@/assets/images/header/*.{png,svg,jpg,jpeg}', { eager: true })

// Преобразуем в объект с именами
const headerImages = Object.fromEntries(
  Object.entries(images).map(([key, value]) => {
    const filename = key.split('/').pop().replace(/\.\w+$/, '') // например, "favicon-house"
    return [filename, value.default]
  })
)
</script>

<style scoped>
 .header {
    margin: 0 auto;
 }

 .header--reproductions {
    margin-bottom: 50px;
 }
</style>
