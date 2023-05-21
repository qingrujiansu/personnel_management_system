import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalManagementView from '../views/PersonalManagementView/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personal-management',
      name: 'personalManagement',
      component: PersonalManagementView,
      children: [
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/PersonalManagementView/SearchView.vue')
        },
        {
          path: '/information-management',
          name: 'informationManagement',
          component: () => import('../views/PersonalManagementView/InformationManagementView.vue')
        },
      ]
    },
    {
      path: '/employee-self-service',
      name: 'employeeSelfService',
      component: () => import('../views/EmployeeSelfServiceView.vue')
    },
    {
      path: '/personal-center',
      name: 'personalCenter',
      component: () => import('../views/PersonalCenterView.vue')
    }
  ]
})

export default router
