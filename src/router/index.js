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
    path: '/grid-calc-px',
    name: 'GridCalcPx',
    component: () => import('../views/GridCalcPx.vue'),
    meta: {
      title: 'Grid calc px'
    },
  },
  {
    path: '/grid-calc-rem',
    name: 'GridCalcRem',
    component: () => import('../views/GridCalcRem.vue'),
    meta: {
      title: 'Grid calc rem'
    },
  },
  {
    path: '/grid-flex',
    name: 'GridFlex',
    component: () => import('../views/GridFlex.vue'),
    meta: {
      title: 'Grid flex'
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
