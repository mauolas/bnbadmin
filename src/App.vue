<template>
  <TheNavegation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavegation from "@/components/TheNavegation.vue";

export default {
  components: { TheNavegation },
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
</style>
