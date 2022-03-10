<template>
  <div class="card">
    <img
      :src="`${experience.image[0]}`"
      :alt="experience.name"
      class="cardigan"
    />
    <span class="card_text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    experience: { type: Object, required: true },
  },
};
</script>

<style lang="css">
.cardigan {
  width: 500px;
  height: 400px;
  background-size: cover;
}
</style>
