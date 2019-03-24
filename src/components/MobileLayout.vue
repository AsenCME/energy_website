<template>
  <div class="mobile-layout">

    <header>
      <div class="main-part">
        <div class="home-btn">
          <div
            class="button"
            @click="hub()"
          >
            <img
              class="bulb"
              src="./../assets/bulb.svg"
            />
            <div class="label">НАЧАЛО</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="title-wrapper">
          <div class="title"><span ref="title">{{title}}</span></div>
          <div
            class="line"
            ref="line"
          ></div>
        </div>
      </div>
      <img
        src="./../assets/pagehead_path.svg"
        class="path"
      />
    </header>

    <main>
      <slot></slot>
    </main>

  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "mobile-layout",
  methods: {
    hub() {
      this.$router.push("/hub");
    }
  },
  mounted() {
    let width = this.$refs.title.offsetWidth + 30;
    this.$refs.line.style.width = width + "px";
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/layout-mobile.scss";
</style>
