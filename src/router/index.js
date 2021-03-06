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
    }],
    scrollBehavior (to, from, savePosition) {
    	return { x: 0, y: 0 }
    }
    /*异步组件，app.js>1M时使用
     routes: [{
      path: '/',
      name: 'Home',
      component:  () => import('@/pages/Home/Home')
    },{
      path: '/City',
      name: 'City',
      component:   () => import('@/pages/City/City')
    },{
      path: '/Detail/:id',//动态路由
      name: 'Detail',
      component:   () => import('@/pages/Detail/Detail')
    }],
    scrollBehavior (to, from, savePosition) {
    	return { x: 0, y: 0 }
    }
     * */
})
