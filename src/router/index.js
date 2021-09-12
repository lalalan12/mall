import { createRouter, createWebHashHistory } from 'vue-router'
import Home from 'views/home/Home.vue'
import Category from 'views/category/Category.vue'
import Cart from 'views/cart/Cart.vue'
import Profile from 'views/profile/Profile.vue'
import Detail from 'views/detail/Detail'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,//为true需要使用缓存
    }
  },
  {
    path: '/category',
    name: 'Caregory',
    component: Category,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
