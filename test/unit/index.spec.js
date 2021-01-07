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
});
