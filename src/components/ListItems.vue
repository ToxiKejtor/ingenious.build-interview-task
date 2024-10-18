<template>
  <div class="list-items rounded">
    <div v-if="props.searchable">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <div v-if="computedItems.length">
      <div class="list-items__top bg-white p-4">
        <h2 v-if="title" class="mb-2">{{ title }}</h2>
        <h3
          class="list-items__sort d-flex align-items-center border-none pt-4"
          @click="sortable ? (sortAsc = !sortAsc) : () => {}"
        >
          <span>{{ subtitle }}</span> <IconSort v-if="sortable" />
        </h3>
      </div>
      <ul class="list-items__ul list-unstyled">
        <li
          class="list-items__li px-4"
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

.list-items__top {
  margin-bottom: 2px;
}
.list-items__ul {
  background-color: #f8f8fb;
}
.list-items__li {
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 19px;
  margin-bottom: 1px;
  background-color: white;
}
.list-items__li.active,
.list-items__li:hover {
  background-color: #f8f8fb;
}
.list-items__sort {
  cursor: pointer;
}
</style>
