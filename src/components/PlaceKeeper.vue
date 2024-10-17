<template>
  <div
    class="bg-white placekeeper d-flex justify-content-center align-items-center h-100 w-100"
  >
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  message: string;
}>();
</script>

<style scoped>
.placekeeper {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>
