<template lang="pug">
  .catalog-control(:class="getControlClass")
    .catalog-control__content
      slot

    .catalog-control__toggle(:title="getToggleTitle" @click="toggle")
      .catalog-control__toggle-inner
        | {{ !isActive ? toggleLabel : 'Close' }}
      .catalog-control__toggle-arrow
        | {{ getToggleArrow }}
</template>

<script>

export default {
  name: 'catalog-control',

  props: {
    position: {
      type: String,
      default: 'left',
    },

    toggleLabel: {
      type: String,
      default: '',
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getControlClass() {
      return {
        'catalog-control--active': this.isActive,
        'catalog-control--position-left': this.position === 'left',
        'catalog-control--position-right': this.position === 'right',
      };
    },

    getToggleTitle() {
      return `${this.isActive ? 'Close' : 'Open'} ${this.toggleLabel} panel`;
    },

    getToggleArrow() {
      if (this.position === 'right') {
        return !this.isActive ? '<' : '>';
      }

      return !this.isActive ? '>' : '<';
    },
  },

  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss">

.catalog-control {
  position: absolute;
  padding: $indent-md;
  background: $grey-2;
  border: 1px solid $grey-4;
  box-shadow: $boxShadow-dark;
  opacity: 0.9;
  transition: transform .2s ease, opacity .2s ease;

  display: flex;

  &__toggle {
    color: $grey-7;
    transition: color .3s ease;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      color: $lime-5;
    }
  }

  &__toggle-inner {
    padding: 0 $indent-md;
    white-space: nowrap;
  }

  &--position-left {
    left: 0;
    top: 0;
    border-top: 0;
    border-bottom-right-radius: $borderRadius;
    transform: translateX(calc(-100% + 100px)) translateY(0);
  }

  &--position-left &__toggle {
    margin-left: $indent-lg;
  }

  &--position-right {
    right: 0;
    top: 0;
    border-bottom-left-radius: $borderRadius;
    transform: translateX(calc(100% - 100px)) translateY(0);
    flex-direction: row-reverse;
  }

  &--position-right &__toggle {
    margin-right: $indent-lg;
    flex-direction: row-reverse;
  }

  &--active {
    transform: translateX(0) translateY(0);
    opacity: 1;
    z-index: 1;
  }

  &--active:not(&--position-left) &__toggle {
    flex-direction: row;
  }

  &--active:not(&--position-right) &__toggle {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 380px) {
    &__toggle-inner {
      display: none;
    }

    &--position-left:not(&--active) {
      transform: translateX(calc(-100% + 30px)) translateY(0);
    }

    &--position-right:not(&--active) {
      transform: translateX(calc(100% - 30px)) translateY(0);
    }
  }
}
</style>
