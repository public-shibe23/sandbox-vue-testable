<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-6">
        <ProductList :products="products" @fetch="fetchProducts"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    ProductList
  },
  computed: mapState({
    products: state => state.ProductList.products
  }),
  methods: {
    fetchProducts() {
      this.$store.dispatch("ProductList/FETCH_PRODUCTS");
    }
  }
};
</script>

<style scoped>
.inner {
  margin: 2em 0;
}
</style>
