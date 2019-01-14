<template>
  <div class="layout">

    <!-- Header Menu - HOME -->
    <header>
      <div
        class="home-btn"
        @click="home()"
      >
        <img
          src="./../assets/bulb.svg"
          alt=""
          class="bulb"
        >
        <div class="label">НАЧАЛО</div>
      </div>
      <div class="line"></div>
    </header>

    <!-- Entire Sidenav -->
    <div class="sidenav">

      <div class="title-wrapper">
        <div class="title">{{title}}</div>
        <div class="line"></div>
      </div>

      <div class="nav">
        <div
          v-for="link in links"
          :key="link.id"
          class="link"
          :ref="link.id"
          @click="select(link.id)"
        >
          <div class="name">{{link.name}}</div>
          <div class="inner-line"></div>
          <div class="outer-line"></div>
        </div>
      </div>

    </div>

    <!-- Main Content -->
    <main>
      <slot></slot>
    </main>

  </div>
</template>

<script>
export default {
  props: ["title", "links"],
  name: "page-layout",
  methods: {
    home() {
      this.$router.push("/");
    },
    select(tab) {
      this.deselect();
      this.$refs[tab][0].classList.add("selected");
      this.$emit("changeTab", tab);
    },
    deselect() {
      document.querySelectorAll(".link").forEach(link => {
        link.classList.remove("selected");
      });
    }
  },
  mounted() {
    let id = this.$props.links[0].id;
    this.select(id);
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout.scss";
</style>
