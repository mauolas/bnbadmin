<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" alt="destination.name" />
    <p>{{ experience.description }}</p>
    <GoBack />
  </section>
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
export default {
  components: { GoBack },
  props: {
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>
