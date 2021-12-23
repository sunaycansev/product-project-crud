<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <table
            v-if="_getProducts.length"
            class="table table-hover table-striped table-bordered"
          >
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="product in _getProducts" :key="product.id">
                <td class="align-middle text-center">
                  <span class="badge bg-info"> {{ product.id }}</span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td
                  class="align-middle text-center"
                  :class="getCountClass(product.count)"
                >
                  {{ product.count }}
                </td>
                <td style="width: 120px">
                  {{ product.price | currencyFormat }}
                </td>
                <td class="align-middle">{{ product.description }}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br />
            <small
              >Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["_getProducts"]),
  },
  methods: {
    getCountClass(count) {
      return {
        "bg-danger text-light": count === 0 || count === null,
        "bg-success text-light": count > 0,
      };
    },
  },
};
</script>

<style scoped></style>
