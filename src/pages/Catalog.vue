<template lang="pug">
  section.page-catalog
    CatalogList.page-catalog__list
    .page-catalog__empty-list(v-if="!itemsLength")
      | The list is empty
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import CatalogList from '@/components/Catalog/CatalogList';

export default {
  name: 'page-catalog',

  components: {
    CatalogList,
  },

  computed: {
    ...mapState('cars', [
      'items',
    ]),

    ...mapGetters('cars', [
      'itemsLength',
    ]),
  },
};
</script>

<style lang="scss">
.page-catalog {
  height: 100%;
  text-align: center;

  overflow-y: auto;

  &__list {
    padding: $indent-md;
  }

  &__empty-list {
    padding: $indent-md;
    font-size: 1.2em;
  }
}
</style>
