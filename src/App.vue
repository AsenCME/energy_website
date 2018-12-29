<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    document.documentElement.style.fontSize = "18px";
    if (this.isMobile()) document.documentElement.style.fontSize = "30px";
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0px;
  padding: 0px;
  font-family: "Montserrat", sans-serif;
}
</style>
