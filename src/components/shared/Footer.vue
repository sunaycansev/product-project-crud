<template>
  <nav
    class="navbar fixed-bottom navbar-light"
    style="background-color: #e3f2fd"
  >
    <span class="navbar-text ms-3">
      <strong>sunay</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 me-3 nav-item">
      <strong>Alış Tutarı : </strong>
      <span class="badge bg-danger">{{
        _getTradeResult.purchase | currencyFormat
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 me-3 nav-item">
      <strong>Satış Tutarı : </strong>
      <span class="badge bg-success">{{
        _getTradeResult.sale | currencyFormat
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 nav-item me-3">
      <strong>Bakiye : </strong>
      <span class="badge bg-primary">{{
        _getTradeResult.balance | currencyFormat
      }}</span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["_getTradeResult"]),
  },
};
</script>

<style scoped></style>
