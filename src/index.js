import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Dev from '@/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faHome, faUsers,
  faPhone, faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import vuetify from './plugins/vuetify';
import { router } from './router/index';

library.add(faUserSecret);
library.add(faHome);
library.add(faUsers);
library.add(faPhone);
library.add(faCalendar);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDvpxvmbAQ5We-EmqoYSx0puhW3YE7YooM',
  authDomain: 'beta-childcare.firebaseapp.com',
  databaseURL: 'https://beta-childcare.firebaseio.com',
  projectId: 'beta-childcare',
  storageBucket: 'beta-childcare.appspot.com',
  messagingSenderId: '649437008382',
  appId: '1:649437008382:web:9acfc866ec17df97e2b0af',

});

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueTextareaAutosize);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// eslint-disable-next-line import/prefer-default-export
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(Dev),
  router,
}).$mount('#app');
