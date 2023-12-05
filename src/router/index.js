import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AnimalView from '../views/AnimalView.vue'
import ContaView from '../views/ContaView.vue'
import ConsultasView from '../views/ConsultaView.vue'
import ClientView from '../views/ClienteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/animal',
      name: 'animal',
      component: AnimalView
    },
    {
      path: '/conta',
      name: 'conta',
      component: ContaView
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: ConsultasView
    },
    {
      path: '/client',
      name: 'client',
      component: ClientView
    },
  ]
})

export default router
