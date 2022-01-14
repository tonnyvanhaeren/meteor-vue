import Vue from 'vue';
import { Meteor } from 'meteor/meteor';

import '../imports/ui/plugins';

import App from '../imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
