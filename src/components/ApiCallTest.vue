<template>
  <button @click="fetchResults" />
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default {
  data() {
    return {
      value: null
    }
  },

  methods: {
    async fetchResults(){
      const response = await axios.get('http://localhost:3000/data')
      this.value = response.data.value
      this.value = 'value'
    }
  }
}
</script>