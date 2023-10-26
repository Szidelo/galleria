import { createRouter, createWebHistory } from "vue-router";
import GalleriaPage from "./pages/GalleriaPage.vue";
import PaintingPage from "./pages/PaintingPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/galleria", },
        { path: "/galleria", component: GalleriaPage},
        { path: "/galleria/:paintId", component: PaintingPage}
    ]
});

export default router;