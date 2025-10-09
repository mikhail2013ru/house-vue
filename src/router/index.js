import { createRouter, createWebHistory } from 'vue-router'
import Reproductions from '@/views/Reproductions.vue'
import New from '@/views/New.vue'
import About from '@/views/About.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  { path: '/reproductions', component: Reproductions },
  { path: '/new', component: New },
  { path: '/about', component: About },
  { path: '/cart', component: Cart },
  { path: '/', redirect: '/reproductions' }, // главная страница
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router