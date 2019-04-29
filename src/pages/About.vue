<template lang="pug">
  section.page-about
    uiSpinner.page-about__spinner(v-if="!isReady")

    transition(name="transition-zoom" mode="out-in")
      .page-about__content(v-show="isReady" ref="iframWrapper")
        iframe(
          ref="iframDocument"
          src="/github_page.html"
          style="border: 0; width: 100%; height: 100%;"
          @load="iframeLoaded"
        )
</template>

<script>
import uiSpinner from '@/ui/Spinner';

export default {
  name: 'page-about',

  components: {
    uiSpinner,
  },

  data() {
    return {
      isReady: false,
    };
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.iframWrapper.removeChild(this.$refs.iframDocument);
    next();
  },

  methods: {
    iframeLoaded() {
      this.isReady = true;
    },
  },
};
</script>

<style lang="scss">
.page-about {
  height: 100%;
  text-align: center;
  background: rgba($white, 0.4);

  &__spinner {
    position: relative;
    width: $spinnerWidth;
    height: $spinnerHeight;
    top: $headerHeight;
    margin: 0 auto;
  }

  &__content {
    width: 100%;
    height: 100%;
  }
}
</style>
