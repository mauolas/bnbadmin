<template>
  <div id="nav" class="grid">
    <div>
      <img
        src="https://storage.googleapis.com/bnbadmin/Fotos/fotos-pagina/logo/logo_transparent_background.png"
        alt="logo"
        class="imagen2"
      />
    </div>
    <div class="conti"></div>
    <div style="text-align: right">
      <router-link id="logo" style="color: black" to="/">Home</router-link>
      <router-link id="logo2" style="color: black" to="/funcion">
        ¿Cómo funciona?</router-link
      >
      <router-link style="color: black" to="/destinos">
        Nuestros destinos</router-link
      >
      <router-link style="color: black" to="/costos">Costos</router-link>
      <!--
      <router-link
        style="color: black"
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        {{ destination.name }}
      </router-link>
      -->
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
.imagen2 {
  float: left;
  width: 150px;
  height: 150px;
  background-size: cover;
}
.conti {
  width: 50%;
  color: black;
}
#nav .active-link {
  color: white;
}
.grid {
  display: grid;
  grid-template-columns: 20% 20% 60%;
}
.logo2 {
  font-weight: bold;
  font-size: 1.5rem;
  opacity: 1 !important;
  color: black;
  border-bottom: 1px solid brown;
}
</style>
