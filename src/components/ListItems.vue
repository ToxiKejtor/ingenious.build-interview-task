<template>
  <div class="list-items">
    <div v-if="computedItems.length">
      <h3>{{ title }}</h3>
      <button
        class="btn d-flex align-items-center border-none"
        @click="sortable ? (sortAsc = !sortAsc) : () => {}"
      >
        <span>{{ subtitle }}</span> <IconSort v-if="sortable" />
      </button>
      <ul class="list-group">
        <li
          class="list-group-item list-items__li"
          :class="{ active: value === activeItem }"
          v-for="(value, key) in computedItems"
          :key="key"
          @click="handleItemClick(value)"
        >
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import IconSort from "@/components/IconSort.vue";

const props = defineProps<{
  title: string;
  subtitle: string;
  items: string[];
  sortable?: boolean;
}>();
const sortAsc = ref(true);
const activeItem = ref("");

const computedItems = computed(() => {
  const items = props.items;
  return props.sortable
    ? sortAsc.value
      ? items.sort()
      : items.sort().reverse()
    : props.items;
});
const emit = defineEmits<{
  (e: "itemSelected", value: string): void;
}>();

function handleItemClick(value: string) {
  activeItem.value = value;
  emit("itemSelected", value);
}
</script>

<style scoped>
.list-items {
}
.list-items__li {
  cursor: pointer;
}
</style>
