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

    const headerClassModifier = computed(() => {
        console.log(activeTab.value);        
        
        if (activeTab.value === 'new' || activeTab.value === 'about' || isCartOpen.value) {
          return 'header--offset'
        }
        // Для 'reproductions' и 'default' класс не добавляется, padding-right будет 0
        return ''
    })

    watch([headerClassModifier, isCartOpen, activeTab], () => {
        nextTick(() => {
            const headerElement = document.querySelector('.header');
            if (headerElement) {
                if (headerClassModifier.value) {
                    headerElement.classList.add('header--offset');
                } else {
                    headerElement.classList.remove('header--offset');
                }
            }
        });
    });

    // const areCartPaddingSectionsPresent = () => {
    //     // Проверяем наличие всех трех обязательных элементов
    //     // Убедись, что эти классы/селекторы соответствуют корневым элементам твоих секций
    //     const catalogElement = document.querySelector('.catalog'); // или .catalog-section?
        
    //     return Boolean(catalogElement && picturesElement && promoElement);
    // };
    
    // --- Логика корзины ---    
    const openCart = () => {
        isBasketFocused.value = false
        isCartOpen.value = true
        document.body.style.overflow = 'hidden'
        // document.body.style.paddingRight = '16px'
        
        const catalogSection = document.querySelector('.catalog');
        const picturesSection = document.querySelector('.pictures'); // или .pictures-section?
        const promoSection = document.querySelector('.promo'); // или .promo-section?
        // console.log(catalogSection);

        if (catalogSection && picturesSection && promoSection) {
            // Если секция найдена, добавляем padding-right
            document.body.style.paddingRight = '16px';
            console.log('🟢 Padding added to body because .catalog exists'); // Для отладки
        } else {
            // Если секции нет, убедимся, что padding-right не установлен
            // (на случай, если секция появилась/исчезла динамически)
            document.body.style.paddingRight = '';
            console.log('🟡 .catalog section not found, padding NOT added'); // Для отладки
        }
        
        if (catalogSection) {
            // Если секция найдена, добавляем padding-right
            document.body.style.paddingRight = '16px';
            console.log('🟢 Padding added to body because .catalog exists'); // Для отладки
        } else {
            // Если секции нет, убедимся, что padding-right не установлен
            // (на случай, если секция появилась/исчезла динамически)
            document.body.style.paddingRight = '';
            console.log('🟡 .catalog section not found, padding NOT added'); // Для отладки
        }

        // ✅ Проверяем наличие секций перед добавлением padding-right
        // if (areCartPaddingSectionsPresent()) {
        //     document.body.style.paddingRight = '16px';
        //     // console.log('🟢 Padding added to body');
            
        //     // document.body.style.paddingRight = '16px';
        // } else {
        //     // Если секции отсутствуют, убедимся, что padding-right не установлен
        //     document.body.style.paddingRight = ''; // или '0px'
        //     // console.log('🟡 Sections not found, padding NOT added to body');
        // }

        nextTick(() => {
            const headerElement = document.querySelector('.header');
            if (headerElement) {
                // headerElement.style.paddingRight = '0px';
                // Опционально: добавим класс-маркер, если нужно для стилей
                // headerElement.classList.add('header--cart-open');
            }
        });
        // const scrollbarWidth = getScrollbarWidth()
        // document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const closeCart = () => {
        isCartOpen.value = false
        document.body.style.overflow = ''
        document.body.style.paddingRight = '' // ✅ сброс

        // if (catalogSection) {
        //     // Если секция найдена, добавляем padding-right
        //     document.body.style.paddingRight = '';
        //     // console.log('🟢 Padding added to body because .catalog exists'); // Для отладки
        // }

        nextTick(() => {
            const headerElement = document.querySelector('.header');
            if (headerElement) {
                // headerElement.style.paddingRight = ''; // Или '' чтобы удалить инлайновый стиль
                // Опционально: убираем класс-маркер
                // headerElement.classList.remove('header--cart-open');
            }
        });
        // isCompensated = false // ✅ сброс флага
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
        // document.body.style.overflow = 'hidden'
        // const scrollbarWidth = getScrollbarWidth()
        // document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false
        // document.body.style.overflow = ''
        // document.body.style.paddingRight = '' // ✅ сброс
        // isCompensated = false // ✅ сброс флага
    }

    const updateActiveTab = (payload) => {
        if (typeof payload === 'string') {
            activeTab.value = payload
        } else if (typeof payload === 'object' && payload !== null) {
            activeTab.value = payload.tabName
            if (payload.shouldScroll) {
                // compensateScrollbarOnScroll()
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    // --- Логика вкладок ---
    const setActiveTab = (tabName) => {
        // ✅ Сначала компенсируем скроллбар
        // if (tabName === 'new' || tabName === 'about') {
        //   compensateScrollbarOnScroll()
        // }
      
        // ✅ Потом меняем вкладку (рендерим контент)
        activeTab.value = tabName
      
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
        // compensateScrollbarOnScroll()
    }

    // --- Вспомогательные функции ---
    const getImagePath = (imageName) => {
        return new URL(`../assets/images/catalog/${imageName}.jpg`, import.meta.url).href
    }

    // const getScrollbarWidth = () => {
    //     return window.innerWidth - document.documentElement.clientWidth
    // }

    // let isCompensated = false // ✅ флаг, чтобы не компенсировать дважды

    // const compensateScrollbarOnScroll = () => {
    //     if (isCompensated) return // ✅ уже компенсировано

    //     const scrollbarWidth = getScrollbarWidth()
    //     document.body.style.paddingRight = `${scrollbarWidth}px`
    //     isCompensated = true

    //     // ✅ Убираем компенсацию только при следующем рендере или через долгое время
    //     requestAnimationFrame(() => {
    //         // Можно оставить padding-right навсегда, или убрать через таймаут
    //         // Для теста — оставим навсегда
    //         // setTimeout(() => {
    //         //   document.body.style.paddingRight = ''
    //         //   isCompensated = false
    //         // }, 2000) // 2 секунды — для теста
    //     })
    // }

    // const isScrollbarVisible = () => {
    //     return window.innerWidth > document.documentElement.clientWidth
    // }

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
        headerClassModifier,

        // Вспомогательные
        getImagePath,
        headerImages,
        // getScrollbarWidth,
    }
}