import { fetchProducts } from "../api";

const state = {
  products: []
};
const getters = {
  getAllProducts: state => {
    return state.products;
  }
};
const mutations = {
  SET_ITEMS: (state, payload) => {
    state.products = payload.products;
  }
};
const actions = {
  FETCH_PRODUCTS: async ({ commit }) => {
    const res = await fetchProducts();
    commit("SET_ITEMS", res.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
