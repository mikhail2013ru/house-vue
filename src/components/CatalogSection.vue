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
                            <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Франция</a>
                            </li>
                            <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Германия</a>
                            </li>
                            <li class="catalog__tab-item">
                                <a href="#" class="catalog__tab-link" role="tab">Англия</a>
                            </li>
                        </article>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <article class="catalog__cart">
                        <figure class="catalog__cart-art">
                            <img :src="catalogImages['catalog-cupids-hunt']" alt="catalog-cupids-hunt" class="catalog__cart-image">
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
                            <img :src="catalogImages['catalog-the-lady-with-the-dog']" alt="catalog-the-lady-with-the-dog" class="catalog__cart-image">
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
                            <img :src="catalogImages['catalog-procedure']" alt="catalog-procedure" class="catalog__cart-image">
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
                            <img :src="catalogImages['catalog-rose']" alt="catalog-rose" class="catalog__cart-image">
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
                            <img :src="catalogImages['catalog-bird-meal']" alt="catalog-bird-meal" class="catalog__cart-image">
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
                            <img :src="catalogImages['catalog-landscape-with-fish']" alt="catalog-landscape-with-fish" class="catalog__cart-image">
                        </figure>
                        <div class="catalog__art-author">Пьер Моранж</div>
                        <h3 class="catalog__art-name">Пейзаж с рыбой</h3>
                        <div class="catalog__art-description catalog__art-description--resize">Цветная литография (40х60)</div>
                        <div class="catalog__art-price"><strong>20 000 руб</strong></div>
                        <button class="catalog__button" type="button">В корзину</button>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CatalogSection'
    }
</script>

<script setup>
    // Автоматически импортируем все изображения из папки
    const images =
        import.meta.glob('@/assets/images/catalog/*.{png,svg,jpg,jpeg}', {
            eager: true
        })
    // Преобразуем в объект с именами
    const catalogImages = Object.fromEntries(
        Object.entries(images).map(([key, value]) => {
            const filename = key.split('/').pop().replace(/\.\w+$/, '')
            return [filename, value.default]
        })
    )
</script>