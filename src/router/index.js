import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/opciones",
    name: "Opciones",
    component: () => import("../views/Opciones.vue")
  },
  {
    path: "/ganadores",
    name: "Ganadores",
    component: () => import("../views/Ganadores.vue")
  },
  {
    path: "/historial",
    name: "Historial",
    component: () => import("../views/Historial.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
