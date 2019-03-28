<template>
  <div>
    <button @click="fetch">test!</button>
    <p>{{value}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: null
    };
  },

  methods: {

    fetch() {
      this.$store.dispatch('ApiCallTest/FETCH_PRODUCTS');
    }
  }
};
</script>
