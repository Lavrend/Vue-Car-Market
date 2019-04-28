<template lang="pug">
  .catalog-list
    transition(name="transition-scale" mode="out-in")
      .catalog-list__wrapper(:key="getCatalogUniqKey")
        CatalogItem.catalog-list__item(
          v-for="item in items"
          :key="getItemUniqKey(item)"
          :itemId="item.itemId"
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
    ...mapState('catalog', [
      'items',
      'search',
      'currentPage',
      'pageSize',
    ]),

    getCatalogUniqKey() {
      return `${this.pageSize}_${this.currentPage}_${this.search}`;
    },
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

  user-select: text;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: $indent-md;
  }
}
</style>
