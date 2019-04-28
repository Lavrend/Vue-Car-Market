<template lang="pug">
  header.header.notranslate
    .header__wrapper
      router-link.header__logo(to="/") CAR MARKET

      nav.header__nav-menu
        router-link.header__menu-item(
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        )
          span.header__menu-item-label
            | {{ item.title }}
</template>

<script>
import config from '@/config';

export default {
  name: 'header-component',

  data() {
    return {
      menuItems: config.navMenu,
    };
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: $headerHeight;
  min-width: $screenMinWidth;
  text-align: left;
  box-shadow: $headerShadow;

  // Need for display the layer correct (above content layer and sidebar)
  z-index: $zIndex-200;

  &__wrapper {
    width: 100%;
    height: 100%;
    max-width: $screenMaxWidth;
    margin: 0 auto;
    padding: 0 $indent-lg;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    color: $white;
    text-decoration: none;
    flex: 0;
  }

  &__nav-menu {
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }

  &__menu-item {
    height: 100%;
    margin: 0 $indent-md;
    padding: $indent-md;
    line-height: 1;
    color: $white;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    opacity: 0.6;

    cursor: pointer;
    transition: opacity .5s ease;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__menu-item:last-child {
    margin-right: 0;
  }

  &__menu-item:hover {
    opacity: 1;
  }

  &__menu-item.router-link-exact-active {
    opacity: 1;
  }

  @media screen and (max-width: 980px) {
    &__menu-item {
      margin: 0 $indent-sm;
    }
  }

  @media screen and (min-width: 781px) and (max-width: 980px) {
    &__logo, &__nav-menu {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 381px) and (max-width: 780px) {
    &__logo, &__nav-menu {
      font-size: 17px;
    }

    &__menu-item {
      margin: 0 $indent-xs;
    }
  }

  @media screen and (max-width: 380px) {
    &__wrapper {
      padding-right: $indent-md;
    }

    &__logo, &__nav-menu {
      font-size: 16px;
    }

    &__logo {
      margin-left: -$indent-sm;
    }

    &__menu-item {
      padding: 0 $indent-xs;
    }
  }
}
</style>
