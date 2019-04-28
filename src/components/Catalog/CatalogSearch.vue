<template lang="pug">
  .catalog-search
    label.catalog-search__wrapper
      span.catalog-search__label
        | Filter by

      Input.catalog-search__input(
        v-model="currentInputValue"
        :placeholder="placeholder"
        :value="currentInputValue"
        size="30"
        type="search"
        @change="onChangeSearch"
      )
</template>

<script>
import { mapState } from 'vuex';
import _debounce from 'lodash.debounce';

import Input from '@/ui/Input';

export default {
  name: 'catalog-search',

  components: {
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
    ]),

    currentInputValue: {
      get() {
        return this.search || this.inputValue;
      },

      set(value) {
        this.inputValue = value;
      },
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
.catalog-search {
  width: 100%;

  &__label {
    color: $grey-7;
  }

  &__input {
    margin-left: $indent-md;
  }

  @media screen and (max-width: 480px) {
    &__label {
      display: none;
    }
  }
}
</style>
