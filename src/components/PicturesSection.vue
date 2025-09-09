<template>
    <section class="pictures">
            <div class="container container__pictures--lg">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-flex justify-content-end col-md-6 justify-content-start col-sm-5 d-none d-sm-flex">
                        <figure class="pictures__image">
                            <img src="@/assets/images/pictures/pictures-bird.png" alt="pictures-bird" loading="lazy" class="img-fluid">
                        </figure>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-7 col-12">
                        <article class="pictures__card">
                            <h2 class="pictures__title">
                                Реплики картин от <span class="pictures__title--green">Ink. House</span>
                            </h2>
                            <div class="pictures__describe">
                                Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
                            </div>
                            <a href="/products" class="pictures__button">Продукция</a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'PicturesSection'
}
</script>