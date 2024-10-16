import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LinesView from "@/pages/LinesView.vue";
import StopsView from "@/pages/StopsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LinesView
  },
  {
    path: '/stops',
    component: StopsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
