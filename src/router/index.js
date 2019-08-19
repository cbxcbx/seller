import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
import Seller from '@/components/seller/sell';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods,
      alias: '/goods'
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
});
