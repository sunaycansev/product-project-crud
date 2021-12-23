<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.15s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.15s ease-out;
  opacity: 0;
}
</style>
