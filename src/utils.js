/**
 * 是否是IE浏览器的判断
 *
 * @function
 *
 * @return {Boolean} 是否IE浏览器的判断结果
 */
export function isIE() {
  let _isIE = false;
  if (typeof navigator !== "undefined") {
    _isIE =
      navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/);
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

/**
 * requestAnimationFrame的兼容处理
 *
 * @see {@link https://gist.github.com/paulirish/1579671}
 */
export const $requestAnimationFrame = window.requestAnimationFrame;

/**
 * cancelAnimationFrame的兼容处理
 *
 * @see {@link https://gist.github.com/paulirish/1579671}
 */
export const $cancelAnimationFrame = window.cancelAnimationFrame;
