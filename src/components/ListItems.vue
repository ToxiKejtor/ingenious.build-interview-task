<template>
  <div class="list-items d-flex flex-column rounded">
    <div v-if="props.searchable" class="flex-shrink-0">
      <div class="list-items__search bg-white p-2">
        <div class="list-items__search-group position-relative">
          <input
            class="list-items__search-input"
            type="text"
            id="example-search-input"
            placeholder="Search..."
            v-model="search"
          />
          <button
            class="list-items__search-input-btn position-absolute end-0 px-3 top-50 translate-middle-y"
            type="button"
          >
            <IconSearch />
          </button>
        </div>
      </div>
    </div>
    <div class="list-items__top bg-white p-4 flex-shrink-0">
      <h2 v-if="title" class="mb-2">{{ title }}</h2>
      <h3
        class="list-items__sort d-flex align-items-center border-none pt-4"
        @click="sortable ? (sortAsc = !sortAsc) : () => {}"
      >
        <span>{{ subtitle }}</span> <IconSort v-if="sortable" />
      </h3>
    </div>
    <ul class="list-items__ul list-unstyled flex-grow-1 overflow-auto">
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
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from "vue";
import { useDebounce } from "@/composables/debounce";
import IconSort from "@/icons/IconSort.vue";
import IconSearch from "@/icons/IconSearch.vue";

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
  height: 100%;
}

.list-items__top {
  margin-bottom: 2px;
}

.list-items__search-group {
  width: 288px;
  max-width: 100%;
}

.list-items__search-input {
  width: 100%;
  padding: 8px 32px 8px 8px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}

.list-items__ul {
  background-color: #f8f8fb;
  margin: 0;
}
.list-items__li {
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 19px;
  margin-bottom: 1px;
  background-color: white;
}
.list-items__li.active {
  color: #1952e1;
}
.list-items__li:hover {
  background-color: #f8f8fb;
}
.list-items__sort {
  cursor: pointer;
}
</style>
