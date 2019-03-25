import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import ApiCallTest from "@/components/ApiCallTest.vue";
jest.setTimeout(20000);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

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
