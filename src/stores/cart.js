// src/stores/cart.js
import { ref, watch } from 'vue'

// 🔹 1. Загружаем сохранённую корзину из localStorage (если есть)
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  } catch (e) {
    console.warn('Не удалось загрузить корзину из localStorage:', e)
    return []
  }
}

// 🔹 2. Создаём реактивную корзину с начальным значением из localStorage
const cart = ref(loadCartFromStorage())

// 🔹 3. Автоматически сохраняем в localStorage при любом изменении
watch(cart, (newCart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(newCart))
  } catch (e) {
    console.error('Не удалось сохранить корзину в localStorage:', e)
  }
}, { deep: true })

const addToCart = (productId) => {
  const item = cart.value.find(item => item.id === productId)
  if (item) {
    item.quantity += 1
  } else {
    cart.value.push({ id: productId, quantity: 1 })
  }
}

const removeFromCart = (productId) => {
  cart.value = cart.value.filter(item => item.id !== productId)
}

const updateQuantity = (productId, quantity) => {
  if (quantity < 1) {
    removeFromCart(productId)
    return
  }
  const item = cart.value.find(item => item.id === productId)
  if (item) {
    item.quantity = quantity
  }
}

const cartTotalItems = () => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
}

export {
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotalItems
}