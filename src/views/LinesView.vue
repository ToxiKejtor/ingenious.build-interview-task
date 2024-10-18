<template>
  <div class="container bg-white">
    <h2>Select Bus Line</h2>
    <BusLines />
    <div class="container">
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
import { onMounted } from "vue";
import { useStore } from "@/store/store";
import { ActionTypes } from "@/store/actions";

const store = useStore();

onMounted(async () => {
  await store.dispatch(ActionTypes.FETCH_STOPS);
});
</script>

<style scoped></style>
