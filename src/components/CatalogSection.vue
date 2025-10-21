<template>
    <section class="catalog">
        <div class="container" style="max-width: 1110px;">
            <div class="row align-items-center catalog__row-gap">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2 class="catalog__title">Репродукции</h2>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="catalog__tabs-container">
                        <article class="catalog__tabs-list list-unstyled" role="tablist">
                            <li 
                                v-for="country in ['Франция', 'Германия', 'Англия']" 
                                :key="country"
                                class="catalog__tab-item"
                                >
                                <a 
                                    href="#" 
                                    class="catalog__tab-link" 
                                    :class="{ 'active': props.activeCountry === country }"
                                    @click.prevent="setActiveCountry(country)"
                                >
                                    {{ country }}
                                </a>
                            </li>

                            <!-- <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Франция</a>
                            </li>
                            <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Германия</a>
                            </li>
                            <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Англия</a>
                            </li> -->
                        </article>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    v-for="product in filteredProducts"
                    :key="product.id"
                    class="col-lg-4 col-md-6 col-sm-6 col-12"
                >
                <!-- :src="`@/assets/images/catalog/${product.image}.jpg`" -->
                    <article class="catalog__cart">                        
                        <figure class="catalog__cart-art">
                        <img 
                            :src="getImagePath(product.image)"
                            :alt="product.name" 
                            class="catalog__cart-image"
                        >
                        </figure>
                        <!-- {{ console.log('Текущий продукт:', product) }} -->
                        <div class="catalog__art-author">{{ product.author }}</div>
                        <h3 class="catalog__art-name">{{ product.name }}</h3>
                        <div class="catalog__art-description">{{ product.description }}</div>
                        <div class="catalog__art-price">
                        <strong>{{ product.price.toLocaleString('ru-RU') }} руб</strong>
                        </div>
                        <button class="catalog__button" type="button" @click="addToCart(product.id)">В корзину</button>
                    </article>
                </div>
                <!-- <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-cupids-hunt.jpg" alt="catalog-cupids-hunt" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Марсель Руссо</div>
                        <h3 class="catalog__art-name">Охота Амура</h3>
                        <div class="catalog__art-description">Холст, масло (50х80) </div>
                        <div class="catalog__art-price"><strong>14 500 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-the-lady-with-the-dog.jpg" alt="catalog-the-lady-with-the-dog" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Анри Селин</div>
                        <h3 class="catalog__art-name">Дама с собачкой</h3>
                        <div class="catalog__art-description">Акрил, бумага (50х80)</div>
                        <div class="catalog__art-price"><strong>16 500 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-procedure.jpg" alt="catalog-procedure" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Франсуа Дюпон</div>
                        <h3 class="catalog__art-name">Процедура</h3>
                        <div class="catalog__art-description catalog__art-description--resize">Цветная литография (40х60)</div>
                        <div class="catalog__art-price"><strong>20 000 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-rose.jpg" alt="catalog-rose" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Луи Детуш</div>
                        <h3 class="catalog__art-name">Роза</h3>
                        <div class="catalog__art-description">Бумага, акрил (50х80)</div>
                        <div class="catalog__art-price"><strong>12 000 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-bird-meal.jpg" alt="catalog-bird-meal" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Франсуа Дюпон</div>
                        <h3 class="catalog__art-name">Птичья трапеза</h3>
                        <div class="catalog__art-description catalog__art-description--resize">Цветная литография (40х60)</div>
                        <div class="catalog__art-price"><strong>22 500 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart catalog__cart--mr-0 catalog__cart--mb-0">
                        <figure class="catalog__cart-art">
                            <img src="@/assets/images/catalog/catalog-landscape-with-fish.jpg" alt="catalog-landscape-with-fish" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Пьер Моранж</div>
                        <h3 class="catalog__art-name">Пейзаж с рыбой</h3>
                        <div class="catalog__art-description catalog__art-description--resize">Цветная литография (40х60)</div>
                        <div class="catalog__art-price"><strong>20 000 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, watch, nextTick } from 'vue'
    import { products } from '@/data/products.js'
    import { addToCart } from '@/stores/cart.js'

    // Получаем активную страну от родителя
    const props = defineProps({
        activeCountry: {
            type: String,
            default: 'Франция'
        },
        isCartOpen: { type: Boolean, default: false },
        activeTab: { type: String, required: true }
    })

    // watch(() => [props.isCartOpen, props.activeTab], ([newIsOpen, newTab]) => {
    //     nextTick(() => { // ✅ Ждём обновления DOM
    //         const catalogElement = document.querySelector('.catalog')
    //         console.log('🟢 Watcher triggered:')
    //         console.log('  isCartOpen:', newIsOpen)
    //         console.log('  activeTab:', newTab)
    //         if (catalogElement) { // ✅ Проверяем, что элемент существует
    //         if (newTab === 'reproductions') {
    //             console.log('paddingRight = 16px')
    //             catalogElement.style.paddingLeft = '16px'
    //         } else {
    //             catalogElement.style.paddingLeft = ''
    //         }
    //         }
    //     })
    // })

    // Эмитим изменения (на случай, если страна меняется внутри каталога)
    const emit = defineEmits(['update-country'])

    const setActiveCountry = (country) => {
        emit('update-country', country)
    }

    const getImagePath = (imageName) => {
        return new URL(`../assets/images/catalog/${imageName}.jpg`, import.meta.url).href
    }

    // const activeCountry = ref('Франция')

    const filteredProducts = computed(() => {
        console.log('Текущая страна:', props.activeCountry) // ← добавь это для отладки
        return products
            .filter(product => product.country === props.activeCountry)
            // .sort((a, b) => a.id - b.id) // сортировка по id
    })

    // const setActiveCountry = (country) => {
    //     activeCountry.value = country
    // }
</script>