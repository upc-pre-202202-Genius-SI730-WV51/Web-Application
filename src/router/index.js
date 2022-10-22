
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      redirect: '/home'
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("../parking/pages/user-profile.component.vue")
    },
    {
      path: '/parkingList',
      name: 'parkingList',
      component: () => import("../parking/pages/park-list.component.vue")
    }
  ]
})

export default router


//user-profile.component
