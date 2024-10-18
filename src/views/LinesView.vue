<template>
  <div>
    <BusLines />
    <div class="py-3">
      <div class="row">
        <div class="col-lg">
          <BusStops />
        </div>
        <div class="col-lg mt-3 mt-lg-0">
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
