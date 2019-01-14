<template>
  <div class="about">

    <div
      class="menu"
      :class="{'desktop': !this.isMobile()}"
    >

      <div class="spacer"></div>

      <div class="segment tl"></div>
      <div class="segment tr"></div>
      <div class="segment br"></div>
      <div class="segment bl"></div>

      <img
        src="./../assets/bulb.svg"
        alt=""
        class="bulb"
      >

      <!-- <div class="divider hor"></div>
      <div class="divider vert"></div> -->
    </div>

    <img
      src="./../assets/hub_bg-mobile.svg"
      alt=""
      class="bg"
      v-if="isMobile()"
    />

    <img
      src="./../assets/hub_bg-desktop.svg"
      alt=""
      class="bg"
      v-else
    />

  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/hub.scss"
</style>

