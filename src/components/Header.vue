<template lang="pug">
  .header
    router-link.header__nav-item(to="/")
      | Home
    router-link.header__nav-item(to="/about")
      | About
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: $headerHeight;
  min-width: $screenMinWidth;
  padding: 0 $indent-md;
  text-align: left;
  background: $gbg-lime;
  box-shadow: $boxShadow-black;

  user-select: none;

  display: flex;
  align-items: center;

  // Need for display the layer correct (above content layer and sidebar)
  z-index: $zIndex-200;

  &__nav-item {
    padding: $indent-sm $indent-md;
    color: $white;
    font-size: 18px;

    opacity: 0.8;

    &.router-link-exact-active {
      font-weight: bold;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
