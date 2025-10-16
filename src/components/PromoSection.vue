<template>
    <section class="promo position-relative">
        <div class="promo__bg position-absolute w-100 h-100"></div>
        <div class="container position-relative" >
            <div class="row">
                <div class="col">
                    <div class="promo__wrapper">
                        <div class="promo__content-wrap">
                            <div class="promo__title-wrap d-flex align-items-center">
                                <figure class="promo__title-image">
                                    <img class="promo__image" src="@/assets/images/promo/promo-star.png" alt="">
                                </figure>
                                <h2 class="promo__title">Новая коллекция французских авторов</h2>
                            </div>
                            <div class="promo__description-wrap">
                                <p class="promo__description">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
                                <p class="promo__description">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
                            </div>
                            <a href="#" class="promo__button" @click.prevent="setActiveTab('reproductions')">Ознакомиться</a>             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script>
export default {
  name: 'PromoSection'
}
</script> -->

<script setup>
const emit = defineEmits(['tab-change'])

const setActiveTab = (tabName) => {
    emit('tab-change', { tabName, shouldScroll: true })
}
</script>