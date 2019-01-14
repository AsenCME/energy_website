<template>
  <div class="mobile-layout">

    <div class="header">
      <div class="home-btn">
        <div class="bulb"></div>
        <div class="line"></div>
      </div>
      <div class="title-wrapper">
        <div class="title">{{title}}</div>
        <div class="line"></div>
      </div>
    </div>

    <main>
      <slot></slot>
    </main>

  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "mobile-layout"
};
</script>

<style scoped lang="scss">
@import "@/styles/layout-mobile.scss";
</style>
