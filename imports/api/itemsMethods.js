// import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Items } from '../api/collections/Items';

Meteor.methods({
  'items.insert'(newItem) {
    return Items.insert(newItem);
  },
  'items.remove'(item) {
    return Items.remove({ _id: item._id });
  },
});
