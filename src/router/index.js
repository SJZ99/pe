import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../components/table.vue')
  },
  {
    path: '/submit',
    name: 'Submit',

    component: () => import('../views/Submit.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',

    component: () => import('../views/Gallery.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
