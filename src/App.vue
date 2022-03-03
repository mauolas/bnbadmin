<template>
  <TheNavegation />
  <p class="nave"></p>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
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
</style>
