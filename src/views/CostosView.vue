<template>
  <div class="grid grid-cols-6 gap-4">
    <TarjetaLegend class="mt-8" />
    <TarjetaInmortal class="mb-8" />
  </div>
</template>

<script>
import TarjetaLegend from "@/components/tarjetas_costos/TarjetaLegend.vue";
import TarjetaInmortal from "@/components/tarjetas_costos/TarjetaInmortal.vue";

export default {
  components: { TarjetaLegend, TarjetaInmortal },
};
</script>
