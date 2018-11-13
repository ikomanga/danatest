import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/webtask/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
