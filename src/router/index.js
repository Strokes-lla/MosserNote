import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/home'),
    },

    //ECMAScript6
    {
      path: '/Object',
      name: 'Object',
      component: () => import('@/view/ECMAScript6/sonPage/Object'),
    },
    {
      path: '/ObjectFunction',
      name: 'ObjectFunction',
      component: () => import('@/view/ECMAScript6/sonPage/ObjectFunction'),
      // children: [{
      //   path: '/ObjectFunction/Object',
      //   name: 'Object',
      //   component: () => import('@/view/ECMAScript6/sonPage/Object'),
      // },{
      //   path: '/ObjectFunction/Symbol',
      //   name: 'Symbol',
      //   component: () => import('@/view/ECMAScript6/sonPage/Symbol'),
      // }]
    },
    {
      path: '/Symbol',
      name: 'Symbol',
      component: () => import('@/view/ECMAScript6/sonPage/Symbol'),
    },
    {
      path: '/Promise',
      name: 'Promise',
      component: () => import('@/view/ECMAScript6/sonPage/Promise'),
    },
    {
      path: '/Class',
      name: 'Class',
      component: () => import('@/view/ECMAScript6/sonPage/Class'),
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/view/ECMAScript6/sonPage/personal'),
    },
    {
      path: '/Set',
      name: 'Set',
      component: () => import('@/view/ECMAScript6/sonPage/Set'),
    },
    {
      path: '/Proxy',
      name: 'Proxy',
      component: () => import('@/view/ECMAScript6/sonPage/Proxy'),
    },
    {
      path: '/Reflect',
      name: 'Reflect',
      component: () => import('@/view/ECMAScript6/sonPage/Reflect'),
    },
    {
      path: '/Iterator',
      name: 'Iterator',
      component: () => import('@/view/ECMAScript6/sonPage/Iterator'),
    },
    {
      path: '/Generator',
      name: 'Generator',
      component: () => import('@/view/ECMAScript6/sonPage/Generator'),
    },
    //Vue
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/view/Vue/vuex'),
    },

    //Integration
    {
      path: '/Integration',
      name: 'Integration',
      component: () => import('@/view/Integration/Integration'),
    },
    //heightcharts
    {
      path: '/highcharts',
      name: 'highcharts',
      component: () => import('@/view/highcharts'),
    },

    //Canvas
    {
      path: '/Canvas',
      name: 'Canvas',
      component: () => import('@/view/Canvas'),
    },
  ]
})
