<template>
  <div class="home">

    <!-- Mobile Version -->
    <div v-if="isMobile()">nigga we mobile</div>

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

        <div class="circles">
          <span class="tl"></span>
          <span class="tr"></span>
          <span class="bl"></span>
          <span class="br"></span>
          <span class="lmt"></span>
          <span class="lmb"></span>
        </div>

        <div class="blanks">
          <span
            class="switch"
            @click="click"
          ></span>
          <span class="lamp"></span>
          <span class="battery"></span>
          <span class="bulb"></span>
        </div>

        <div class="things">
          <div
            class="label"
            @click="click"
          >BEGIN</div>
          <span
            class="switch"
            @click="click"
          ></span>
          <span class="battery">
            <div class="top"></div>
            <div class="bottom"></div>
          </span>
        </div>

        <!-- <img
          class="circuit-img"
          src="./../assets/circuit.svg"
          alt=""
        /> -->

        <img
          src="./../assets/bulb.svg"
          alt=""
          class="bulb"
        />

      </div>
    </div>

  </div>
</template>

<script>
import "@/styles/home.scss";
export default {
  name: "home",
  methods: {
    click() {
      // go to hub
      document.querySelector(".things .switch").classList.add("clicked");
      console.log("clickity click");
    }
  }
};
</script>

