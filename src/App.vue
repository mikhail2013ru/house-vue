<script setup>
import {
  ref
} from 'vue'

import Header from '@/components/Header.vue'
import PicturesSection from '@/components/PicturesSection.vue'
import CatalogSection from '@/components/CatalogSection.vue'
import PromoSection from '@/components/PromoSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import Footer from '@/components/Footer.vue'
import ComingSoon from './components/ComingSoon.vue'
import { useHeader } from '@/composables/useHeader.js'

const activeTab = ref('default')
const activeCountry = ref('Франция')
const showComingSoon = ref(false)

const showComingSoonPage = () => {
  showComingSoon.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const updateActiveTab = (payload) => {
  showComingSoon.value = false
  if (typeof payload === 'string') {
    activeTab.value = payload
  } else if (typeof payload === 'object' && payload !== null) {
    activeTab.value = payload.tabName
    // console.log(payload);
    if (payload.shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const setActiveCountryFromFooter = (country) => {
  showComingSoon.value = false
  // console.log('Меняю страну на:', country)
  activeCountry.value = country
  activeTab.value = 'reproductions'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const {
  isCartOpen: headerIsCartOpen, // ← переименовываем для ясности
  // ... другие свойства ...
} = useHeader()

</script>

<template>
  <div class="page-wrapper">
    <Header :isReproductionsActive="activeTab === 'reproductions'" @tab-change="updateActiveTab" />
    <main class="page-content">
      <ComingSoon v-if="showComingSoon" />  
      <template v-else>
        <PicturesSection v-if="activeTab === 'default'" @tab-change="updateActiveTab" />
        <CatalogSection 
          v-if="activeTab === 'reproductions'
          || activeTab === 'default'"
          :active-country="activeCountry"
          @update-country="activeCountry = $event" 
          :is-cart-open="headerIsCartOpen"
          :active-tab="activeTab"
          />
        <PromoSection v-if="activeTab === 'new' || activeTab === 'default'" @tab-change="updateActiveTab" />
        <!-- <PromoSection v-if="activeTab === 'reproductions' || activeTab === 'default'" /> -->
        <AboutSection v-if="activeTab === 'about' || activeTab === 'default'" />
      </template>
    </main>
    <Footer 
      @country-change="setActiveCountryFromFooter" 
      @coming-soon="showComingSoonPage"
    />
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* минимум весь экран */
}

.page-content {
  flex: 1; /* занимает всё свободное пространство */
}
</style>
