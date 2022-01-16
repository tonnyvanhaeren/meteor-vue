import Vue from 'vue';
import { Meteor } from 'meteor/meteor';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '../imports/ui/plugins';

import AppComponent from '../imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(Vuetify);

  const vuetify = new Vuetify({
    theme: {
      dark: true,
    },
  });

  new Vue({
    render: (h) => h(AppComponent),
    vuetify,
  }).$mount('main');
});

// Meteor.startup(() => {
//   new Vue({
//     el: '#app',
//     ...App,
//   });
// });
