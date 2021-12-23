import productService from "@/services/productService";
import router from "@/router";

const state = {
  products: [],
};
const getters = {
  // _getProducts(state) {
  //   return state.products;
  // },
  // _getProduct(state) {},
};
const mutations = {
  SET_PRODUCT_LIST(state, product) {
    state.products.push(product);
  },
};
const actions = {
  // initApp({ commit }) {
  //   // axios işlemleri
  // },
  saveProduct({ commit, dispatch }, payload) {
    productService.postProduct(payload).then((res) => {
      console.log("res save product action", res);
      commit("SET_PRODUCT_LIST", res.data);

      let tradeResult = {
        purchase: payload.price,
        sale: 0,
        count: payload.count,
      };

      dispatch("setTradeResult", tradeResult);
      router.replace("/");
    });
  },
  // sellProduct({ commit }, payload) {
  //   // axios satış
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
