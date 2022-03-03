<template>
  <section>
    <div class="section-1">
      <h1>{{ experience.name }}</h1>
      <img
        :src="`/images/${experience.image}`"
        alt="destination.name"
        class="img-depa"
      />
      <p>{{ experience.description }}</p>
      <GoBack />
      <div class="section-1"></div>
    </div>
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

<style lang="css">
.img-depa {
  float: left;
  width: 500px;
  height: 400px;
  background-size: cover;
}
.section-1 {
  display: inline-block;
}
</style>
