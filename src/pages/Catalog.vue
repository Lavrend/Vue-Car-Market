<template lang="pug">
  section.page-catalog
    Input.page-catalog__search(
      v-model="inputValue"
      :placeholder="placeholder"
      size="40"
      type="search"
      @change="onChangeSearch"
    )

    transition(name="transition-scale" mode="out-in")
      Pagination.page-catalog__pagination(
        :key="getPaginationKey"
        :total="total"
        :current="currentPage"
        :pageSize="pageSize"
        @changePage="onChangePage"
      )

    CatalogList.page-catalog__list
    .page-catalog__empty-list(v-if="!itemsLength")
      | The list is empty
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import _debounce from 'lodash.debounce';

import CatalogList from '@/components/Catalog/CatalogList';
import Pagination from '@/ui/Pagination';
import Input from '@/ui/Input';

export default {
  name: 'page-catalog',

  components: {
    CatalogList,
    Pagination,
    Input,
  },

  data() {
    return {
      placeholder: 'Type here to search (min 2 chars)',
      inputValue: '',
    };
  },

  computed: {
    ...mapState('catalog', [
      'search',
      'currentPage',
      'pageSize',
      'total',
    ]),

    ...mapGetters('catalog', [
      'itemsLength',
    ]),

    getPaginationKey() {
      return `${this.pageSize}_${this.search}`;
    },
  },

  methods: {
    onChangePage(page = 1) {
      this.$store.dispatch('catalog/setCurrentPage', {
        page,
      });
    },

    onChangeSearch: _debounce(function debounceChange(value = '') {
      const search = String(value || '').trim();

      this.$store.dispatch('catalog/setSearchFilter', {
        search,
      });
    }, 1000),
  },
};
</script>

<style lang="scss">
.page-catalog {
  height: 100%;
  background: rgba($white, 0.8);
  text-align: center;

  overflow-y: auto;

  &__search {
    margin: $indent-md;
  }

  &__list {
    padding: $indent-md;
  }

  &__empty-list {
    padding: $indent-md;
    font-size: 1.2em;
  }
}
</style>
