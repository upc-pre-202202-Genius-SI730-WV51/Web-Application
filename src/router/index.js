
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
      path: '/profile',
      name: 'profile',
      component: () => import("../parking/pages/user-login.component.vue")
    },
    {
      path: '/parking',
      name: 'parking',
      component: () => import("../parking/pages/park-list.component.vue")

    },
    {
    path:'/UserProfile',
    name: 'login',
    component:()=>import("../parking/pages/user-profile-home.component.vue")
    }
  ]
})

export default router

