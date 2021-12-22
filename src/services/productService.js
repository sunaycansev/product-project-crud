import axios from "axios";

const productService = axios.create({
  baseURL: `http://localhost:3000`,
});

export default {
  postProduct(data) {
    // eslint-disable-next-line no-debugger
    debugger;
    return productService.post(`/products`, data);
  },
};
