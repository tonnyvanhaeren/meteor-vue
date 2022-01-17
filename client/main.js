import Vue from 'vue';
import { Meteor } from 'meteor/meteor';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Router from 'vue-router';

import '../imports/ui/plugins';

import AppComponent from '../imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(Vuetify);
  Vue.use(Router);

  const vuetify = new Vuetify({
    theme: {
      dark: true,
    },
  });

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../imports/ui/components/TempComponent.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../imports/ui/components/About.vue'),
      },
      {
        path: '*',
        name: 'notfound',
        component: () => import('../imports/ui/components/NotFound.vue'),
      },
    ],
  });

  new Vue({
    render: (h) => h(AppComponent),
    vuetify,
    router,
  }).$mount('main');
});

// Meteor.startup(() => {
//   new Vue({
//     el: '#app',
//     ...App,
//   });
// });
