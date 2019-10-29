import Vue from 'vue'
import Router from 'vue-router'

import home from '@/view/home'

//ECMAScript6
import es6 from '@/view/ECMAScript6/es6'

import Object from '@/view/ECMAScript6/sonPage/Object'
import ObjectFunction from '@/view/ECMAScript6/sonPage/ObjectFunction'
import Symbol from '@/view/ECMAScript6/sonPage/Symbol'
import Promise from '@/view/ECMAScript6/sonPage/Promise'
import Class from '@/view/ECMAScript6/sonPage/Class'
import personal from '@/view/ECMAScript6/sonPage/personal'
import Set from '@/view/ECMAScript6/sonPage/Set'
import Proxy from '@/view/ECMAScript6/sonPage/Proxy'
import Reflect from '@/view/ECMAScript6/sonPage/Reflect'

//vue
import vuex from '@/view/Vue/vuex'

//Integration
import Integration from '@/view/Integration/Integration'

//video
import video from '@/view/video/index'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },

    //ECMAScript6
    {
      path: '/es6',
      name: 'es6',
      component: es6,
    },
    {
      path: '/Object',
      name: 'Object',
      component: Object,
    },
    {
      path: '/ObjectFunction',
      name: 'ObjectFunction',
      component: ObjectFunction,
      // children: [{
      //   path: '/ObjectFunction/Object',
      //   name: 'Object',
      //   component: Object
      // },{
      //   path: '/ObjectFunction/Symbol',
      //   name: 'Symbol',
      //   component: Symbol
      // }]
    },
    {
      path: '/Symbol',
      name: 'Symbol',
      component: Symbol
    },
    {
      path: '/Promise',
      name: 'Promise',
      component: Promise
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Proxy',
      name: 'Proxy',
      component: Proxy
    },
    {
      path: '/Reflect',
      name: 'Reflect',
      component: Reflect
    },

    //Vue
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },

    //Integration
    {
      path: '/Integration',
      name: 'Integration',
      component: Integration
    },


    //video
    {
      path: '/Video',
      name: 'Video',
      component: video
    },
  ]
})
