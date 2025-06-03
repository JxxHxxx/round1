import { createRouter, createWebHistory } from "vue-router";
import AppMain from "../AppMain.vue";
import HelloWorld from "../feature/HelloWorld.vue";
import MyRolePage from "../page/confirm/MyRolePage.vue";

const routes = [
    {path : '/' , component : AppMain},
    {path : '/HelloWorld' , component : HelloWorld},
    {path : '/comfirm', component : MyRolePage}
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;