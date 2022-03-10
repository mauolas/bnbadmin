<template>
  <div id="nav" class="grid">
    <div>
      <img
        src="https://storage.googleapis.com/bnbadmin/Fotos/logo.png"
        alt="logo"
        class="imagen2"
      />
    </div>
    <div class="conti"></div>
    <div style="text-align: right">
      <router-link id="logo" style="color: black" to="/">Home</router-link>
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
  width: 200px;
  height: 150px;
  background-size: cover;
}
.conti {
  width: 50%;
  color: black;
}
#nav .active-link {
  color: white;
  border-bottom: 1px solid brown;
}
.grid {
  display: grid;
  grid-template-columns: 20% 20% 60%;
}
</style>
