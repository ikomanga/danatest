import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/webtask/home'
    },
    {
      path: '/webtask/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/webtask/about',
      name: 'About',
      component: About
    }
  ]
})
