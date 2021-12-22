import productService from "@/services/productService";

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
    // eslint-disable-next-line no-debugger
    debugger;
    productService.postProduct(payload).then((res) => {
      console.log("res save product action", res);
      commit("SET_PRODUCT_LIST", res.data);
      // eslint-disable-next-line no-debugger
      debugger;
      let tradeResult = {
        purchase: payload.price,
        sale: 0,
        count: payload.count,
      };

      // eslint-disable-next-line no-debugger
      debugger;

      dispatch("setTradeResult", tradeResult);
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
