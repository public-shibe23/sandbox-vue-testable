<template>
  <div>
    <ProductList :products="products" @fetch="fetchProducts"/>
    <button @click="onclick">ckick</button>
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
    products: state => state.ProductList.products,
  }),
  methods: {
    fetchProducts() {
      this.$store.dispatch("ProductList/FETCH_PRODUCTS");
    },

    getTotal(products) {
      return products.reduce((accum, current) => {
        accum + current;
      });
    },

    onclick() {
      console.log(this.$store);
    }
  }
};
</script>
