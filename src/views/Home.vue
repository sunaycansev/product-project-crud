<template>
  <div>
    <Header />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ProductList from "@/components/products/ProductList";

export default {
  name: "Home",

  components: {
    ProductList,
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
