import productService from "@/services/productService";
import router from "@/router";

const state = {
  products: [],
};
const getters = {
  _getProducts(state) {
    return state.products;
  },
  _getProduct: (state) => (id) => {
    return state.products.filter((prod) => prod.id === id);
  },
  // _getProduct(state) {},
};
const mutations = {
  SET_PRODUCT_LIST(state, product) {
    state.products.push(product);
  },
  INIT_PRODUCT_LIST(state, payload) {
    state.products = [...state.products, ...payload];
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
  sellProduct({ state, dispatch }, payload) {
    let product = state.products.filter((el) => el.id === payload.id);
    if (product) {
      let totalCount = product[0].count - payload.count;
      productService.sellProduct(product[0].id, totalCount).then(() => {
        product[0].count = totalCount;

        let tradeResult = {
          purchase: 0,
          sale: product[0].price,
          count: payload.count,
        };

        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      });
    }
  },
  getProducts({ commit }) {
    productService.getProducts().then(({ data }) => {
      console.log("product response =>", data);
      commit("INIT_PRODUCT_LIST", data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
