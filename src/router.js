import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import InfinityScroll from '@/views/InfinityScroll.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/infinity', component: InfinityScroll },
  ],
});
