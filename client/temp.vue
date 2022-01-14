<template>
  <div id="some-id" class="my-class">Hello Youtube!</div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello Youtube!', message2: 'Subscribe' };
  },
  computed: {
    myComputed() {
      let undef = 4;
      return undef;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-class {
  span {
    color: tomato;
  }
}
</style>
