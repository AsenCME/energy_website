<template>
  <div class="about">

    <div
      class="menu"
      :class="{'desktop': !this.isMobile()}"
    >

      <div class="spacer"></div>

      <div
        class="segment tl shadow"
        @click="go('consulting')"
      >
        <div class="title">Проектиране и консултации</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + consultingImg + ')'}"
        ></div>
      </div>
      <div
        class="segment tr shadow"
        @click="go('printing')"
      >
        <div class="title">Копирни услуги</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + printingImg + ')'}"
        ></div>
      </div>
      <div
        class="segment br shadow"
        @click="go('contacts')"
      >
        <div class="title bottom">Контакти</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + contactsImg + ')'}"
        ></div>
      </div>
      <div
        class="segment bl shadow"
        @click="go('about')"
      >
        <div class="title bottom">За нас</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + aboutImg + ')'}"
        ></div>
      </div>

      <img
        src="./../assets/bulb.svg"
        alt=""
        class="bulb"
      >

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

<script>
export default {
  data() {
    return {
      consultingImg: require("./../assets/consulting.jpg"),
      printingImg: require("./../assets/consulting.jpg"),
      contactsImg: require("./../assets/consulting.jpg"),
      aboutImg: require("./../assets/consulting.jpg")
    };
  },
  methods: {
    go(place) {
      this.$router.push(`/${place}`);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/styles/hub.scss"
</style>

