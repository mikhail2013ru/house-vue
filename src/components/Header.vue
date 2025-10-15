<template>
    <header class="header" :class="{ 'header--reproductions': isReproductionsActive }">
        <div class="container" style="max-width: 1110px;">
            <div class="row align-items-center">
                <div class="col">
                    <div class="header__wrap d-none d-sm-flex">
                        <a href="#" @click.prevent="setActiveTab('default')" class="header__logo d-flex align-items-center text-decoration-none">
                            <img :src="headerImages['favicon-house']" alt="Ink. House" loading="lazy">
                            <span class="header__logo-text">Ink. House</span>
                        </a>

                        <nav class="header__nav">
                            <ul class="header__list list-unstyled d-flex mb-0">
                                <li class="header__list-item">
                                    <a href="#" class="header__list-link" @click.prevent="setActiveTab('reproductions')">Репродукции</a>
                                </li>
                                <li class="header__list-item">
                                    <a href="#" class="header__list-link" @click.prevent="setActiveTab('new')">Новинки</a>
                                </li>
                                <li class="header__list-item">
                                    <a href="#" class="header__list-link" @click.prevent="setActiveTab('about')">О нас</a>
                                </li>
                            </ul>
                            <div class="header__basket">
                              <!-- src="@/assets/images/catalog/catalog-procedure.jpg" alt="catalog-procedure" -->
                                <a href="#" class="header__basket-link">
                                    <img 
                                        src="@/assets/images/header/basket.svg" 
                                        alt="basket" 
                                        class="svg-icon svg-icon--star"
                                        width="24" 
                                        height="24"
                                        loading="lazy"
                                        type="button"
                                        @click="openCart"
                                    >
                                    <span v-if="cartTotalItems() > 0" class="header__basket-count">
                                      ({{ cartTotalItems() }})
                                    </span>
                                </a>

                                <!-- <button 
                                    class="header__basket-button" 
                                    type="button"
                                    @click="openCart"
                                >

                                <span v-if="cartTotalItems() > 0" class="header__basket-count">
                                    ({{ cartTotalItems() }})
                                </span>
                                </button> -->
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="header__mobile-menu d-flex d-sm-none">
                        <a href="#" class="header__logo-mobile" @click.prevent="setActiveTabAndClose('default')">
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
                                        <a href="#" class="header__mobile-link" @click.prevent="setActiveTabAndClose('reproductions')">Репродукции</a>
                                    </li>
                                    <li class="header__mobile-item">
                                        <a href="#" class="header__mobile-link" @click.prevent="setActiveTabAndClose('new')">Новинки</a>
                                    </li>
                                    <li class="header__mobile-item">
                                        <a href="#" class="header__mobile-link" @click.prevent="setActiveTabAndClose('about')">О нас</a>
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

            <!-- Модальное окно корзины -->
        <div v-if="isCartOpen" class="modal-overlay" @click="closeCart">
            <div class="modal-cart" @click.stop>
                <div class="modal-cart__header">
                <h2>Корзина</h2>
                <button class="modal-cart__close" @click="closeCart">&times;</button>
                </div>

                <div v-if="cartItems.length === 0" class="modal-cart__empty">
                Корзина пуста
                </div>

                <div v-else>
                <div class="modal-cart__item" v-for="item in cartItems" :key="item.id">
                    <div>
                      <img 
                        :src="getImagePath(item.image)"
                        :alt="item.name" 
                        class="modal-cart__cart-image"
                      >
                      <h3>{{ item.name }}</h3>
                      <p>{{ item.author }}</p>
                      <strong>{{ (item.price * item.quantity).toLocaleString('ru-RU') }} руб</strong>
                    </div>
                    <div class="modal-cart__controls">
                      <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
                      <span>{{ item.quantity }}</span>
                      <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
                      <button @click="removeFromCart(item.id)" class="modal-cart__remove">✕</button>
                    </div>
                </div>

                <div class="modal-cart__total">
                    <strong>Итого: {{ total.toLocaleString('ru-RU') }} руб</strong>
                </div>

                <button class="modal-cart__checkout" @click="handleCheckout">
                    Оформить заказ
                </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { products } from '@/data/products.js'
import { 
  cart, 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  cartTotalItems 
} from '@/stores/cart.js'
// import { addToCart } from '@/stores/cart.js'

const getImagePath = (imageName) => {
    return new URL(`../assets/images/catalog/${imageName}.jpg`, import.meta.url).href
}

// Состояние модального окна
const isCartOpen = ref(false)
// console.log(isCartOpen);


const openCart = () => {
  isCartOpen.value = true
}

const closeCart = () => {
  isCartOpen.value = false
}

// Данные для корзины
const cartItems = computed(() => {
  return cart.value.map(item => {
    const product = products.find(p => p.id === item.id)
    return { ...item, ...product }
  })
})

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

// Обработка оформления заказа
const handleCheckout = () => {
  alert('Заказ оформлен! (В реальном проекте здесь был бы запрос на сервер)')
  cart.value = [] // очистить корзину
  closeCart()
}

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

const setActiveTabAndClose = (tabName) => {
    setActiveTab(tabName)
    closeMobileMenu()
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

 /* Стили для корзины */
.header__basket-button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 1000;
}

.modal-cart {
  background: white;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 8px;
  padding: 1.5rem;
}

.modal-cart__cart-image {
  max-width: 250px;
  max-height: 250px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.modal-cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-cart__close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-cart__item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.modal-cart__controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-cart__controls button {
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.modal-cart__remove {
  color: red;
  font-weight: bold;
}

.modal-cart__total {
  margin: 1.5rem 0;
  font-size: 1.2rem;
}

.modal-cart__checkout {
  width: 100%;
  padding: 0.75rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.header__basket-count {
  margin-left: 4px;
  font-size: 0.85rem;
  color: #e74c3c;
}

@media (max-width: 480px) {
  .modal-cart__item-image {
    max-width: 250px;
    max-height: 250px;
    width: auto;
    height: auto;
  }
}
</style>
