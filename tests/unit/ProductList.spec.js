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
  let wrapper;

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
    wrapper = mount(Home, { store, localVue });
  });

  it("Clickボタンを押すと、actions.FETCH_PRODUCTSが呼ばれる", () => {
    const button = wrapper.find(".button");
    console.log(wrapper.text());
    button.trigger("click");
    expect(actions.FETCH_PRODUCTS).toHaveBeenCalled();
  });

  it("match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
