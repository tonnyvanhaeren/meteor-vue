import Vue from 'vue';
import { Meteor } from 'meteor/meteor';

import '../imports/ui/plugins';

import AppComponent from '../imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: (h) => h(AppComponent),
  }).$mount('main');
});

// Meteor.startup(() => {
//   new Vue({
//     el: '#app',
//     ...App,
//   });
// });
