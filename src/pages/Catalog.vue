<template lang="pug">
  section.page-catalog
    CatalogControl(
      position="left"
      toggleLabel="Search"
      :isActive="isSearchActive"
      @toggle="searchToggle")
      CatalogSearch.page-catalog__search

    uiSpinner.page-catalog__spinner(v-if="!isCatalogReady")

    transition(name="transition-fade")
      .page-catalog__content(v-if="isCatalogReady" ref="catalogContent")
        h1.page-catalog__title
          | Cars catalog
        .page-catalog__title-label.notranslate
          | {{ getTitleLabel }}

        CatalogPagination.page-catalog__pagination(:minPages="2")

        CatalogList.page-catalog__list
        .page-catalog__empty-list(v-if="!itemsLength")
          | The list is empty

        CatalogPagination.page-catalog__pagination(
          :minPages="2"
          @changePage="scrollContent"
        )
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _animate from '@/utils/animate';

import CatalogControl from '@/components/Catalog/CatalogControl';
import CatalogSearch from '@/components/Catalog/CatalogSearch';
import CatalogPagination from '@/components/Catalog/CatalogPagination';
import CatalogList from '@/components/Catalog/CatalogList';

import uiSpinner from '@/ui/Spinner';

export default {
  name: 'page-catalog',

  components: {
    CatalogControl,
    CatalogSearch,
    CatalogPagination,
    CatalogList,
    uiSpinner,
  },

  data() {
    return {
      isCatalogReady: false,
    };
  },

  computed: {
    ...mapState('app', [
      'isAppReady',
      'isSearchActive',
    ]),

    ...mapState('catalog', [
      'currentPage',
      'total',
    ]),

    ...mapGetters('catalog', [
      'itemsLength',
    ]),

    getTitleLabel() {
      if (this.total <= 0) return 'models not available';

      return this.total > 1
        ? `${this.total} models are available`
        : `${this.total} model is available`;
    },
  },

  created() {
    this.$nextTick(async () => {
      await this.$store.dispatch('catalog/init');
      this.isCatalogReady = true;
    });
  },

  methods: {
    searchToggle() {
      this.$store.dispatch('app/searchToggle');
    },

    scrollContent() {
      const el = this.$refs.catalogContent;

      const draw = (time) => {
        const newPos = -el.scrollTop * time;

        el.scrollTop += newPos;
      };

      _animate(draw, 300, 'easeInQuad', 500);
    },
  },
};
</script>

<style lang="scss">
.page-catalog {
  position: relative;
  height: 100%;
  text-align: center;

  &__spinner {
    position: relative;
    width: $spinnerWidth;
    height: $spinnerHeight;
    top: $headerHeight;
    margin: 0 auto;
  }

  &__content {
    height: 100%;
    padding-bottom: $indent-md;
    overflow-y: auto;
  }

  &__title {
    color: $lime-5;
    margin-bottom: 0;
  }

  &__title-label {
    font-size: 13px;
    color: $grey-7;
  }

  &__list {
    padding: $indent-md;
  }

  &__empty-list {
    padding: $indent-md;
    font-size: 1.2em;
    color: $grey-7;
  }

  &__pagination {
    margin: $indent-md 0;
  }
}
</style>
