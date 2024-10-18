<template>
  <div class="bus-times rounded overflow-hidden">
    <ListItems
      v-if="showTimes && times?.length"
      :title="title"
      subtitle="Time"
      :items="times"
      @item-selected="onTimeSelected"
    />

    <PlaceKeeper v-else message="Please select the bus stop first" />
  </div>
</template>

<script setup lang="ts">
import PlaceKeeper from "@/components/PlaceKeeper.vue";
import ListItems from "@/components/ListItems.vue";
import { useStore } from "@/store/store";
import { computed } from "vue";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const selectedStop = computed(() => store.state.selected.stop);

const title = computed(() => `Bus Stop: ${selectedStop.value}`);
const showTimes = computed(
  () => store.state.selected.stop !== "" && store.state.selected.line
);
const times = computed(() => store.getters.sortedTimes);

function onTimeSelected(time: string) {
  store.commit(MutationTypes.SET_SELECTED, { time });
}
</script>
<style scoped>
.bus-times {
  height: 444px;
}
</style>
