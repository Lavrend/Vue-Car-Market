<template lang="pug">
  section.page-about
    transition(name="transition-zoom" mode="out-in")
      .page-about__content(v-show="isIframeLoaded" ref="iframWrapper")
        iframe(
          ref="iframDocument"
          src="/github_page.html"
          style="border: 0; width: 100%; height: 100%;"
          @load="iframeLoaded"
        )
</template>

<script>
export default {
  name: 'page-about',

  data() {
    return {
      isIframeLoaded: false,
    };
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.iframWrapper.removeChild(this.$refs.iframDocument);
    next();
  },

  methods: {
    iframeLoaded() {
      this.isIframeLoaded = true;
    },
  },
};
</script>

<style lang="scss">
.page-about {
  height: 100%;
  text-align: center;
  background: rgba($white, 0.4);

  &__content {
    width: 100%;
    height: 100%;
  }
}
</style>
