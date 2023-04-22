import { createRouter, createWebHistory } from "vue-router";

// @ts-ignore
import Home from "@/views/Home.vue";
// @ts-ignore
import Team from "@/views/Team.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/team",
        name: "Team",
        component: Team,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;