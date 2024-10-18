<template>
  <div>
    <ul class="btn-group">
      <li v-for="(value, key) in busLines" :key="key">
        <button
          class="btn btn-primary m-2"
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

<style scoped></style>
