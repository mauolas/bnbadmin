<template>
  <div><TheNavegation /></div>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <div :key="$route.name">
          <component :is="Component" :key="$route.path"></component>
        </div>
      </transition>
    </router-view>
  </div>
  <div><TheFooter /></div>
</template>

<script>
import TheNavegation from "@/components/TheNavegation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheNavegation, TheFooter },
};
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.nave {
  height: 100px;
}
.title1 {
  font-family: sans-serif;
  font-size: 50px;
  color: black;
}
.subtitle1 {
  font-family: sans-serif;
  font-size: 30px;
  color: black;
}
</style>
