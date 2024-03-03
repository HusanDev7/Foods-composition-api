import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/meal/:id',
      name: 'meal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/MealAboutPage.vue')
    },
    {
      path: "/category/:category",
      name: "category",
      component: () => import("@/pages/CategoryPage.vue")
    },
    {
      path: "/favourite/",
      name: "favourite",
      component: () => import("@/pages/FavouritePage.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/pages/NotFoundPage.vue")
    }
  ]
})

export default router
