import { mount } from "@vue/test-utils";
import jtest from 'vue-jest';
import ResizeComponent from "./resize.component";
import ResizeObserver from "../../src/index";
import { resizeObserverDirective } from "../../src/resize-observer-directive";
import "@testing-library/jest-dom";

describe("object的插入及其样式、属性", () => {
  const wrapper = mount(ResizeComponent, {
    global: {
      directives: {
        resize: resizeObserverDirective
      }
    }
  });

  // const resizeWrapper = wrapper.find("#resize");
  // const objectWrapper = wrapper.find("#resize object");

  test("测试插件能否正常安装", () => {
    const installed = jest.fn();
    const Plugin = {
      install(Vue) {
        Vue.directive("resize", resizeObserverDirective);
        installed();
      }
    }

    mount(ResizeComponent, {
      global: {
        plugins: [Plugin],
      }
    })

    expect(installed).toHaveBeenCalled();
  });

  // todo: 测试Object及其属性是否正常
  /**
  it("object是否正常插入", () => {
    expect(resizeWrapper.element).toContainElement(objectWrapper.element);
  });

  it("object的属性是否正常", () => {
    expect(objectWrapper.element).toHaveAttribute("aria-hidden");
    expect(objectWrapper.element).toHaveAttribute("tabindex");
    expect(objectWrapper.element).toHaveAttribute("style");
  });

  it("object的样式是否正常", () => {
    expect(objectWrapper.element).toHaveStyle("display: block;");
    expect(objectWrapper.element).toHaveStyle("position: absolute;");
    expect(objectWrapper.element).toHaveStyle("top: 0;");
    expect(objectWrapper.element).toHaveStyle("left: 0;");
    expect(objectWrapper.element).toHaveStyle("width: 100%;");
    expect(objectWrapper.element).toHaveStyle("height: 100%;");
    expect(objectWrapper.element).toHaveStyle("overflow: hidden;");
    expect(objectWrapper.element).toHaveStyle("pointer-events: none;");
    expect(objectWrapper.element).toHaveStyle("z-index: -1;");
    expect(objectWrapper.element).toHaveStyle("opacity: 0;");
  });
  */
});
