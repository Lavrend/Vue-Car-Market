<template lang="pug">
  .catalog-list
    transition(name="transition-scale" mode="out-in")
      .catalog-list__wrapper(:key="currentPage")
        CatalogItem.catalog-list__item(
          v-for="item in items"
          :key="getItemUniqKey(item)"
          :country="item.country"
          :brand="item.brand"
          :model="item.model"
          :year="item.year"
          :vin="item.vin"
        )
</template>

<script>
import { mapState } from 'vuex';
import CatalogItem from '@/components/Catalog/CatalogItem';

export default {
  name: 'catalog-list',

  components: {
    CatalogItem,
  },

  computed: {
    ...mapState('cars', [
      'items',
      'currentPage',
    ]),
  },

  methods: {
    getItemUniqKey(item) {
      return `${item.country}_${item.brand}_${item.model}_${item.year}_${item.vin}`;
    },
  },
};
</script>

<style lang="scss">
.catalog-list {
  max-width: $screenMaxWidth;
  margin: 0 auto;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: $indent-md;
  }

  &__item {
    height: 20vh;
  }
}
</style>
