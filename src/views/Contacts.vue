<template>
  <div class="wrapper">

    <page-layout
      title="Проектиране, Консултации"
      v-if="!isMobile()"
      :links="links"
      @changeTab="tabHandler"
      class="desktop-layout"
    >
      <div class="tabs">

        <div
          v-if="check('location')"
          class="tab location"
        >
          <div class="title">Намерете ни тук</div>
          <div class="card ">
            <img
              src="./../assets/map.png"
              class="shadow"
            >
            <div class="button-wrapper">
              <span
                class="button"
                @click="map()"
              >към картата</span>
            </div>
          </div>
        </div>

        <div
          v-if="check('email')"
          class="tab email-tab"
        >
          <div class="title">Пишете ни</div>
          <div class="card">

            <form @submit.prevent="submit()">
              <input
                type="text"
                class="form-item"
                value="energy_pro_consult@abv.bg"
                disabled
              >
              <input
                type="text"
                class="form-item"
                placeholder="Заглавие"
                v-model="subject"
              >
              <textarea
                class="form-item"
                placeholder="Съобщение"
                v-model="body"
              ></textarea>
              <div class="button-wrapper">
                <span
                  class="button"
                  @click="submit()"
                >изпрати</span>
              </div>
            </form>

          </div>
        </div>

        <div
          v-if="check('tel')"
          class="tab tel-tab"
        >
          <div class="title">Обадете ни се</div>
          <div class="tel">0886695795</div>
          <div class="button-wrapper">
            <span
              class="button"
              @click="call()"
            >позвъни сега</span>
          </div>
        </div>

      </div>
    </page-layout>

    <mobile-layout
      title="Контакти"
      v-if="isMobile()"
      class="mobile-layout"
    >
      <div class="tabs">
        <div class="tab location">
          <div class="title">Намерете ни тук</div>
          <div class="card ">
            <img
              src="./../assets/map.png"
              class="shadow"
            >
            <div class="button-wrapper">
              <span
                class="button"
                @click="map()"
              >към картата</span>
            </div>
          </div>
        </div>

        <div class="tab email-tab">
          <div class="title">Пишете ни</div>
          <div class="card">

            <form @submit.prevent="submit()">
              <input
                type="text"
                class="form-item"
                value="energy_pro_consult@abv.bg"
                disabled
              >
              <input
                type="text"
                class="form-item"
                placeholder="Заглавие"
                v-model="subject"
              >
              <textarea
                class="form-item"
                placeholder="Съобщение"
                v-model="body"
              ></textarea>
              <div class="button-wrapper">
                <span
                  class="button"
                  @click="submit()"
                >изпрати</span>
              </div>
            </form>

          </div>
        </div>

        <div class="tab tel-tab">
          <div class="title">Обадете ни се</div>
          <div class="tel">0886695795</div>
          <div class="button-wrapper">
            <span
              class="button"
              @click="call()"
            >позвъни сега</span>
          </div>
        </div>
      </div>
    </mobile-layout>

  </div>
</template>

<script>
import Layout from "./../components/Layout.vue";
import MobileLayout from "./../components/MobileLayout.vue";
export default {
  methods: {
    tabHandler(tab) {
      this.tab = tab;
    },
    check(tab) {
      return tab === this.tab || this.tab === "all";
    },
    map() {
      window.open(
        "https://www.google.com/maps/place/%D0%95%D0%BD%D0%B5%D1%80%D0%B4%D0%B6%D0%B8+%D0%9F%D1%80%D0%BE-%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%82/@42.0204461,23.0902634,18.08z/data=!4m5!3m4!1s0x0:0x1a04d65a6753f213!8m2!3d42.0197786!4d23.0898429",
        true
      );
    },
    submit() {
      let email = "go6oel@abv.bg";
      let link = `mailto:${email}?subject=${this.subject}&body=${this.body}`;
      window.location.href = link;
    },
    call() {
      window.location.href = "tel:0886695797";
    }
  },
  data() {
    return {
      tab: "",
      subject: "",
      body: "",
      links: [
        { id: "location", name: "Локация" },
        { id: "email", name: "Имейл" },
        { id: "tel", name: "Телефон" }
      ]
    };
  },
  components: { "page-layout": Layout, "mobile-layout": MobileLayout }
};
</script>

<style scoped lang="scss">
@import "./../styles/page-template.scss";
@import "./../styles/contacts.scss";
</style>


