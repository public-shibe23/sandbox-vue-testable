<template>
  <div>
    <button @click="fetch">test!</button>
    <p v-for="product in products" :key="product.id">{{ product.name }}</p>
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
