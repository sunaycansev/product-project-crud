<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link
      :to="{ name: 'Home' }"
      class="navbar-brand ms-3"
      active-class="active"
      >Ürün Listesi</router-link
    >

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            :to="{ name: 'ProductPurchase' }"
            class="nav-link"
            active-class="active"
            >Ürün İşlemleri</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'ProductSell' }"
            class="nav-link"
            active-class="active"
            >Ürün Çıkışı</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
