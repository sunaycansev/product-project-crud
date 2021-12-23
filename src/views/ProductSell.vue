<template>
  <div>
    <Header />

    <div class="container">
      <Footer />
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select
              class="form-control mb-2"
              v-model="selectedProduct"
              @change="productSelect"
            >
              <option
                v-for="product in _getProducts"
                :value="product.id"
                :key="product.id"
                :disabled="!(product.count > 0)"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="product !== null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge bg-info me-5 p-3"
                      >Stok : {{ product.count }}</span
                    >
                    <span class="badge bg-primary p-3"
                      >Fiyat : {{ product.price | currencyFormat }}</span
                    >
                  </div>
                  <p class="border border-warning p-2 text-secondary">
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="productCount"
              type="text"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <hr />
          <button :disabled="!saveEnable" class="btn btn-primary" @click="save">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { mapGetters } from "vuex";
export default {
  name: "ProductSell",
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      saveButtonClicked: false,
    };
  },
  methods: {
    productSelect() {
      this.product = this.$store.getters._getProduct(this.selectedProduct)[0];
    },
    save() {
      this.saveButtonClicked = true;
      let product = {
        id: this.selectedProduct,
        count: this.productCount,
      };
      this.$store.dispatch("sellProduct", product);
    },
  },
  components: { Footer, Header },
  computed: {
    ...mapGetters(["_getProducts"]),
    saveEnable() {
      return this.selectedProduct !== null && this.productCount > 0;
    },
  },
  beforeRouteLeave(to, from, next) {
    function beforeExit() {
      if (
        confirm(
          "Kaydedilmemiş değişikler var. Çıkmak istediğinize emin misiniz ?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    }
    if (
      (this.selectedProduct !== null || this.productCount > 0) &&
      !this.saveButtonClicked
    ) {
      beforeExit();
    } else {
      next();
    }
  },
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
