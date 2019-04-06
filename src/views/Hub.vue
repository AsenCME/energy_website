<template>
  <div class="hub-page">

    <!-- Desktop Menu -->
    <div
      class="menu"
      v-if="!this.isMobile()"
    >

      <div class="spacer"></div>

      <div
        class="segment tl"
        @click="go('consulting')"
      >
        <div class="title">Проектиране и консултации</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + consultingImg + ')'}"
        ></div>
      </div>
      <div
        class="segment tr"
        @click="go('printing')"
      >
        <div class="title">Копирни услуги</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + printingImg + ')'}"
        ></div>
      </div>
      <div
        class="segment br"
        @click="go('contacts')"
      >
        <div class="title bottom">Контакти</div>
        <div
          class="underlay"
          :style="{backgroundImage: 'url(' + contactsImg + ')'}"
        ></div>
      </div>
      <div
        class="segment bl"
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

    <!-- Mobile Menu -->
    <div
      v-else
      class="menu-mobile"
    >

      <div class="segment">
        <div class="title">Проектиране и консултации</div>
      </div>
      <div class="segment">
        <div class="title">Копирни услуги</div>
      </div>

      <div class="middle">
        <div class="bulb-wrapper">
          <img
            src="./../assets/bulb.svg"
            alt="light-bulb"
            class="bulb"
          ></div>
        <div class="line"></div>
      </div>

      <div class="segment">
        <div class="title">За Нас</div>
      </div>
      <div class="segment">
        <div class="title">Контакти</div>
      </div>

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
      if (!this.isMobile()) this.$router.push(`/${place}`);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/styles/hub.scss"
</style>

