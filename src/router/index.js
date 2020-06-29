import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CalendarView from '../views/CalendarView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/calendar', name: 'Calendar', component: CalendarView },

];

export const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
