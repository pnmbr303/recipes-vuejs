import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chicken from '../views/Chicken.vue'
import Fish from '../views/Fish.vue'
import SingleRecipe from '../views/SingleRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chicken',
    name: 'Chicken',
    component: Chicken
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: SingleRecipe
  },
  {
    path: '/fish',
    name: 'Fish',
    component: Fish
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
