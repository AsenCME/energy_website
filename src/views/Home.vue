<template>
  <div class="home">

    <!-- Mobile Version -->
    <div
      v-if="isMobile()"
      class="mobile"
    >
      <div class="text">
        <div class="one">Енерджи</div>
        <div class="two">Про-Консулт</div>
        <div class="text-line"></div>
        <div class="motto">Винаги може повече</div>
      </div>

      <div
        class="start-btn"
        @click="click()"
      >
        <img
          src="./../assets/button.svg"
          alt=""
          class="circuit"
        >

        <img
          src="./../assets/bulb.svg"
          alt=""
          class="bulb"
        >

        <span class="label">НАЧАЛО</span>
      </div>

    </div>

    <!-- Desktop & Tablet Version -->
    <div
      v-else
      class="desktop"
    >

      <div class="text">
        <div class="one">Енерджи</div>
        <div class="two">Про-Консулт</div>
        <div class="text-line"></div>
        <div class="motto">Винаги може повече <span class="dot">.</span></div>
      </div>

      <div class="circuit">

        <!-- Circles as contact points -->
        <div class="circles">
          <span class="tl"></span>
          <span class="tr"></span>
          <span class="bl"></span>
          <span class="br"></span>
          <span class="lmt"></span>
          <span class="lmb"></span>
        </div>

        <!-- Start Button -->
        <div
          class="start-button"
          @click="click"
        >
          <span>КЪМ САЙТА</span>
          <div class="point top-left"></div>
          <div class="point top-right"></div>
          <div class="point bottom-left"></div>
          <div class="point bottom-right"></div>
        </div>

        <!-- Circuit style switch -->
        <span
          class="switch-wrapper"
          @click="click"
        >
          <div
            class="switch"
            @click="click"
          ></div>
        </span>

        <!-- Battery -->
        <span class="battery">
          <div class="top"></div>
          <div class="blank-space"></div>
          <div class="bottom"></div>
        </span>

        <!-- Bulb -->
        <div class="bulb-wrapper">
          <div class="bulb-blank"></div>
          <div class="bulb-blank other"></div>
          <img
            src="./../assets/bulb.svg"
            alt=""
            class="bulb"
          />
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/home.scss"
</style>


<script>
export default {
  name: "home",
  methods: {
    click() {
      if (!this.isMobile())
        document
          .querySelector(".switch-wrapper .switch")
          .classList.add("clicked");
      console.log("clickity click time to go");
      setTimeout(() => {
        this.$router.push("hub");
      }, 600);
    }
  }
};
</script>