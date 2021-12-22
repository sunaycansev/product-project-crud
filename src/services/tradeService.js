import axios from "axios";

const tradeService = axios.create({
  baseURL: `http://localhost:3000`,
});

export default {
  updateTradeResult(payload) {
    return tradeService.put(`/trade-result`, payload);
  },
  getTradeResult() {
    return tradeService.get(`/trade-result`);
  },
};
