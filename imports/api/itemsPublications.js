import { Meteor } from 'meteor/meteor';
import { Items } from '../api/collections/Items';

Meteor.publish('allItems', function publishItems() {
  return Items.find({});
});
