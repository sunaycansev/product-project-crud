import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/modules/product";
import tradeService from "@/services/tradeService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    purchase: 0.0,
    sale: 0.0,
    balance: 0.0,
  },
  getters: {
    _getTradeResult(state) {
      return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance,
      };
    },
  },
  mutations: {
    SET_TRADE_RESULT(state, payload) {
      if (payload.count) {
        state.purchase +=
          parseFloat(payload.purchase) * parseInt(payload.count);
        state.sale += parseFloat(payload.sale) * parseInt(payload.count);
      } else {
        state.purchase += parseFloat(payload.purchase);
        state.sale += parseFloat(payload.sale);
      }
      state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
    },
  },
  actions: {
    setTradeResult({ commit, state }, payload) {
      // eslint-disable-next-line no-debugger
      debugger;
      commit("SET_TRADE_RESULT", payload);

      let tradeData = {
        purchase: state.purchase,
        sale: state.sale,
      };
      // eslint-disable-next-line no-debugger
      debugger;
      tradeService.updateTradeResult(tradeData).then((res) => {
        console.log("res in trade update action", res);
      });
      // eslint-disable-next-line no-debugger
      debugger;
    },
    getTradeResult({ commit }) {
      tradeService.getTradeResult().then((res) => {
        console.log(res);
        commit("SET_TRADE_RESULT", res.data);
      });
    },
  },
  modules: {
    product,
  },
});
