import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingInView from '../views/SingInView.vue'
import SingUpView from '../views/SingUpView.vue'
import ProfileView from '../views/ProfileView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sing-in',
      name: 'sing-in',
      component: SingInView,
    },
    {
      path: '/sing-up',
      name: 'sing-up',
      component: SingUpView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePasswordView,
    },
  ],
})

export default router
