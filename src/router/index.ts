import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import { Routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.Home,
      name: 'home',
      component: HomeView
    },
    {
      path: Routes.About,
      name: 'about',
      component: () => import('../views/AboutView/AboutView.vue')
    },
    {
      path: Routes.Quiz,
      name: 'quiz',
      component: () => import('@/views/DepressionTest/DepressionTestView.vue')
    },
    {
      path: Routes.Results,
      name: 'results',
      component: () => import('@/views/TestResultsView/TestResultsView.vue')
    }
  ]
})

export default router
