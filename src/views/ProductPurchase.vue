<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h3>Ürün İşlemleri</h3>
            <hr />
            <div class="form-group">
              <label>Ürün Adı</label>
              <input
                v-model="productData.title"
                type="text"
                class="form-control"
                placeholder="Ürün adını giriniz.."
              />
            </div>
            <div class="form-group">
              <label>Adet</label>
              <input
                v-model="productData.count"
                type="number"
                class="form-control"
                placeholder="Ürün adetini giriniz.."
              />
            </div>
            <div class="form-group">
              <label>Fiyat</label>
              <input
                v-model="productData.price"
                type="number"
                class="form-control"
                placeholder="Ürün fiyatı giriniz.."
              />
            </div>
            <div class="form-group">
              <label>Açıklama</label>
              <textarea
                v-model="productData.description"
                cols="30"
                rows="5"
                placeholder="Ürüne ait bir açıklama giriniz..."
                class="form-control"
              ></textarea>
            </div>
            <hr />
            <button class="btn btn-primary" @click="saveProduct">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default {
  name: "ProductPurchase",
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.productData);
      // eslint-disable-next-line no-debugger
      debugger;
      // Object.keys(this.productData).forEach(
      //   (field) => (this.productData[field] = null)
      // );
    },
  },
  data() {
    return {
      productData: {
        title: null,
        count: null,
        price: null,
        description: null,
      },
    };
  },
  components: { Footer, Header },
};
</script>

<style scoped></style>
