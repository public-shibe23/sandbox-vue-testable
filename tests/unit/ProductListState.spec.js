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

  it("商品一覧を取得できる", async () => {
    await store.dispatch("ProductList/FETCH_PRODUCTS");
    expect(store.state.ProductList.products[0]).toEqual({
      id: "1000",
      name: "T-shirts",
      price: 980,
      stock: 20
    });
  });
});
