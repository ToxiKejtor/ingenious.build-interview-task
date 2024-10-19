<template>
  <div
    class="bg-white placekeeper d-flex justify-content-center align-items-center h-100 w-100 rounded"
  >
    <span class="placekeeper__message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { colors } from "@/styles/variables";
defineProps<{
  message: string;
}>();
</script>

<style scoped>
.placekeeper {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239A9DA4' stroke-width='4' stroke-dasharray='24%2c 30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
.placekeeper__message {
  color: v-bind(colors.grey4);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
</style>
