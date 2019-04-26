<template lang="pug">
  .hello-world
    h1.hello-world__title {{ msg }}
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.hello-world {
  position: relative;

  &__title {
    margin: $indent-xl 0;
  }
}
</style>
