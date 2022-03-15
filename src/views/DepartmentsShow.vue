<template>
  <div>
    <section v-if="destination" class="destination">
      <h1 class="title">{{ destination.name }}</h1>
      <div class="wrapp">
        <div style="overflow: hidden">
          <img
            :src="`${destination.image[0]}`"
            alt="destination.name"
            class="img"
          />
          <VuePictureSwipe :items="items"></VuePictureSwipe>
        </div>
        <div></div>
        <div class="center">
          <p class="text">{{ destination.description }}</p>
          <GoBack />
        </div>
      </div>
    </section>
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
  float: center;
  width: 500px;
  height: 400px;
  background-size: cover;
}
.title {
  text-transform: uppercase;
  text-align: center;
  font-size: xx-large;
}
.wrapp {
  display: grid;
  grid-template-columns: 50% 5% 45%;
}
.center {
  align-content: center;
}
.text {
  font-family: "BOSQUE", Montserrat;
  text-align: center;
  font-size: 20px;
  color: black;
  margin: 40px;
}
</style>
