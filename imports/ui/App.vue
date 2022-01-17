<template>
  <v-app>
    <v-container>
      <h1>{{ greeting }}</h1>

      <header>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
      </header>

      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      greeting: 'Hello Meteor, from Vue',
    };
  },
};
</script>

<style></style>
