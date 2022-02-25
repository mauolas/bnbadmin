<template>
  <TheNavegation />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheNavegation from "@/components/TheNavegation.vue";

export default {
  components: { TheNavegation },
};
</script>
