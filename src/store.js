import Vue from "vue";
import Vuex from "vuex";
import ApiCallTest from "./store/api_call_test";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    ApiCallTest
  }
});
