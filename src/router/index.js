import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/Auth/Login'
  },
  {
    path: '/Auth/Login',
    component: () => import ('../views/Auth/LoginPage.vue')
  },
  {
    path: '/home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
