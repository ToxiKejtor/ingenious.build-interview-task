<template>
  <div class="bus-stops">
    <div v-if="stops.length">
      <h3>Bus line: {{ selectedLine }}</h3>
      <ul class="list-group">
        <li
          role="button"
          class="list-group-item"
          :class="{ active: value === selectedStop }"
          v-for="(value, key) in stops"
          :key="key"
          @click="onStopClick(value)"
        >
          {{ value }}
        </li>
      </ul>
    </div>
    <PlaceKeeper v-else message="Please select the bus line first" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import { useStore } from "@/store";

const store = useStore();

const selectedLine = computed(() => store.state.selectedLine);
const selectedStop = computed(() => store.state.selectedStop);
const stops = computed(() =>
  selectedLine.value
    ? Object.keys(store.state.busLines[selectedLine.value])
    : []
);

function onStopClick(stop: string) {
  store.commit("setSelectedStop", stop);
}
</script>
<style scoped>
.bus-stops {
  height: 300px;
}
</style>
