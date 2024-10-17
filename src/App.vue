<template>
  <div class="bg-light vh-100">
    <div class="container">
      <h1>Timetable</h1>
      <nav class="container-fluid bg-white">
        <ul class="list-unstyled d-flex">
          <li v-for="route in routes" :key="route.path">
            <RouterLink
              class="text-decoration-none px-4 py-3 d-block"
              :to="route.path"
              :active-class="'border-bottom border-primary border-3'"
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
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const routes = computed(() => router.options.routes);
</script>
