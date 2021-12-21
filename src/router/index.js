import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import ProductPurchase from "@/views/ProductPurchase";
import ProductSell from "@/views/ProductSell";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productPurchase",
    name: "ProductPurchase",
    component: ProductPurchase,
  },
  {
    path: "/productSell",
    name: "ProductSell",
    component: ProductSell,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
