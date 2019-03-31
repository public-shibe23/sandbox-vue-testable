import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import ProductListModule from "@/store/ProductList";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ProductList.vue", () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      products: [
        {
          id: 1000,
          name: "T-shirts",
          price: 980,
          stock: 20
        }
      ]
    };

    actions = {
      FETCH_PRODUCTS: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        ProductList: {
          namespaced: true,
          state,
          actions,
          getters: ProductListModule.getters
        }
      }
    });
  });

  it("fetches async when a button is clicked", () => {
    const wrapper = mount(Home, { store, localVue });
    console.log(wrapper.html());
    const button = wrapper.find(".button");
    console.log(wrapper.text());
    button.trigger("click");
    expect(actions.FETCH_PRODUCTS).toHaveBeenCalled();
  });
});
