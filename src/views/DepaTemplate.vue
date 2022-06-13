<template>
  <section>
    <div class="rows22">
      <div>
        <h2>Tabla de keywords</h2>
        <div class="wrapp">
          <div v-for="keypoint in keypoints" :key="keypoint" class="boxita2">
            {{ keypoint }}
          </div>
        </div>
        <div class="myDiv2"></div>
        <div>
          <p>{{ experience.description }}</p>
          <div class="myDiv2"></div>
          <a :href="link" target="_blank" rel="noopener noreferrer"
            >Link Airbnb: {{ link }}</a
          >
          <div class="myDiv2"></div>
          <GoBack />
        </div>
      </div>
      <div class="section-1">
        <h1>{{ experience.name }}</h1>
        <img
          :src="`${experience.image[0]}`"
          alt="destination.name"
          class="img-depa"
        />
        <div class="section-1"></div>
      </div>
    </div>
    <div class="myDiv"></div>
    <VuePictureSwipe :items="items"></VuePictureSwipe>
  </section>
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
import VuePictureSwipe from "vue-picture-swipe";
export default {
  components: { GoBack, VuePictureSwipe },
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
  beforeMount() {
    this.actual_exp = this.destination.experiences.find(
      (experience) => experience.slug === this.experienceSlug
    );
    console.log(this.actual_exp);
    this.link = this.actual_exp.airbnb;
    for (let items in this.actual_exp.image) {
      this.items[items].src = this.actual_exp.image[items];
      this.items[items].thumbnail = this.actual_exp.image64[items];
    }
    for (let items in this.actual_exp.keypoints) {
      this.keypoints.push(this.actual_exp.keypoints[items]);
    }
  },
  data() {
    return {
      actual_exp: "",
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
      keypoints: [],
      link: "",
    };
  },
};
</script>

<style lang="css">
.img-depa {
  width: 600px;
  height: 400px;
  background-size: cover;
  align-content: center;
  float: center;
}
.section-1 {
  display: inline-block;
  text-align: center;
  align-content: center;
}
.myDiv {
  border: 1px outset rgb(8, 8, 8);
  background-color: black;
  text-align: center;
}
.myDiv2 {
  text-align: center;
  padding-top: 4px;
}
.keypoints {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: medium;
  font-weight: bold;
}
.wrapp {
  display: grid;
  grid-template-columns: 45% 45%;
}
.boxita2 {
  background-color: rgba(148, 212, 228, 0.582);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
  font-size: 15px;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.rows22 {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
