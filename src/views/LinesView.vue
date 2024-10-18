<template>
  <div>
    <BusLines />
    <div class="py-3">
      <div class="row">
        <div class="col">
          <BusStops />
        </div>
        <div class="col">
          <BusTimes />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BusLines from "@/components/BusLines.vue";
import BusStops from "@/components/BusStops.vue";
import BusTimes from "@/components/BusTimes.vue";
</script>

<style scoped></style>
