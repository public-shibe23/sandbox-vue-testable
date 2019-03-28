import { fetchProducts } from "../api";

const state = {};
const getters = {
  getItemList: state => {
    return state.items;
  }
};
const mutations = {
  SET_ITEMS: (state, payload) => {
    console.log(payload);
    state.items = { ...state.items, payload };
    console.log(state.items);
  }
};
const actions = {
  FETCH_PRODUCTS: async ({ commit }) => {
    const res = await fetchProducts();
    console.log(res.data);
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
