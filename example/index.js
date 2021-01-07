(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.__vue_resize_observer__ = factory()));
})(this, function() {
  "use strict";

  function isIE() {
    var _isIE = false;
    if (typeof navigator !== "undefined") {
      _isIE =
        navigator.userAgent.match(/Trident/) ||
        navigator.userAgent.match(/Edge/);
    }
    return _isIE;
  }
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  if (typeof window === "undefined") {
    global.window = {};
  }
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
  var $requestAnimationFrame = window.requestAnimationFrame;
  var $cancelAnimationFrame = window.cancelAnimationFrame;

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
  function resizeTriggerListener(event) {
    var _resizeTrigger = event.currentTarget || event.srcElement;
    if (_resizeTrigger.__requestAnimationFrameID__) {
      $cancelAnimationFrame(_resizeTrigger.__requestAnimationFrameID__);
    }
    _resizeTrigger.__requestAnimationFrameID__ = $requestAnimationFrame(
      resizeHandler.bind(this, event)
    );
  }
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
  function createResizeTrigger() {
    var object = document.createElement("object");
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    var objectStyle =
      "\n    display: block !important; \n    position: absolute !important; \n    top: 0 !important; \n    left: 0 !important; \n    width: 100% !important; \n    height: 100% !important; \n    overflow: hidden !important; \n    pointer-events: none !important; \n    z-index: -1 !important; \n    opacity: 0 !important;\n  ";
    object.setAttribute("style", objectStyle);
    object.type = "text/html";
    return object;
  }
  var resizeObserverDirective = {
    beforeMount: function beforeMount(el, binding, vnode, oldVnode) {
      el.__resizeTrigger__ = createResizeTrigger();
      el.__resizeTrigger__.__container__ = el;
      el.__resizeTrigger__.__resize__handler__ = binding.value;
      el.__resizeTrigger__.onload = registereResizeHandler;
      var _isIE = isIE();
      _isIE && el.appendChild(el.__resizeTrigger__);
      el.__resizeTrigger__.data = "about:blank";
      !_isIE && el.appendChild(el.__resizeTrigger__);
    },
    mounted: function mounted(el, binding, vnode, oldVnode) {
      if (getComputedStyle(el).position === "static") {
        el.style.setProperty("position", "relative", "important");
      }
    },
    beforeUpdate: function beforeUpdate(el, binding, vnode, oldVnode) {},
    updated: function updated(el, binding, vnode, oldVnode) {
      console.log(el.children, el.__resizeTrigger__);
      // var _isIE = isIE();
      // _isIE && el.appendChild(el.__resizeTrigger__);
      // el.__resizeTrigger__.data = "about:blank";
      // !_isIE && el.appendChild(el.__resizeTrigger__);
    },
    beforeUnmount: function beforeUnmount(el, binding, vnode, oldVnode) {},
    unmounted: function unmounted(el, binding, vnode, oldVnode) {
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

  var vueResizeObserver = {
    install: function install(app) {
      app.directive("resize", resizeObserverDirective);
    }
  };
  if (typeof exports == "object") {
    module.exports = vueResizeObserver;
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return vueResizeObserver;
    });
  } else if (typeof window !== "undefined" && window.Vue) {
    window.__vue_resize_observer__ = vueResizeObserver;
  }

  return vueResizeObserver;
});
//# sourceMappingURL=index.js.map
