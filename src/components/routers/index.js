import { createRouter, createWebHistory } from "vue-router";
import AppMain from "../AppMain.vue";
import HelloWorld from "../feature/HelloWorld.vue";

const routes = [
    {path : '/' , component : AppMain},
    {path : '/HelloWorld' , component : HelloWorld}
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;