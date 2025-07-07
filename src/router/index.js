import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/dashboard"
  },
  {
    path:"/dashboard",
    name: 'dashboard',
    component: DashboardView
  },
  {
    path:"/movie/:id",
    name: 'movie',
    component: MovieView
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
