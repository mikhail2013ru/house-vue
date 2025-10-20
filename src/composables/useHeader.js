import { ref, computed } from 'vue'
import { products } from '@/data/products.js'
import {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotalItems
} from '@/stores/cart.js'

export function useHeader(emit) {

    // --- Состояния ---
    const isCartOpen = ref(false)
    const isBasketHovered = ref(false)
    const isBasketFocused = ref(false)
    const isMobileMenuOpen = ref(false)

    // --- Состояния для других вкладок ---
    const activeTab = ref('default')
    const activeCountry = ref('Франция')

    // --- Логика корзины ---
    const openCart = () => {
        isBasketFocused.value = false
        isCartOpen.value = true
    }

    const closeCart = () => {
        isCartOpen.value = false
    }

    const cartStatus = computed(() => {
        if (isBasketFocused.value) return 'focus'
        if (isBasketHovered.value) return 'hover'
        const count = cartTotalItems()
        if (count === 0) return 'empty'
        if (isCartOpen.value) return 'active'
        return 'filled'
    })

    const getBasketIconSrc = () => {
        try {
            const basePath = '/src/assets/images/header/'
            let fileName
            switch (cartStatus.value) {
                case 'empty': fileName = 'basket.svg'; break
                case 'filled': fileName = 'basket-active.svg'; break
                case 'focus': fileName = 'basket-focus.svg'; break
                case 'hover': fileName = 'basket-hover.svg'; break
                default: fileName = 'basket.svg'
            }
            const fullPath = new URL(basePath + fileName, import.meta.url).href
            return fullPath
        } catch (error) {
            console.error('❌ Error:', error)
            return ''
        }
    }

    // --- Данные для корзины ---
    const cartItems = computed(() => {
        return cart.value.map(item => {
            const product = products.find(p => p.id === item.id)
            return { ...item, ...product }
        })
    })

    const total = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    })

    const handleCheckout = () => {
        alert('Заказ оформлен!')
        cart.value = []
        closeCart()
    }

    // --- Логика мобильного меню ---
    const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const openMobileMenu = () => {
        isMobileMenuOpen.value = true
        document.body.style.overflow = 'hidden'
    }

    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false
        document.body.style.overflow = ''
    }

    const updateActiveTab = (payload) => {
        if (typeof payload === 'string') {
            activeTab.value = payload
        } else if (typeof payload === 'object' && payload !== null) {
            activeTab.value = payload.tabName
            if (payload.shouldScroll) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    // --- Логика вкладок ---
    const setActiveTab = (tabName) => {
        activeTab.value = tabName
        if (emit) {
            emit('tab-change', tabName)
        }
    }

    const setActiveTabAndClose = (tabName) => {
        setActiveTab(tabName)
        closeMobileMenu()
    }

    // --- Логика каталога ---
    const setActiveCountryFromFooter = (country) => {
        activeCountry.value = country
        activeTab.value = 'reproductions'
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // --- Вспомогательные функции ---
    const getImagePath = (imageName) => {
        return new URL(`../assets/images/catalog/${imageName}.jpg`, import.meta.url).href
    }

    // --- Изображения ---
    const images = import.meta.glob('@/assets/images/header/*.{png,svg,jpg,jpeg}', { eager: true })
    const headerImages = Object.fromEntries(
        Object.entries(images).map(([key, value]) => {
            const filename = key.split('/').pop().replace(/\.\w+$/, '')
            return [filename, value.default]
        })
    )

    // --- Возвращаем всё, что нужно в компоненте ---
    return {
        updateActiveTab,
        // Состояния
        isCartOpen,
        isBasketHovered,
        isBasketFocused,
        isMobileMenuOpen,
        activeTab,
        activeCountry,

        // Методы
        openCart,
        closeCart,
        toggleMobileMenu,
        openMobileMenu,
        closeMobileMenu,
        setActiveTab,
        setActiveTabAndClose,
        setActiveCountryFromFooter,
        handleCheckout,

        // Вычисляемые свойства
        cartStatus,
        cartItems,
        total,
        cartTotalItems,
        getBasketIconSrc,

        // Вспомогательные
        getImagePath,
        headerImages,
    }
}