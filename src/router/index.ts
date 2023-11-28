import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import { Routes } from "@/router/routes";
import { usePatientStore } from "@/stores/patient";
import { useLoginStore } from "@/stores/login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.Home,
      name: "home",
      component: HomeView
    },
    {
      path: Routes.About,
      name: "about",
      component: () => import("../views/AboutView/AboutView.vue")
    },
    {
      path: Routes.Quiz,
      name: "quiz",
      component: () => import("@/views/QuizView/QuizView.vue")
    },
    {
      path: Routes.DepressionTest,
      name: "depressionTest",
      component: () => import("@/views/DepressionTest/DepressionTestView.vue")
    },
    {
      path: Routes.Results,
      name: "results",
      component: () => import("@/views/TestResultsView/TestResultsView.vue")
    },
    {
      path: Routes.Contact,
      name: "contact",
      component: () => import("@/views/ContactView/ContactView.vue")
    },
    {
      path: Routes.Login,
      name: "login",
      component: () => import("@/views/LoginView/LoginView.vue")
    },
    {
      path: Routes.Statistics,
      name: "statistics",
      component: () => import("@/views/StatisticsView/StatisticsView.vue")
    },
    {
      path: Routes.Reviews,
      name: "reviews",
      component: () => import("@/views/ReviewsView/ReviewsView.vue")
    },
    {
      path: Routes.ReviewsId,
      name: "reviewsId",
      component: () => import("@/views/ReviewView/ReviewView.vue")
    },
    {
      path: Routes.Profile,
      name: "profile",
      component: () => import("@/views/ProfileView/ProfileView.vue"),
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to) => {
        const { isAuthenticated } = useLoginStore();

        if (to.meta.requiresAuth && !isAuthenticated) {
          return {
            name: "login"
          };
        }
      }
    }
  ]
});

export default router;
