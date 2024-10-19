<template>
  <div class="bus-lines px-4 pt-4 pb-3 bg-white rounded">
    <h2 class="mb-2">Select Bus Line</h2>
    <ul
      v-if="isLoaded"
      class="btn-group m-0 flex-wrap bus-lines__ul list-unstyled pt-4"
    >
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
    <ul v-else class="btn-group m-0 flex-wrap bus-lines__ul list-unstyled pt-4">
      <li v-for="n in 11" :key="n">
        <button
          class="btn px-4 py-2 btn-primary me-2 mb-2 placeholder"
          disabled
        ></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutations";
import { colors } from "@/styles/variables";
import { Status } from "@/types";

const store = useStore();

const busLines = computed(() => store.state.busLines);
const selectedLine = computed(() => store.state.selected.line);
const isLoaded = computed(() => store.state.status === Status.Loaded);

function onLineClick(line: number) {
  store.commit(MutationTypes.SET_SELECTED, { line, stop: "" });
}
</script>

<style scoped>
.btn {
  font-weight: 500;
}
.btn-primary {
  background-color: v-bind(colors.blue1);
  border-color: v-bind(colors.blue1);
}
.btn-primary.active,
.btn.btn-primary:hover {
  background-color: v-bind(colors.blue2);
  border-color: v-bind(colors.blue2);
}

.bus-lines__ul {
  padding: 0;
}
</style>
