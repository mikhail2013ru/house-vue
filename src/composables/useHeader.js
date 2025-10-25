import { ref, computed, watch, nextTick } from 'vue'
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

    // const headerClassModifier = computed(() => {
    //     console.log(activeTab.value);        
        
    //     if (activeTab.value === 'new' || activeTab.value === 'about' || isCartOpen.value) {
    //       return 'header--offset'
    //     }
    //     // Для 'reproductions' и 'default' класс не добавляется, padding-right будет 0
    //     return ''
    // })

    // watch([headerClassModifier, isCartOpen, activeTab], () => {
    //     nextTick(() => {
    //         const headerElement = document.querySelector('.header');
    //         if (headerElement) {
    //             if (headerClassModifier.value) {
    //                 headerElement.classList.add('header--offset');
    //             } else {
    //                 headerElement.classList.remove('header--offset');
    //             }
    //         }
    //     });
    // });

    // --- Логика корзины ---    
    const openCart = () => {
        isBasketFocused.value = false
        isCartOpen.value = true
        document.body.style.overflow = 'hidden'

        console.log(activeTab.value);
        
        
        if (activeTab.value === 'reproductions' || activeTab.value === 'default') {
            document.body.style.paddingRight = '16px'
        }

        // const catalogSection = document.querySelector('.catalog');

        // if (activeTab.value === 'new' && catalogSection) {
        //     document.body.style.paddingRight = '0'
        //     console.log(`activeTab.value === 'new'`);
            
        // }
    }

    const closeCart = () => {
        isCartOpen.value = false
        document.body.style.overflow = ''
        const catalogSection = document.querySelector('.catalog');
        
        if (activeTab.value === 'reproductions' || activeTab.value === 'default') {
            document.body.style.paddingRight = '0'
        }

        // if (activeTab.value === 'new' && catalogSection) {
        //     document.body.style.paddingRight = '16px'
        //     console.log(`closed modal`);            
        // }

        // if (activeTab.value === 'new' && document.body.style.paddingRight === '16px') {
        //     document.body.style.paddingRight = '0px'
        //     console.log(`activeTab.value === 'new' and document.body.style.paddingRight === '0px'`);
            
        // }

        // if (activeTab.value === 'new' && document.body.style.paddingRight === '32px') {
        //     document.body.style.paddingRight = '16px'
        //     // console.log(`activeTab.value === 'new' and document.body.style.paddingRight === '16px'`);
            
        // }

        // if (activeTab.value === 'new') {
        //     document.body.style.paddingRight = '0px'
        // }
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
    }

    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false
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
        // ✅ меняем вкладку (рендерим контент)
        activeTab.value = tabName    
        
        // ✅ Управление padding-right у body в зависимости от вкладки
        if (tabName === 'new' || tabName === 'about') {
            document.body.style.paddingRight = '16px';
        } else if (tabName === 'reproductions' || tabName === 'default') {
            document.body.style.paddingRight = '0px'; // или ''
        }
        
        // ✅ Потом скроллим
        if (['new', 'about', 'reproductions'].includes(tabName)) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }      
        // ✅ Эмитим событие
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