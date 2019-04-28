<template lang="pug">
  article.catalog-item
    .catalog-item__wrapper
      .catalog-item__header
        .catalog-item__country
          | {{ country | capitalize }}
        .catalog-item__item-id
          | <span style="user-select: none;">#</span>{{ itemId }}

      .catalog-item__content
        h2.catalog-item__titile
          | {{ getItemTitle | capitalize }}

      .catalog-item__summary
        .catalog-item__vin-label
          | vin
        .catalog-item__vin
          | {{ vin || 'Unknown' }}
</template>

<script>
export default {
  name: 'catalog-item',

  props: {
    itemId: Number,
    country: String,
    brand: String,
    model: String,
    vin: String,

    year: {
      type: [Number, String],
      default: 0,
    },
  },

  filters: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },

  computed: {
    getItemTitle() {
      return `${this.brand} ${this.model}${this.year ? ` (${this.year})` : ''}`;
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  width: 100%;

  &__wrapper {
    width: 100%;
    height: 100%;
    background: rgba($white, 0.9);
    border: 1px solid $grey-5;
    border-radius: $borderRadius;
    overflow: hidden;

    transition: background 1s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__header {
    width: 100%;
    padding: $indent-md;
    color: $lime-4;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-id {
    font-size: 12px;
  }

  &__content {
    width: 100%;
    min-height: 50px;
    padding: 0 $indent-md;
    color: $lime-5;
  }

  &__titile {
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__summary {
    width: 100%;
    padding: $indent-md;
    font-size: 13px;
    color: $grey-7;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__vin-label {
    font-size: 12px;
    color: $grey-5;
    user-select: none;
  }

  &__wrapper:hover {
    background: $lime-1;
  }
}
</style>
