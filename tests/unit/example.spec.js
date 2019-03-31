import { shallowMount } from "@vue/test-utils";
import ApiCallTest from "@/components/ApiCallTest.vue";
jest.setTimeout(20000);

describe("ApiCallTest.vue", () => {
  it("fetches async when a button is clicked", done => {
    const wrapper = shallowMount(ApiCallTest);
    wrapper.find("button").trigger("click");
    // vm.$nextTickではvm.valueにAPIコール後の値が入らない
    setTimeout(() => {
      expect(wrapper.vm.value).toBe("value");
      done();
    }, 5000);
  });
});
