import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'
import Detail from '@/pages/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/City',
      name: 'City',
      component: City
    },{
      path: '/Detail/:id',//动态路由
      name: 'Detail',
      component: Detail
    }]
})
