<template>
  <div class="app__wrapper vh-100">
    <div class="app__container">
      <h1 class="pb-3">Timetable</h1>
      <nav class="px-4 bg-white rounded">
        <ul class="list-unstyled d-flex">
          <li v-for="route in routes" :key="route.path">
            <RouterLink
              class="text-decoration-none d-block router-link router-link--inactive"
              :to="route.path"
              :active-class="'router-link--active'"
              >{{ route.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/store";
import { ActionTypes } from "@/store/actions";
import { colors } from "@/styles/variables";

const router = useRouter();
const routes = computed(() => router.options.routes);
const store = useStore();

onMounted(async () => {
  await store.dispatch(ActionTypes.FETCH_STOPS);
});
</script>
<style>
html,
body {
  color: v-bind(colors.textPrimary);
}
.app__wrapper {
  background-color: v-bind(colors.grey1);
}
.app__container {
  padding: 40px 32px;
}

.router-link {
  padding: 20px 24px;
}

.router-link--inactive {
  color: v-bind(colors.grey3);
}
.router-link--active {
  border-bottom: 3px solid v-bind(colors.blue1);
  color: v-bind(colors.black);
}
</style>
