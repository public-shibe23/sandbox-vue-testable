import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import ApiCallTest from "@/components/ApiCallTest.vue";
import flushPromises from "flush-promises";

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
  it("fetches async when a button is clicked", async () => {
    const wrapper = shallowMount(ApiCallTest);
    wrapper.find("button").trigger("click");
    await flushPromises();
    expect(wrapper.vm.value).toBe("value");
  });
});
