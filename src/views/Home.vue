<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ApiCallTestable />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ApiCallTestable from "@/components/ApiCallTestable.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    ApiCallTestable
  }
};
</script>
