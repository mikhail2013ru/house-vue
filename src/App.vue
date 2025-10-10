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

  const activeTab = ref('default')

  const updateActiveTab = (tabName) => {
    activeTab.value = tabName
  }

</script>

<template>
  <Header :isReproductionsActive="activeTab === 'reproductions'" @tab-change="updateActiveTab" />
    <main>
      <PicturesSection v-if="activeTab === 'default'" />
      <CatalogSection v-if="activeTab === 'reproductions' || activeTab === 'default'" />
      <PromoSection v-if="activeTab === 'new' || activeTab === 'default'" />
      <AboutSection v-if="activeTab === 'about'" />
    </main>
  <Footer />
</template>

<style scoped>
  
</style>
