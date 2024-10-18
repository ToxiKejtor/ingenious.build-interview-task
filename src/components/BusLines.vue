<template>
  <div class="bus-lines p-4 bg-white">
    <h2 class="mb-2">Select Bus Line</h2>
    <ul class="btn-group bus-lines__ul list-unstyled pt-4">
      <li v-for="(value, key) in busLines" :key="key">
        <button
          class="btn px-3 py-2 btn-primary me-2"
          :class="{ active: key === selectedLine }"
          @click="onLineClick(key)"
        >
          {{ key }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutations";
import { ActionTypes } from "@/store/actions";

const store = useStore();

const busLines = computed(() => store.state.busLines);
const selectedLine = computed(() => store.state.selected.line);

function onLineClick(line: number) {
  store.commit(MutationTypes.SET_SELECTED, { line, stop: "" });
}

onMounted(async () => {
  await store.dispatch(ActionTypes.FETCH_STOPS);
});
</script>

<style scoped>
.btn {
  font-weight: 500;
}
.btn-primary {
  background-color: #1952e1;
  border-color: #1952e1;
}
.btn-primary.active {
  background-color: #2e3e6e;
  border-color: #2e3e6e;
}

.bus-lines__ul {
  padding: 0;
}
</style>
