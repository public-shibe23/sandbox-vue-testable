import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { mutations, actions } from "@/store/ProductList";
import { cloneDeep } from "lodash";

const state = {
  products: [
    {
      id: "",
      name: "",
      price: "",
      stock: ""
    }
  ]
};

const initStore = () => {
  return cloneDeep({
    modules: {
      ProductList: {
        namespaced: true,
        state,
        mutations,
        actions
      }
    }
  });
};

describe("ProductList.vue", () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    store = new Vuex.Store(initStore());
  });

  it("商品一覧を取得できる", done => {
    store.dispatch("ProductList/FETCH_PRODUCTS");
    setTimeout(() => {
      expect(store.state.products).toEqual([
        {
          id: 1000,
          name: "T-shirts",
          price: 980,
          stock: 20
        }
      ]);
      done();
    }, 3000);
  });
});
