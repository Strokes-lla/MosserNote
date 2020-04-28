import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
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
    {
      path: '/async',
      name: 'async',
      component: () => import('@/view/ECMAScript6/sonPage/async'),
    },
    //Vue
    {
      path: '/vue/:id',
      name: 'vue',
      component: () => import('@/view/Vue/vue'),
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/view/Vue/sonPage/vuex'),
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
      path: '/CanvasBasics',
      name: 'CanvasBasics',
      component: () => import('@/view/Canvas/sonPage/CanvasBasics'),
    },
    {
      path: '/CanvasRoute',
      name: 'CanvasRoute',
      component: () => import('@/view/Canvas/sonPage/CanvasRoute'),
    },

    //Guitar
    {
      path: '/Guitar',
      name: 'Guitar',
      component: () => import('@/view/Guitar/Guitar'),
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: () => import('@/view/ECMAScript6/sonPage/Object'),
    // }
  ]
});


router.beforeEach((to, from, next) => {
  console.clear();
  console.log(process.env.BASE_URL)
  // document.querySelector('title').innerText = to.path;
  next()
});

export default router
