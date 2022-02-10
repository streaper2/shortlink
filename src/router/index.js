import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LinkDetails from '../views/LinkDetails.vue'
import AllLinks from '../views/AllLinks.vue'
import Redirect from '../views/Redirect.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allLinks',
    name: 'AllLinks',
    component: AllLinks
  },
  {
    path: '/linkDetails/',
    name: 'LinkDetails',
    component: LinkDetails
  },
  {
    path: '/linkDetails/:id?',
    name: 'LinkDetails',
    component: LinkDetails
  },
  {
    path: '/:id',
    name: 'Redirect',
    component: Redirect,
   
  },
]

const router = createRouter({
  history: createWebHistory(),

  routes
})

export default router
