<template>
  <div>
    <section v-if="destination" class="destination">
      <div>
        <h2>Hello Department {{ $route.params.id }}</h2>
        <h1>{{ destination.name }}</h1>
        <GoBack />
        <div class="destination-details">
          <img
            :src="`${destination.image[0]}`"
            alt="destination.name"
            class="img"
          />
          <p>{{ destination.description }}</p>
        </div>
      </div>
    </section>
    <VuePictureSwipe :items="items"></VuePictureSwipe>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
import VuePictureSwipe from "vue-picture-swipe";
export default {
  components: {
    ExperienceCard,
    GoBack,
    VuePictureSwipe,
  },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
  methods: {
    cambiar() {
      console.log("Chavez chupa pilin");
      this.gallery = this.gallery + 1;
    },
  },
  beforeMount() {
    this.globalId = sourceData.destinations.find(
      (destination) => destination.id === this.id
    );
    for (let items in this.globalId.image) {
      this.items[items].src = this.globalId.image[items];
    }
    for (let items in this.globalId.image) {
      this.items[items].thumbnail = this.globalId.images64[items];
    }
  },
  data() {
    return {
      pictureArray: "",
      globalId: 0,
      items: [
        {
          src: "http://via.placeholder.com/64x64",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 600,
          h: 400,
          alt: "some numbers on a grey background", // optional alt attribute for thumbnail image
        },
        {
          src: "https://storage.googleapis.com/bnbadmin/Fotos/Acapulco/acapulco.jpg",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 600,
          h: 400,
        },
        {
          src: "https://storage.googleapis.com/bnbadmin/Fotos/Acapulco/acapulco.jpg",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 600,
          h: 400,
        },
        {
          src: "https://storage.googleapis.com/bnbadmin/Fotos/Acapulco/acapulco.jpg",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 600,
          h: 400,
        },
      ],
      gallery: 0,
    };
  },
};
</script>

<style lang="css">
.img {
  float: left;
  width: 500px;
  height: 400px;
  background-size: cover;
}
</style>
