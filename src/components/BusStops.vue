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
import { computed, defineProps } from "vue";
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import ListItems from "@/components/ListItems.vue";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const props = defineProps<{
  all?: boolean;
}>();

const selectedLine = computed(() => store.state.selectedLine);
const title = computed(() => `Bus line: ${selectedLine.value}`);
const stops = computed(() =>
  props.all ? store.getters.sortedAllStops : store.getters.sortedStops
);

function onStopSelected(stop: string) {
  store.commit(MutationTypes.SET_SELECTED_STOP, stop);
}

function onSortChange() {
  store.commit(MutationTypes.SET_STOPS_SORT_ASC, !store.state.stopsSortAsc);
}
</script>
<style scoped>
.bus-stops {
  height: 300px;
}
</style>
