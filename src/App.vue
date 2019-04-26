<template lang="pug">
  .app
    .app__loading(v-if="!isAppReady")
      | Loading...

    transition(name="transition-zoom" mode="out-in")
      component.app__wrapper(
        v-if="isAppReady"
        :is="getLayout"
      )
        router-view
</template>

<script>
import { mapState } from 'vuex';

// Layouts
import LayoutDefault from '@/layouts/Default';

export default {
  name: 'App',

  components: {
    LayoutDefault,
  },

  computed: {
    ...mapState('app', [
      'isAppReady',
    ]),

    getLayout() {
      return 'LayoutDefault';
    },
  },

  created() {
    this.$nextTick(() => {
      this.$store.dispatch('app/setPageReady', true);
    });
  },
};
</script>

<style lang="scss">
@import "~@/styles/app";

.app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: $mainFont;
  overflow: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &__loading {
    width: 100%;
    padding: $indent-xl;
    font-size: 20px;
    color: $dark;
    text-align: center;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: $screenMinWidth) {
      overflow-x: auto;
    }
  }
}
</style>
