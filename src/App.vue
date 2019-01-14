<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  // XXX: Maybe programatically?
  // created() {
  //   document.documentElement.style.fontSize = "18px";
  //   if (this.isMobile()) document.documentElement.style.fontSize = "30px";
  // }
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0px;
  padding: 0px;
  font-family: "Montserrat", sans-serif !important;
  font-size: 16px;
}
@media screen and (max-width: 1500px) {
  html,
  body,
  #app {
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  html,
  body,
  #app {
    font-size: 16px;
  }
}
@media screen and (max-width: 780px) {
  html,
  body,
  #app {
    font-size: 16px;
  }
}

// XXX: Any problems might trace back to this
* {
  box-sizing: border-box;
}
</style>
