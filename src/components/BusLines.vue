<template>
  <div class="bus-lines px-4 pt-4 pb-3 bg-white rounded">
    <h2 class="mb-2">Select Bus Line</h2>
    <ul class="btn-group m-0 flex-wrap bus-lines__ul list-unstyled pt-4">
      <li v-for="(value, key) in busLines" :key="key">
        <button
          class="btn px-3 py-2 btn-primary me-2 mb-2"
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
import { computed } from "vue";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutations";

const store = useStore();

const busLines = computed(() => store.state.busLines);
const selectedLine = computed(() => store.state.selected.line);

function onLineClick(line: number) {
  store.commit(MutationTypes.SET_SELECTED, { line, stop: "" });
}
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
