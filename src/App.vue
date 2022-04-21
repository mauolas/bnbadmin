<template>
  <div><TheNavegation /></div>
  <div class="div-img" v-if="routerConfig()">
    <div style="height: 30%"></div>
    <div class="div-title">
      <h1 class="title1">Servicios de excelencia en la renta de inmuebles</h1>
      <img
        src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/logo/logo_transparent_background.png"
        alt="logo"
        width="350"
        height="350"
      />
    </div>
    <p class="nave"></p>
  </div>
  <p class="nave"></p>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <div :key="$route.name">
          <component :is="Component" :key="$route.path"></component>
        </div>
      </transition>
    </router-view>
  </div>
  <div><TheFooter /></div>
</template>

<script>
import TheNavegation from "@/components/TheNavegation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheNavegation, TheFooter },
  methods: {
    routerConfig() {
      console.log(this.$route.path);
      return this.$route.path === "/";
    },
  },
};
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.nave {
  height: 100px;
}
.div-img {
  background-image: url("https://storage.googleapis.com/bnbadmin/Fotos/departamentoportada.jpg");
  background-size: cover;
  height: 900px;
  width: 100%;
}
.div-title {
  grid-template-rows: 50%;
  text-align: center;
}
.title1 {
  font-family: sans-serif;
  font-size: 50px;
  color: black;
}
.subtitle1 {
  font-family: sans-serif;
  font-size: 30px;
  color: black;
}
</style>
