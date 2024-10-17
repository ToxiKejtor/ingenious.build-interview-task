<template>
  <div class="container bg-white">
    <h2>Select Bus Line</h2>
    <BusLines />
  </div>
</template>

<script setup lang="ts">
import BusLines from "@/components/BusLines.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchStops");
});
</script>

<style scoped></style>
