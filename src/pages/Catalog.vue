<template lang="pug">
  section.page-catalog
    Pagination(
      :total="total"
      :current="currentPage"
      :pageSize="pageSize"
      @changePage="changePage"
    )

    CatalogList.page-catalog__list
    .page-catalog__empty-list(v-if="!itemsLength")
      | The list is empty
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import CatalogList from '@/components/Catalog/CatalogList';
import Pagination from '@/ui/Pagination';

export default {
  name: 'page-catalog',

  components: {
    CatalogList,
    Pagination,
  },

  computed: {
    ...mapState('cars', [
      'currentPage',
      'pageSize',
      'total',
    ]),

    ...mapGetters('cars', [
      'itemsLength',
    ]),
  },

  methods: {
    changePage(page = 1) {
      this.$store.dispatch('cars/setCurrentPage', {
        page,
      });
    },
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
