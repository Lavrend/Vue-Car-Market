import Vue from 'vue';
import VueRouter from 'vue-router';

// Page view components
import Home from '@/pages/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ '@/pages/About.vue'),
    },

    {
      path: '*',
      redirect: '/',
    },
  ],
});
