<template>
  <div class="app__wrapper vh-100">
    <div class="app__container">
      <h1 class="pb-3">Timetable</h1>
      <nav class="px-4 bg-white rounded">
        <ul class="list-unstyled d-flex">
          <li v-for="route in routes" :key="route.path">
            <RouterLink
              class="text-decoration-none px-4 py-3 d-block router-link-inactive"
              :to="route.path"
              :active-class="'border-bottom border-primary border-3 router-link-active'"
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
const router = useRouter();
const routes = computed(() => router.options.routes);
const store = useStore();

onMounted(async () => {
  await store.dispatch(ActionTypes.FETCH_STOPS);
});
</script>
<style scoped>
.app__wrapper {
  background-color: #f3f4f9;
}
.app__container {
  padding: 40px 32px;
}
.app__title {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
}
.router-link-inactive {
  color: grey;
}
.router-link-active {
  color: #000;
}
</style>
