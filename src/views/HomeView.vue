<template>
  <div class="Home">
    <h1 class="text-title">Bnbadmin</h1>
    <p>
      Empresa mexicana enfocada en la renta de inmuebles, con la vision de
      automatizar el uso y administración de la aplicación Airbnb
    </p>
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img
          :src="`${destination.image[0]}`"
          :alt="destination.name"
          class="img-home"
        />
      </router-link>
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
.img-home {
  width: 500px;
  height: 400px;
  background-size: cover;
}
.text-title {
  text-align: center;
}
</style>
