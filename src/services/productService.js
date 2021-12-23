import axios from "axios";

const productService = axios.create({
  baseURL: `http://localhost:3000`,
});

export default {
  postProduct(data) {
    return productService.post(`/products`, data);
  },
  getProducts() {
    return productService.get(`/products`);
  },
  sellProduct(id, data) {
    return productService.patch(`/products/${id}`, { count: data });
  },
};
