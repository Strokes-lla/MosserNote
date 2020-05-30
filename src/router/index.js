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
    {
      path: '/console',
      name: 'console',
      component: () => import('@/view/console/console'),
      children: [
        //ECMAScript6
        {
          path: '/console/Object',
          name: 'Object',
          component: () => import('@/view/console/ECMAScript6/sonPage/Object'),
        },
        {
          path: '/console/ObjectFunction',
          name: 'ObjectFunction',
          component: () => import('@/view/console/ECMAScript6/sonPage/ObjectFunction'),
        },
        {
          path: '/console/Symbol',
          name: 'Symbol',
          component: () => import('@/view/console/ECMAScript6/sonPage/Symbol'),
        },
        {
          path: '/console/Promise',
          name: 'Promise',
          component: () => import('@/view/console/ECMAScript6/sonPage/Promise'),
        },
        {
          path: '/console/Class',
          name: 'Class',
          component: () => import('@/view/console/ECMAScript6/sonPage/Class'),
        },
        {
          path: '/console/personal',
          name: 'personal',
          component: () => import('@/view/console/ECMAScript6/sonPage/personal'),
        },
        {
          path: '/console/Set',
          name: 'Set',
          component: () => import('@/view/console/ECMAScript6/sonPage/Set'),
        },
        {
          path: '/console/Proxy',
          name: 'Proxy',
          component: () => import('@/view/console/ECMAScript6/sonPage/Proxy'),
        },
        {
          path: '/console/Reflect',
          name: 'Reflect',
          component: () => import('@/view/console/ECMAScript6/sonPage/Reflect'),
        },
        {
          path: '/console/Iterator',
          name: 'Iterator',
          component: () => import('@/view/console/ECMAScript6/sonPage/Iterator'),
        },
        {
          path: '/console/Generator',
          name: 'Generator',
          component: () => import('@/view/console/ECMAScript6/sonPage/Generator'),
        },
        {
          path: '/console/async',
          name: 'async',
          component: () => import('@/view/console/ECMAScript6/sonPage/async'),
        },
        //Vue
        {
          path: '/console/vue/:id',
          name: 'vue',
          component: () => import('@/view/console/Vue/vue'),
        },
        {
          path: '/console/vuex',
          name: 'vuex',
          component: () => import('@/view/console/Vue/sonPage/vuex'),
        },
        //Integration
        {
          path: '/console/Integration',
          name: 'Integration',
          component: () => import('@/view/console/Integration/Integration'),
        },
        //heightcharts
        {
          path: '/console/highcharts',
          name: 'highcharts',
          component: () => import('@/view/console/highcharts'),
        },
        //Canvas
        {
          path: '/console/CanvasBasics',
          name: 'CanvasBasics',
          component: () => import('@/view/console/Canvas/sonPage/CanvasBasics'),
        },
        {
          path: '/console/CanvasRoute',
          name: 'CanvasRoute',
          component: () => import('@/view/console/Canvas/sonPage/CanvasRoute'),
        }],
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/view/experience/experience'),
    },
    {
      path: '/function',
      name: 'function',
      component: () => import('@/view/function/function'),
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
  console.log(process.env.BASE_URL);
  // document.querySelector('title').innerText = to.path;
  next()
});

export default router
