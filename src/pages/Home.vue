<template lang="pug">
  section.page-home
    .page-home__content
      h1.page-home__title
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'page-home',

  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.page-home {
  height: 100%;
  text-align: center;
}
</style>
