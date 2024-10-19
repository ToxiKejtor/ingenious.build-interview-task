<template>
  <div class="icon-sort px-2">
    <div class="icon-sort__top"></div>
    <div class="icon-sort__bottom"></div>
  </div>
</template>
<script setup lang="ts">
import { colors } from "@/styles/variables";
</script>
<style scoped>
.icon-sort {
  display: flex;
  flex-direction: column;
}

.icon-sort__top {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  border-bottom: 5px solid v-bind(colors.grey3);
  margin-bottom: 3px;
}

.icon-sort__bottom {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid v-bind(colors.grey3);
}
</style>
