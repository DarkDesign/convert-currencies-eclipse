import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import CurrenciesView from '../views/Currencies.view.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Currencies',
    component: CurrenciesView
  },
  {
    path: '/converter',
    name: 'Converter',
    component: () => import(/* webpackChunkName: "converter" */ '../views/Converter.view.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
