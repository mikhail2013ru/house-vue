<template>
    <footer class="footer">
        <div class="container" style="max-width: 1110px;">
            <div class="row d-none d-xl-flex">
                <div class="col-lg-4 col-md-12">
                    <div class="footer__home-block">
                        <a href="#" class="footer__home-link">
                            <img src="@/assets/images//footer/favicon-house.png" alt="favicon-house" loading="lazy" class="footer__link-img">
                            <span class="footer__logo-text">Ink. House</span>
                        </a>
                        <div class="footer__contacts">
                            <a href="tel:+79995435454" class="footer__phone-link">+7 (999) 543-54-54</a>
                            <p class="footer__art-workshop">Мастерская</p>
                        </div>
                    </div>
                </div>            
                <div class="col-lg-5 col-md-9">
                    <div class="footer__information-block d-flex">
                        <ul class="footer__information-list list-unstyled">
                            <li class="footer__list-item">
                                <h3 class="footer__list-title">Репродукции</h3>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitCountry('Франция')">Франция</a>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitCountry('Германия')">Германия</a>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitCountry('Англия')">Англия</a>
                            </li>
                        </ul>

                        <ul class="footer__information-list list-unstyled">
                            <li class="footer__list-item">
                                <h3 class="footer__list-title">Новинки</h3>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitComingSoon">2021</a>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitComingSoon">2020</a>
                            </li>
                        </ul>

                        <ul class="footer__information-list list-unstyled">
                            <li class="footer__list-item">
                                <h3 class="footer__list-title">О нас</h3>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitComingSoon">Художники</a>
                            </li>
                            <li class="footer__list-item">
                                <a href="#" class="footer__link" @click.prevent="emitComingSoon">Менеджеры</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="footer__social-block">
                        <div class="footer__social-links">
                            <div class="footer__icons-wrap">
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-facebook.svg" alt="" aria-label="footer-icon-facebook" width="24" height="24">
                                </a>
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-instagram.svg" alt="" aria-label="footer-icon-instagram" width="24" height="24">
                                </a>
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-youtube.svg" alt="" aria-label="footer-icon-youtube" width="24" height="24">
                                </a>
                            </div>
                            <p class="footer__copyrights-text">
                              <span class="footer__copyrights">Ink. House &reg;</span>
                              <span class="footer__copyrights mb-0 footer__copyrights--mr-0">All rights reserved</span>                         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row d-none d-sm-flex d-xl-none">
                <div class="col-lg-12 col-md-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer__home-block">
                                <a href="#" class="footer__home-link">
                                    <img src="@/assets/images//footer/favicon-house.png" alt="favicon-house" loading="lazy" class="footer__link-img">
                                    <span class="footer__logo-text">Ink. House</span>
                                </a>
                                <div class="footer__contacts">
                                    <a href="tel:+79995435454" class="footer__phone-link">+7 (999) 543-54-54</a>
                                    <p class="footer__art-workshop">Мастерская</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="footer__block-wrap">
                                <div class="footer__information-block d-flex">
                                    <ul class="footer__information-list list-unstyled">
                                        <li class="footer__list-item">
                                            <h3 class="footer__list-title">Репродукции</h3>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitCountry('Франция')">Франция</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitCountry('Германия')">Германия</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitCountry('Англия')">Англия</a>
                                        </li>
                                    </ul>
            
                                    <ul class="footer__information-list list-unstyled">
                                        <li class="footer__list-item">
                                            <h3 class="footer__list-title">Новинки</h3>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">2021</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">2020</a>
                                        </li>
                                    </ul>
            
                                    <ul class="footer__information-list list-unstyled">
                                        <li class="footer__list-item">
                                            <h3 class="footer__list-title">О нас</h3>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">Художники</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">Менеджеры</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__contacts-wrap">
                                    <div class="footer__social-block-wrap">
                                        <div class="footer__social-block">
                                            <div class="footer__social-links">
                                                <div class="footer__icons-wrap">
                                                    <a href="#" class="footer__icons-link">
                                                        <img src="@/assets/images//footer/footer-icon-facebook.svg" alt="" aria-label="footer-icon-facebook" width="24" height="24">
                                                    </a>
                                                    <a href="#" class="footer__icons-link">
                                                        <img src="@/assets/images//footer/footer-icon-instagram.svg" alt="" aria-label="footer-icon-instagram" width="24" height="24">
                                                    </a>
                                                    <a href="#" class="footer__icons-link">
                                                        <img src="@/assets/images//footer/footer-icon-youtube.svg" alt="" aria-label="footer-icon-youtube" width="24" height="24">
                                                    </a>
                                                </div>
                                                <p class="footer__copyrights-text">
                                                    <span class="footer__copyrights">Ink. House &reg;</span>
                                                    <span class="footer__copyrights mb-0 footer__copyrights--mr-0">All rights reserved</span>                         
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
            
            <div class="row d-flex d-sm-none">
                <div class="col-lg-4 col-md-12">
                    <div class="footer__home-block">
                        <a href="#" class="footer__home-link">
                            <img src="@assets/images/footer/favicon-house.png" alt="favicon-house" loading="lazy" class="footer__link-img">
                            <span class="footer__logo-text">Ink. House</span>
                        </a>
                    </div>
                </div>            
                <div class="col-7">
                    <div class="footer__information-block d-flex">
                        <div class="footer__contacts">
                            <a href="tel:+79995435454" class="footer__phone-link">+7 (999) 543-54-54</a>
                            <p class="footer__art-workshop">Мастерская</p>
                        </div>
                    </div> 
                </div> 
                <div class="col-5">
                    <ul class="footer__information-list list-unstyled">
                        <li class="footer__list-item">
                            <h3 class="footer__list-title">Репродукции</h3>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitCountry('Франция')">Франция</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitCountry('Германия')">Германия</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitCountry('Англия')">Англия</a>
                        </li>
                    </ul>
                </div>
                <div class="col-7">
                    <ul class="footer__information-list list-unstyled">
                        <li class="footer__list-item">
                            <h3 class="footer__list-title">Новинки</h3>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">2021</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">2020</a>
                        </li>
                    </ul>
                </div>
                <div class="col-5">
                    <ul class="footer__information-list list-unstyled">
                        <li class="footer__list-item">
                            <h3 class="footer__list-title">О нас</h3>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">Художники</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="#" class="footer__link" @click.prevent="emitComingSoon">Менеджеры</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="footer__social-block">
                        <div class="footer__social-links">
                            <div class="footer__icons-wrap">
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-facebook.svg" alt="" aria-label="footer-icon-facebook" width="24" height="24">
                                </a>
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-instagram.svg" alt="" aria-label="footer-icon-instagram" width="24" height="24">
                                </a>
                                <a href="#" class="footer__icons-link">
                                    <img src="@/assets/images//footer/footer-icon-youtube.svg" alt="" aria-label="footer-icon-youtube" width="24" height="24">
                                </a>
                            </div>
                            <p class="footer__copyrights-text">
                              <span class="footer__copyrights">Ink. House &reg;</span>
                              <span class="footer__copyrights mb-0 footer__copyrights--mr-0">All rights reserved</span>                         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const emit = defineEmits(['country-change', 'coming-soon'])

    const emitCountry = (country) => {
        console.log('Footer эмитит:', country)
        emit('country-change', country)
    }

    const emitComingSoon = () => {
        emit('coming-soon')
    }
</script>