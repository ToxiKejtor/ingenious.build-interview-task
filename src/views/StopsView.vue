<template>
  <ListItems
    v-if="allStops?.length"
    sortable
    searchable
    subtitle="Bus Stops"
    :items="allStops"
  />
</template>

<script setup lang="ts">
import ListItems from "@/components/ListItems.vue";
import { useStore } from "@/store/store";
import { computed } from "vue";

const store = useStore();
const allStops = computed(() => store.getters.sortedAllStops);
</script>

<style scoped></style>
