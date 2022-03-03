<template>
  <div id="nav">
    <img
      src="https://storage.googleapis.com/bnbadmin/Fotos/logo.png"
      alt="logo"
      class="imagen2"
    />
    <div class="conti"></div>
    <router-link id="logo" to="/">Home</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<style lang="css">
#nav .active-link {
  color: white;
  border-bottom: 1px solid brown;
}
</style>

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
  width: 200px;
  height: 150px;
  background-size: cover;
}
.conti {
  width: 50px;
}
</style>
