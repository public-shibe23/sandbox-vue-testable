import { fetchProducts } from "../api";

const store = {};
const getters = {};
const mutations = {
  SET_ITEMS: (state, { items }) => {
    state.items = items;
  }
};
const actions = {
  FETCH_PRODUCTS: async ({ commit }) => {
    const res = await fetchProducts();
    console.log(res.data);
    commit("SET_ITEMS", { res });
  }
};

export default {
  namespaced: true,
  store,
  getters,
  mutations,
  actions
};
