import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Beranda from '@/components/Beranda'
import ListHouse from '@/components/ListHouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Beranda
    },
    {
      path: '/list',
      component: ListHouse

    }
  ]
})
