<template>
  <div class="bus-times">
    <ListItems
      v-if="showTimes && times?.length"
      :title="title"
      subtitle="Time"
      :items="times"
      @item-selected="onTimeSelected"
    />

    <PlaceKeeper v-else message="Please select the bus line first" />
  </div>
</template>

<script setup lang="ts">
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import ListItems from "@/components/ListItems.vue";
import { useStore } from "@/store/store";
import { computed } from "vue";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const selectedStop = computed(() => store.state.selectedStop);

const title = computed(() => `Bus Stop: ${selectedStop.value}`);
const showTimes = computed(
  () => store.state.selectedStop !== "" && store.state.selectedLine
);
const times = computed(() => store.getters.sortedTimes);

function onSortChange() {
  store.commit(MutationTypes.SET_TIMES_SORT_ASC, !store.state.timesSortAsc);
}

function onTimeSelected(time: string) {
  store.commit(MutationTypes.SET_SELECTED_TIME, time);
}
</script>
<style scoped>
.bus-times {
  height: 300px;
}
</style>
