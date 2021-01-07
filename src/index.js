import { resizeObserverDirective } from "./resize-observer-directive";

/**
 * vue resize事件对象
 *
 * @module vueResizeObserver
 */
const vueResizeObserver = {
  /**
   * 插件安装方法
   *
   * @param Vue {Vue} Vue构造器
   *
   * @function install
   */
  install(app) {
    app.directive("resize", resizeObserverDirective);
  }
};

export default vueResizeObserver;

/**
 * 模块处理
 */
if (typeof exports == "object") {
  module.exports = vueResizeObserver;
} else if (typeof define == "function" && define.amd) {
  define([], function() {
    return vueResizeObserver;
  });
} else if (typeof window !== "undefined" && window.Vue) {
  window.__vue_resize_observer__ = vueResizeObserver;
  // Vue.use(vueResizeObserver);
}
