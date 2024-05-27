import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import { useAuthStore } from '@/store/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/login-with-email',
    name: 'LoginWithEmail',
    component: () => import('@/views/LoginWithEmailPage.vue')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: () => import('@/views/SignupPage.vue')
  },
  {
    path: '/confirm-code',
    name: 'ConfirmCode',
    component: () => import('@/views/ConfirmCodePage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'like',
        name: 'Like',
        component: () => import('@/views/LikePage.vue')
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/MessagePage.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const notAuthenticated = !authStore.isAuthenticated
  const authRoutes = ['Login', 'Signup', 'ConfirmCode','LoginWithEmail']

  if (typeof to.name === 'string') {
    console.log(`Não autenticado: ${notAuthenticated}`)
    if (notAuthenticated && !authRoutes.includes(to.name)) {
      next({ name: "Login" })
    } else if (authStore.isAuthenticated && authRoutes.includes(to.name)) {
      next({ name: "Home" })
    } else {
      next()
    }
  } else {
    console.warn(to.name)
    next({ name: 'Login' })
  }
})

export default router
