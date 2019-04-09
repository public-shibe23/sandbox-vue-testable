<template>
  <div>
    <div class="field">
      <button class="button is-primary is-outlined" @click="fetch">Search</button>
    </div>
    <table class="table is-fullwidth" v-if="products.length">
      <tr>
        <th>
          <abbr title="ID">ID</abbr>
        </th>
        <th>
          <abbr title="Name">Name</abbr>
        </th>
        <th>
          <abbr title="Stock">Stock</abbr>
        </th>
        <th>
          <abbr title="Price">Price</abbr>
        </th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.stock }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => {}
    }
  },

  methods: {
    fetch() {
      this.$emit("fetch");
    }
  }
};
</script>
