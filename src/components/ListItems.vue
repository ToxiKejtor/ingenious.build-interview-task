<template>
  <div class="list-items">
    <div>sortAsc: {{ sortAsc }}</div>
    <div v-if="props.searchable">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <div v-if="computedItems.length">
      <h3 v-if="title">{{ title }}</h3>
      <div
        class="list-items__sort d-flex align-items-center border-none"
        @click="sortable ? (sortAsc = !sortAsc) : () => {}"
      >
        <span>{{ subtitle }}</span> <IconSort v-if="sortable" />
      </div>
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
import { computed, defineEmits, defineProps, ref } from "vue";
import { useDebounce } from "@/composables/debounce";
import IconSort from "@/components/IconSort.vue";

const props = defineProps<{
  title?: string;
  subtitle: string;
  items: string[];
  sortable?: boolean;
  searchable?: boolean;
}>();
const sortAsc = ref(true);
const activeItem = ref("");
const search = ref("");
const debouncedSearch = useDebounce(search, 300);

const computedItems = computed(() => {
  let items = props.items;
  if (debouncedSearch.value) {
    items = items.filter((item) =>
      item.toLowerCase().includes(debouncedSearch.value.toLowerCase())
    );
  }
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
.list-items__sort {
  cursor: pointer;
}
</style>
