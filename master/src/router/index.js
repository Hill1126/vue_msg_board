import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notfound',
    name: 'found',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/myMsg',
    name: 'myMsg',
    component: () => import('../views/MyMsg.vue')
  },
  {
    path: '/myReply',
    name: 'myReply',
    component: () => import('../views/MyReply.vue')
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person.vue')
  },
  {
    path: '*',
    name: 'notfound',
    redirect: '/notfound',
  }
]

const router = new VueRouter({
  routes
})

export default router
