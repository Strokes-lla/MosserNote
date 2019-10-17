import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import Object from '@/view/Object'
import ObjectFunction from '@/view/ObjectFunction'
import Symbol from '@/view/Symbol'
import Promise from '@/view/Promise'
import Class from '@/view/Class'
import personal from '@/view/personal'
import vuex from '@/view/vuex'
import Integration from '@/view/Integration'
import Set from '@/view/Set'
import Proxy from '@/view/Proxy'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
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
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/Integration',
      name: 'Integration',
      component: Integration
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
  ]
})
