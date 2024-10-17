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
import { useStore } from "vuex";

const store = useStore();

const busLines = computed(() => store.state.busLines);
const selectedLine = computed(() => store.state.selectedLine);

function onLineClick(line: number) {
  store.commit("setSelectedLine", line);
}

onMounted(async () => {
  await store.dispatch("fetchStops");
});
</script>

<style scoped></style>
