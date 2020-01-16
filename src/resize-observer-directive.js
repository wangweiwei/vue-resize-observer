import {
  isIE,
  $requestAnimationFrame,
  $cancelAnimationFrame
} from "./utils";

/**
 * resize处理器，此处回调元素v-resize的方法
 *
 * @param event {Event} resizeTrigge的resize事件传递，来自{@link registereResizeHandler}方法中产生的事件源
 *
 * @function
 *
 * @see {@link registereResizeHandler}
 */
function resizeHandler(event) {
  event.__currentTarget__ = this.__container__;
  this.__resize__handler__.call(
    this,
    {
      width: this.offsetWidth,
      height: this.offsetHeight
    },
    event
  );
}

/**
 * 优化resize监听
 *
 * @param event {Event} resizeTrigge的resize事件传递，来自{@link registereResizeHandler}方法中产生的事件源
 *
 * @function
 *
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event}
 *
 * @see {@link registereResizeHandler}
 */
function resizeTriggerListener(event) {
  const _resizeTrigger = event.currentTarget || event.srcElement;
  if (_resizeTrigger.__requestAnimationFrameID__) {
    $cancelAnimationFrame(_resizeTrigger.__requestAnimationFrameID__);
  }
  _resizeTrigger.__requestAnimationFrameID__ = $requestAnimationFrame(
    resizeHandler.bind(this, event)
  );
}

/**
 * 注册resize处理方法
 *
 * @function
 */
function registereResizeHandler() {
  if (document.attachEvent) {
    this.__container__.attachEvent("onresize", resizeHandler.bind(this));
  } else {
    this.contentDocument.defaultView.addEventListener(
      "resize",
      resizeTriggerListener.bind(this)
    );
  }
}

/**
 * 创建resize真正的触发器
 *
 * @function
 */
function createResizeTrigger() {
  const object = document.createElement("object");
  object.setAttribute("aria-hidden", "true");
  object.setAttribute("tabindex", -1);
  const objectStyle = `
    display: block !important; 
    position: absolute !important; 
    top: 0 !important; 
    left: 0 !important; 
    width: 100% !important; 
    height: 100% !important; 
    overflow: hidden !important; 
    pointer-events: none !important; 
    z-index: -1 !important; 
    opacity: 0 !important;
  `;
  object.setAttribute("style", objectStyle);
  object.type = "text/html";

  return object;
}

/**
 * resize观察者指令对象
 *
 * @module resizeObserverDirective
 */
export const resizeObserverDirective = {
  /**
   * 在指令第一次绑定到元素上时调用，只调用一次
   *
   * @param el {Element} 操作的元素
   *
   * @param binding {Object} 一些绑定相关的值
   *
   * @param vnode {VNode} Vue 编译生成的虚拟节点
   *
   * @param oldVnode {VNode} 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
   *
   * @function bind
   */
  bind(el, binding, vnode, oldVnode) {
    // 获得真正的触发器
    el.__resizeTrigger__ = createResizeTrigger();
    el.__resizeTrigger__.__container__ = el;
    el.__resizeTrigger__.__resize__handler__ = binding.value;
    el.__resizeTrigger__.onload = registereResizeHandler;

    // 将真正的触发器作为子元素添加到当前元素
    const _isIE = isIE();
    _isIE && el.appendChild(el.__resizeTrigger__);
    el.__resizeTrigger__.data = "about:blank";
    !_isIE && el.appendChild(el.__resizeTrigger__);
  },

  /**
   * 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
   *
   * @param el {Element} 操作的元素
   *
   * @function inserted
   */
  inserted(el) {
    if (getComputedStyle(el).position === "static") {
      el.style.setProperty("position", "relative", "important");
    }
  },

  /**
   * 在指令从元素上解绑时调用，只调用一次
   *
   * @param el {Element} 操作的元素
   *
   * @function unbind
   */
  unbind(el) {
    if (document.attachEvent) {
      el.detachEvent("onresize", resizeHandler);
    } else if (el.__resizeTrigger__ && el.__resizeTrigger__.contentDocument) {
      el.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
        "resize",
        resizeTriggerListener
      );
      el.__resizeTrigger__ = !el.removeChild(el.__resizeTrigger__);
    }
  }
};
