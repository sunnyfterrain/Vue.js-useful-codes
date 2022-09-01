import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import InfinityScroll from '@/views/InfinityScroll.vue';
import DragDrop from '@/views/DragDrop.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/infinity', component: InfinityScroll },
    { path: '/dragndrop', component: DragDrop}
  ],
});
