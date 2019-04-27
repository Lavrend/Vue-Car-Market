<template lang="pug">
  .pagination
    transition(name="transition-fade" mode="out-in")
      ul.pagination__list(v-if="totalPages > 0" :key="`${currentPage}-${currentPageSize}`")
        li.pagination__item(
          :class="getItemPrevClass"
          @click="changePage(currentPage - 1, true)"
        )
          span.pagination__item-inner
            | <

        .pagination__list-center
          li.pagination__item(v-if="isFirst" @click="changePage(1)")
            span.pagination__item-inner
              | 1

          li.pagination__item(v-if="isRangeFirst")
            span.pagination__item-inner(v-if="rangeStart - 1 === 2" @click="changePage(2)")
              | 2
            span.pagination__item-inner(v-else @click="changePage(rangeStart - 3, false, true)")
              | ...

          li.pagination__item(v-for="page in pages"
            :key="page"
            :class="getItemCurrentClass(page)"
            @click="changePage(page)"
          )
            span.pagination__item-inner
              | {{ page }}

          li.pagination__item(v-if="isRangeLast")
            span.pagination__item-inner(v-if="rangeEnd + 2 === totalPages" @click="changePage(totalPages - 1)")
              | {{ totalPages - 1 }}
            span.pagination__item-inner(v-else @click="changePage(rangeEnd + 3, false, true)")
              | ...

          li.pagination__item(v-if="isLast" @click="changePage(totalPages)")
            span.pagination__item-inner
              | {{ totalPages }}

        li.pagination__item(
          :class="getItemNextClass"
          @click="changePage(currentPage + 1, true)"
        )
          span.pagination__item-inner
            | >
</template>

<script>
import config from '@/config';

export default {
  name: 'ui-pagination',

  props: {
    total: {
      type: Number,
      default: 0,
    },

    pageSize: {
      type: Number,
      default: config.DEFAULT_PAGE_SIZE,
    },

    pageRange: {
      type: Number,
      default: 2,
    },

    current: {
      type: Number,
      default: 1,
    },
  },

  data: () => ({
    currentPage: 1,
    currentPageSize: config.DEFAULT_PAGE_SIZE,
  }),

  computed: {
    getItemPrevClass() {
      return {
        'pagination__item--prev': true,
        'pagination__item--locked': !this.hasPrev,
      };
    },

    getItemNextClass() {
      return {
        'pagination__item--next': true,
        'pagination__item--locked': !this.hasNext,
      };
    },

    totalPages() {
      return Math.ceil(this.total / this.currentPageSize);
    },

    rangeStart() {
      const start = this.currentPage - this.pageRange;
      return start > 0 ? start : 1;
    },

    rangeEnd() {
      const end = this.currentPage + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },

    pages() {
      return Array.from({ length: this.rangeEnd - this.rangeStart + 1 }, (_, i) => i + this.rangeStart);
    },

    isFirst() {
      return this.rangeStart !== 1;
    },

    isLast() {
      return this.rangeEnd < this.totalPages;
    },

    isRangeFirst() {
      return this.rangeStart - 1 > 1;
    },

    isRangeLast() {
      return this.rangeEnd + 1 < this.totalPages;
    },

    hasPrev() {
      return this.currentPage > 1;
    },

    hasNext() {
      return this.currentPage < this.totalPages;
    },
  },

  created() {
    this.currentPage = this.current > 0 ? this.current : 1;
    this.currentPageSize = this.pageSize;

    this.$watch('totalPages', () => {
      if (this.totalPages && this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }, { immediate: true });

    this.$watch('pageSize', (value) => {
      this.currentPageSize = value;
    });

    this.$watch('current', (value) => {
      this.currentPage = value;
    });
  },

  methods: {
    getItemCurrentClass(page) {
      return {
        'pagination__item--current': this.currentPage === page,
      };
    },

    changePage(page, isBtn = false, isBetweenBtn = false) {
      let currentPage = page;

      if (isBtn && (currentPage < 1 || currentPage > this.totalPages)) {
        return;
      }

      if (currentPage <= 1) {
        currentPage = isBetweenBtn ? 2 : 1;
      }

      if (currentPage >= this.totalPages) {
        currentPage = isBetweenBtn ? this.totalPages - 1 : this.totalPages;
      }

      this.currentPage = currentPage;
      this.$emit('changePage', currentPage);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  width: 100%;
  margin-top: $indent-md;
  font-size: 15px;
  user-select: none;

  display: inline-flex;
  justify-content: center;

  &__list {
    margin: 0 $indent-sm;
    padding: 0;
    vertical-align: middle;

    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  &__list-center {
    margin: 0 $indent-xs;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__item {
    min-width: 40px;
    margin: $indent-xs;
    padding: 0;
    background: $grey-2;
    border-radius: 3px;
    border: 1px solid $grey-5;
    color: $grey-7;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__item-inner {
    padding: $indent-md - 2;
  }

  &__item--prev {
    margin-left: 0;
    margin-right: $indent-xs;
    padding: 0;
  }

  &__item--next {
    margin-right: 0;
    margin-left: $indent-xs;
    padding: 0;
  }

  &__item--current {
    background: $grey-3;
    color: $lime-5;
    border-color: $lime-5;
    cursor: default;
  }

  &__item--locked {
    border-color: $grey-3;
    background: $grey-1;
    color: $grey-4;
    cursor: not-allowed;
  }

  &__item:not(.pagination__item--current):not(.pagination__item--locked):hover {
    border-color: darken($grey-2, 25%);
    color: darken($grey-6, 25%);
  }
}
</style>
