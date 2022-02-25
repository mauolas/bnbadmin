<template>
  <div id="nav">
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
