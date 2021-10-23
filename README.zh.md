<p align="center">
  <a href="https://www.ellow.cn/examples/vue-resize-observer/index.html" target="_blank">
    <img width="160" src="https://raw.githubusercontent.com/wangweiwei/vue-resize-observer/master/example/logo.png" alt="logo">
  </a>
</p>

<h2 align="center">Vue Resize Observer</h2>

<p align="center">
  <a href="https://npmjs.com/package/vue-resize-observer" rel="nofollow">
    <img alt="Latest Version on NPM" src="https://img.shields.io/npm/v/vue-resize-observer" style="max-width:100%;">
  </a>
  <a href="https://vuejs.org/" rel="nofollow">
    <img alt="vue2" src="https://img.shields.io/badge/vue-2.x-brightgreen.svg" style="max-width:100%;">
  </a>
  <a href="https://vuejs.org/" rel="nofollow">
    <img alt="vue3" src="https://img.shields.io/badge/vue-3.x-brightgreen.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer/issues">
    <img alt="Issue" src="https://img.shields.io/badge/-help--wanted-brightgreen" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE">
    <img alt="Software License" src="https://img.shields.io/npm/l/vue-resize-observer" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer">
    <img alt="Contributors Anon" src="https://img.shields.io/github/contributors-anon/wangweiwei/vue-resize-observer" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer">
    <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/wangweiwei/vue-resize-observer" style="max-width:100%;">
  </a>
  <br/>
  <a href="https://npmjs.com/package/vue-resize-observer">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/vue-resize-observer.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer">
    <img alt="Languages Count" src="https://img.shields.io/github/languages/count/wangweiwei/vue-resize-observer" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/vue-resize-observer">
    <img alt="Languages" src="https://img.shields.io/github/languages/top/wangweiwei/vue-resize-observer" style="max-width:100%;">
  </a>
  <a href="https://www.ellow.cn/examples/vue-resize-observer/index.html" rel="nofollow">
    <img alt="Examle Online" src="https://img.shields.io/badge/-Example--Online-blue" style="max-width:100%;">
  </a>
</p>

[English](https://github.com/wangweiwei/vue-resize-observer/blob/master/README.md) | 简体中文

> Vue普通元素resize事件监听，借鉴自[Cross-Browser, Event-based, Element Resize Detection](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/)

![demo gif](https://github.com/wangweiwei/vue-resize-observer/raw/master/example/demo.gif)

## 安装

- Vue3.0
``` sh
npm install --save vue-resize-observer@next
```
- Vue2.0
``` sh
npm install --save vue-resize-observer
```

## 使用

* 在入口文件(比如：`main.js`)中引入并`use`
``` js
const VueResizeObserver = require("vue-resize-observer");
Vue.use(VueResizeObserver);
// Vue3.0
const app = createApp(App)
app.use(VueResizeObserver) // use is a instance's method & be called before mount
app.mount('#app')
// Vue2.0
Vue.use(VueResizeObserver); // use is a static method
```

or

``` js
import VueResizeObserver from "vue-resize-observer";
Vue.use(VueResizeObserver);
// Vue3.0
const app = createApp(App)
app.use(VueResizeObserver) // use is a instance's method & be called before mount
app.mount('#app')
// Vue2.0
Vue.use(VueResizeObserver); // use is a static method
```


* Then `v-resize` directive to detect DOM resize events.
``` vue
<template>
  <div class="resize" v-resize="onResize">
    width: {{width}}, height: {{height}}
  </div>
</template>

<script>
export default {
  data() {
    return {
// Vue2.0
Vue.use(VueResizeObserver); // use is a static method
```

或者

``` js
import VueResizeObserver from "vue-resize-observer";
Vue.use(VueResizeObserver);
// Vue3.0
app.use(VueResizeObserver) // use is a instance's method
// Vue2.0
Vue.use(VueResizeObserver); // use is a static method
```

或者

``` js
import VueResizeObserver from "vue-resize-observer";
// Vue3.0
Vue.createApp({
  directives: { 'resize': VueResizeObserver },
})
// Vue2.0
new Vue({
  directives: { 'resize': VueResizeObserver },
})
```

* 在组件元素中使用`v-resize`
``` vue
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
``` sh
npm run dev
```

* 打开：[http://localhost:8080](http://localhost:8080/)

## 例子

[![Example Online](https://img.shields.io/badge/-在线例子-blue?style=for-the-badge&logo=internet-explorer)](https://www.ellow.cn/examples/vue-resize-observer/index.html)

## 开发文档

* 文档生成
``` sh
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
