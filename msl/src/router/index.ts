import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/services', component: ServicesView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView }
  ]
})

export default router
