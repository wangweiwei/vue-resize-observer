# Vue Resize Observer

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-resize-observer.svg?style=flat-square)](https://npmjs.com/package/vue-resize-observer)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Download Count](https://img.shields.io/npm/dm/vue-resize-observer.svg)](https://www.npmjs.com/package/vue-resize-observer)
[![issue](https://img.shields.io/badge/bug-issue-red.svg)](https://github.com/wangweiwei/vue-resize-observer/issues)

Vue普通元素resize事件监听，借鉴自[Cross-Browser, Event-based, Element Resize Detection](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/)

![demo gif](https://github.com/wangweiwei/vue-resize-observer/raw/master/example/demo.gif)

## 安装
```
npm install --save vue-resize-observer
```

## 使用

* 在入口文件(比如：`main.js`)中引入并`use`
```
const VueResizeObserver = require("vue-resize-observer");

Vue.use(VueResizeObserver);

```
* 在组件元素中使用`v-resize`
```
<template>
  <div class="resize" v-resize="onResize">
    width: {{width}}, height: {{height}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  mounted() {
    this.width = this.$el.offsetWidth;
    this.height = this.$el.offsetHeight;
  },
  methods: {
    onResize({ width, height }) {
      this.width = width;
      this.height = height;
    }
  }
}
</script>

<style>
.resize {
  background-color: orange;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  resize: both;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

## 开发 

* 运行
```
npm run dev
```

* 打开：[http://localhost:8080](http://localhost:8080/)

## 例子
[![Edit vue-resize-observer example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/interesting-turing-2o4z9?fontsize=14&module=%2Fsrc%2Fcomponents%2FVueResizeObserverExample.vue&theme=dark&view=preview)

## 开发文档
* 文档生成
```
npm run doc
```

* 打开位于`docs`的`index.html`即可查看开发文档

## ⚠️  注意
在当前元素的`position`属性不为非`static`的情况下，会改变当前元素的`position`属性为`relative`，所以对此属性敏感的元素需要谨慎对待

## 依赖
[![Dependency Status](https://david-dm.org/wangweiwei/vue-resize-observer.svg)](https://david-dm.org/wangweiwei/vue-resize-observer)
[![devDependency Status](https://david-dm.org/wangweiwei/vue-resize-observer/dev-status.svg)](https://david-dm.org//wangweiwei/vue-resize-observer#info=devDependencies)

## (MIT)开源协议
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)
