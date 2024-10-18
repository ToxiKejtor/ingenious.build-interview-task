<template>
  <div class="bus-times">
    <div v-if="showTimes">
      <div v-if="times.length">
        <h3>Bus times: {{ selectedStop }}</h3>

        <button
          class="btn d-flex align-items-center border-none"
          @click="sortAsc = !sortAsc"
        >
          <span>Bus Stops</span> <IconSort />
        </button>
        <ul class="list-group">
          <li
            class="list-group-item bus-times__li"
            :class="{ active: value === selectedTime }"
            v-for="(value, key) in times"
            :key="key"
            @click="onTimeClick(value)"
          >
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <PlaceKeeper v-else message="Please select the bus line first" />
  </div>
</template>

<script setup lang="ts">
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import { useStore } from "@/store";
import { computed, ref } from "vue";
import IconSort from "@/components/IconSort.vue";
const store = useStore();

const sortAsc = ref(true);

const selectedStop = computed(() => store.state.selectedStop);
const showTimes = computed(
  () => store.state.selectedStop !== "" && store.state.selectedLine
);
const times = computed(() => {
  const times =
    store.state.busLines[store.state.selectedLine][store.state.selectedStop];
  return sortAsc.value ? times.sort() : times.sort().reverse();
});

function onTimeClick(time: string) {
  store.commit("setSelectedTime", time);
}
</script>
<style scoped>
.bus-times {
  height: 300px;
}

.bus-times__li {
  cursor: pointer;
}
</style>
