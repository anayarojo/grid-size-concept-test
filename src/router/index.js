import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Size concept test',
    },
  },
  {
    path: '/css-grid',
    name: 'CssGrid',
    component: () => import('../views/CssGrid.vue'),
    meta: {
      title: 'CSS grid'
    },
  },
  {
    path: '/grid-calc',
    name: 'GridCalc',
    component: () => import('../views/GridCalc.vue'),
    meta: {
      title: 'Grid calc'
    },
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
