import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/front/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/front/CartView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/front/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/front/ProductView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/front/OrderView.vue')
    },
    {
      path: '/checkout/:oderId',
      name: 'checkout',
      component: () => import('@/views/front/CheckoutView.vue')
    },
    {
      path: '/:path(.*)*',
      name: "notFound",
      component: () => import("@/views/front/NotFound.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})


export default router
