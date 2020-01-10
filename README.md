# Vue Resize Observer
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/dm/vue-resize-observer.svg)](https://www.npmjs.com/package/vue-resize-observer)

Vue普通元素resize事件监听，借鉴自[Cross-Browser, Event-based, Element Resize Detection](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/)

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

## ⚠️  注意
在当前元素的`position`属性不为非`static`的情况下，会改变当前元素的`position`属性为`relative`，所以对此属性敏感的元素需要谨慎对待
