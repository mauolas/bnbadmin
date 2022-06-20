<template>
  <div class="destinos text-center w-10/12 m-auto text-xl">
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <br />
      <h2 class="m-auto">{{ destination.name }}</h2>
      <img
        :src="`${destination.image[0]}`"
        :alt="destination.name"
        class="img-home m-auto"
      />
    </router-link>
    <br />
    <br />
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
