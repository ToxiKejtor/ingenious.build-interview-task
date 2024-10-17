<template>
  <div class="container bg-white">
    <h2>Select Bus Line</h2>
    <ul class="btn-group">
      <li v-for="(value, key) in busLines" :key="key">
        <button class="btn btn-primary m-2">{{ key }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const busLines = computed(() => store.state.busLines);

onMounted(async () => {
  await store.dispatch("fetchStops");
});
</script>

<style scoped></style>
