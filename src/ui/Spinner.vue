<template lang="pug">
  .ui-spinner
    .ui-spinner__rect(
      v-for="n in 5"
      :key="n"
      :class="getClasses(n)"
    )
</template>

<script>
export default {
  name: 'ui-spinner-stretch',

  methods: {
    getClasses(index) {
      return `ui-spinner__rect--${index}`;
    },
  },
};
</script>

<style lang="scss">

.ui-spinner {
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  &__rect {
    width: 10%;
    height: 100%;
    background: $grey-7;
    border-radius: 35%;

    animation: spinner-stretch 1.2s ease-in infinite;
  }

  @for $i from 1 through 5 {
    &__rect--#{$i} {
      animation-delay: -1.2s + (0.1 * $i);
    }
  }
}

@keyframes spinner-stretch {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1.0);
  }
}
</style>
