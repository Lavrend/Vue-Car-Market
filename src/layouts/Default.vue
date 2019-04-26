<template lang="pug">
  .layout-default
    LayoutHeader.layout-default__header

    main.layout-default__content
      transition(name="transition-zoom" mode="out-in")
        slot
</template>

<script>
import LayoutHeader from '@/components/Header';

export default {
  name: 'layout-default',

  components: {
    LayoutHeader,
  },
};
</script>

<style lang="scss">
.layout-default {
  position: relative;
  width: 100%;
  height: 100%;
  background: $blue-1;

  display: flex;
  flex-flow: column nowrap;

  overflow: hidden;

  &__content {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    min-width: $screenMinWidth;

    overflow-y: auto;
  }
}
</style>
