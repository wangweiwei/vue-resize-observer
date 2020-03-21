# Vue Resize Observer

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-resize-observer)](https://npmjs.com/package/vue-resize-observer)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Issue](https://img.shields.io/badge/-help--wanted-brightgreen)](https://github.com/wangweiwei/vue-resize-observer/issues)
[![Software License](https://img.shields.io/npm/l/vue-resize-observer)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)
[![Contributors Anon](https://img.shields.io/github/contributors-anon/wangweiwei/vue-resize-observer)](https://github.com/wangweiwei/vue-resize-observer)
[![Code Size](https://img.shields.io/github/languages/code-size/wangweiwei/vue-resize-observer)](https://github.com/wangweiwei/vue-resize-observer)
[![Languages Count](https://img.shields.io/github/languages/count/wangweiwei/vue-resize-observer)](https://github.com/wangweiwei/vue-resize-observer)
[![Languages](https://img.shields.io/github/languages/top/wangweiwei/vue-resize-observer)](https://github.com/wangweiwei/vue-resize-observer)
[![Examle Online](https://img.shields.io/badge/-Example--Online-blue)](https://www.ellow.cn/examples/vue-resize-observer/index.html)

[English](https://github.com/wangweiwei/vue-resize-observer/blob/master/README.md) | 简体中文

> Vue普通元素resize事件监听，借鉴自[Cross-Browser, Event-based, Element Resize Detection](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/)

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

或者

```
import VueResizeObserver from "vue-resize-observer";
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

[![Example Online](https://img.shields.io/badge/-在线例子-blue?style=for-the-badge&logo=internet-explorer)](https://www.ellow.cn/examples/vue-resize-observer/index.html)

## 开发文档

* 文档生成
```
npm run doc
```

或者阅读在线文档

[![Read the Docs Online](https://img.shields.io/badge/-阅读在线文档-blue?style=for-the-badge&logo=read-the-docs)](https://www.ellow.cn/docs/vue-resize-observer/index.html)

* 打开位于`docs`的`index.html`即可查看开发文档

## ⚠️  注意

在当前元素的`position`有且只有在`static`的情况下，会改变当前元素的`position`属性为`relative`，所以对此属性敏感的元素需要谨慎对待!

## 依赖

[![Dependency Status](https://david-dm.org/wangweiwei/vue-resize-observer.svg)](https://david-dm.org/wangweiwei/vue-resize-observer)
[![devDependency Status](https://david-dm.org/wangweiwei/vue-resize-observer/dev-status.svg)](https://david-dm.org/wangweiwei/vue-resize-observer?type=dev)

## (MIT)开源协议

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)
