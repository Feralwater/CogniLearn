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
    },
    {
      path: Routes.Contact,
      name: 'contact',
      component: () => import('@/views/ContactView/ContactView.vue')
    },
    {
      path: Routes.Login,
      name: 'login',
      component: () => import('@/views/LoginView/LoginView.vue')
    },
    {
      path: Routes.Statistics,
      name: 'statistics',
      component: () => import('@/views/StatisticsView/StatisticsView.vue')
    },
    {
      path: Routes.Reviews,
      name: 'reviews',
      component: () => import('@/views/ReviewsView/ReviewsView.vue')
    }
  ]
})

export default router
