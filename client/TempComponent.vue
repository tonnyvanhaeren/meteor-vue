<template>
  <div id="some-id" class="my-class">
    {{ message }}, {{ message2 }}

    <br />

    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        {{ item.name }} | ${{ item.price }}
      </li>
    </ul>

    <form @submit.prevent="saveNewItem">
      <label for="item-name">Name</label>
      <input id="item-name" v-model="newItem.name" type="text" />
      <label for="item-price">Price</label>
      <input id="item-name" v-model="newItem.price" type="text" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { Items } from '../imports/api/collections/Items';
import { Meteor } from 'meteor/meteor';
export default {
  data() {
    return {
      message: 'Hello Youtube!',
      message2: 'Subscribe',
      newItem: { name: '', price: 0 },
    };
  },
  computed: {
    myComputed() {
      let undef = 4;
      return undef;
    },
  },
  methods: {
    saveNewItem() {
      Meteor.call('items.insert', this.newItem, function (error, result) {
        if (error) {
          console.error('something went wrong', error);
        } else {
          console.info(result);
        }
      });
    },
  },
  meteor: {
    items() {
      return Items.find({}).fetch();
    },
  },
};
</script>

<style lang="css" scoped></style>
