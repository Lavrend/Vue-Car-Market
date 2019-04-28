<template lang="pug">
  .catalog-pagination
    transition(name="transition-scale" mode="out-in")
      Pagination.catalog-pagination__control(
        :key="getPaginationKey"
        :total="total"
        :current="currentPage"
        :pageSize="pageSize"
        :minPages="minPages"
        @changePage="onChangePage"
      )
</template>

<script>
import { mapState } from 'vuex';
import Pagination from '@/ui/Pagination';

export default {
  name: 'catalog-pagination',

  components: {
    Pagination,
  },

  props: {
    minPages: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    ...mapState('catalog', [
      'currentPage',
      'pageSize',
      'total',
    ]),

    getPaginationKey() {
      return `${this.pageSize}_${this.search}`;
    },
  },

  methods: {
    paginationToggle() {
      this.$store.dispatch('app/paginationToggle');
    },

    onChangePage(page = 1) {
      this.$store.dispatch('catalog/setCurrentPage', {
        page,
      });
    },
  },
};
</script>

<style lang="scss">
.catalog-pagination {
  width: 100%;
}
</style>
