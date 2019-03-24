<template>
  <div class="wrapper">

    <!-- <page-layout
      title="Проектиране, Консултации"
      v-if="!isMobile()"
      :links="links"
      @changeTab="tabHandler"
      class="desktop-layout"
    ></page-layout> -->

    <page-layout
      :title="`Проектиране\r\nи консултации`"
      v-if="!isMobile()"
      class="desktop-layout"
    ></page-layout>

    <mobile-layout
      :title="`Проектиране и\r\nконсултации`"
      v-if="isMobile()"
      class="mobile-layout"
    ></mobile-layout>

  </div>
</template>

<script>
import Layout from "./../components/Layout.vue";
import MobileLayout from "./../components/MobileLayout.vue";

export default {
  components: { "page-layout": Layout, "mobile-layout": MobileLayout },
  methods: {
    tabHandler(tab) {
      this.tab = tab;
    },
    check(tab) {
      return tab === this.tab || this.tab === "all";
    }
  },
  data() {
    return { tab: "", links: [] };
  }
};
</script>

<style scoped lang="scss">
@import "./../styles/page-template.scss";
</style>
