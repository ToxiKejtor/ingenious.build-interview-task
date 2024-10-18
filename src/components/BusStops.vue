<template>
  <div class="bus-stops">
    <div v-if="stops.length">
      <h3>Bus line: {{ selectedLine }}</h3>

      <button
        class="btn d-flex align-items-center border-none"
        @click="sortAsc = !sortAsc"
      >
        <span>Bus Stops</span> <IconSort />
      </button>
      <ul class="list-group">
        <li
          class="list-group-item bus-stops__li"
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
import { computed, ref } from "vue";
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import { useStore } from "@/store/store";
import IconSort from "@/components/IconSort.vue";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const sortAsc = ref(true);

const selectedLine = computed(() => store.state.selectedLine);
const selectedStop = computed(() => store.state.selectedStop);
const stops = computed(() =>
  selectedLine.value
    ? sortAsc.value
      ? Object.keys(store.state.busLines[selectedLine.value]).sort()
      : Object.keys(store.state.busLines[selectedLine.value]).sort().reverse()
    : []
);

function onStopClick(stop: string) {
  store.commit(MutationTypes.SET_SELECTED_STOP, stop);
}
</script>
<style scoped>
.bus-stops {
  height: 300px;
}
.bus-stops__li {
  cursor: pointer;
}
</style>
