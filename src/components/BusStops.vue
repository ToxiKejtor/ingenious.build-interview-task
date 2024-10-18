<template>
  <div class="bus-stops">
    <ListItems
      v-if="stops?.length"
      sortable
      :title="title"
      subtitle="Bus Stops"
      :items="stops"
      @item-selected="onStopSelected"
    />
    <PlaceKeeper v-else message="Please select the bus line first" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import ListItems from "@/components/ListItems.vue";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const selectedLine = computed(() => store.state.selected.line);
const title = computed(() => `Bus line: ${selectedLine.value}`);
const stops = computed(() => store.getters.sortedStops);

function onStopSelected(stop: string) {
  store.commit(MutationTypes.SET_SELECTED, { stop });
}
</script>
<style scoped>
.bus-stops {
  height: 300px;
}
</style>
