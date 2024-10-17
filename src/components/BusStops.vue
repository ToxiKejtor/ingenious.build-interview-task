<template>
  <PlaceKeeper message="Please select the bus line first" />
  <div>{{ stops }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key);

const selectedLine = computed(() => store.state.selectedLine);
const stops = computed(() =>
  selectedLine.value
    ? Object.keys(store.state.busLines[selectedLine.value])
    : []
);
</script>
