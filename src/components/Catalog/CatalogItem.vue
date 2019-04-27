<template lang="pug">
  article.catalog-item
    .catalog-item__content
      h2.catalog-item__titile
        | {{ getItemTitle }}
      p.catalog-item__description
        | {{ vin ? `VIN: ${vin}` : '' }}
      p.catalog-item__description
        | From: {{ country }}
</template>

<script>
export default {
  name: 'catalog-item',

  props: {
    country: String,
    brand: String,
    model: String,
    vin: String,

    year: {
      type: [Number, String],
      default: 0,
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
$borderRadius: 10px;

.catalog-item {
  width: 100%;
  height: 100%;
  background: rgba($white, 0.9);
  border: 1px solid $grey-5;
  border-radius: $borderRadius;
  overflow: hidden;

  transition: background 1s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    color: $lime-5;
  }

  &__titile {
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__description {
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: $lime-1;
  }
}
</style>
