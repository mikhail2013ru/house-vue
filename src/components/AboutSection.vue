<template>
    <section class="about">
        <div class="container" style="max-width: 1110px;">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 col-md-12">
                    <figure class="about__image-wrap">
                        <img src="@/assets/images/about/about-picture.png" alt="about-picture" class="about__image">
                    </figure>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12">
                    <div class="about__block">
                        <h3 class="about__title">Наша команда</h3>
                        <p class="about__description">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                        <div class="about__team d-flex align-items-center">
                            <div class="about__team-member">
                                <img src="@/assets/images/about/about-our-team-1.png" alt="Член команды 1" class="img-fluid">
                            </div>
                            <div class="about__team-member">
                                <img src="@/assets/images/about/about-our-team-2.jpg" alt="Член команды 2" class="img-fluid">
                            </div>
                            <div class="about__team-member">
                                <img src="@/assets/images/about/about-our-team-3.jpg" alt="Член команды 3" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>