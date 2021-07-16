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

English | [简体中文](https://github.com/wangweiwei/vue-resize-observer/blob/master/README.zh.md)

![demo gif](https://github.com/wangweiwei/vue-resize-observer/raw/master/example/demo.gif)

## Installation

- Vue3.0
``` sh
npm install --save vue-resize-observer@next
```
- Vue2.0
``` sh
npm install --save vue-resize-observer
```

## Module import & Example

* Import the package and install it into Vue:

``` js
const VueResizeObserver = require("vue-resize-observer");
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

or

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

## Example

[![Example Online](https://img.shields.io/badge/-Example--Online-blue?style=for-the-badge&logo=internet-explorer)](https://www.ellow.cn/examples/vue-resize-observer/index.html)

## Documentation

``` sh
npm run doc
```

Or read the documentation online

[![Read the Docs Online](https://img.shields.io/badge/-Read--the--Docs--Online-blue?style=for-the-badge&logo=read-the-docs)](https://www.ellow.cn/docs/vue-resize-observer/index.html)

## ⚠️  Notice

Set the `v-resize` directive for a DOM element and make the element position to something other than 'static' (for example 'relative').

## Dependency 

[![Dependency Status](https://david-dm.org/wangweiwei/vue-resize-observer.svg)](https://david-dm.org/wangweiwei/vue-resize-observer)
[![devDependency Status](https://david-dm.org/wangweiwei/vue-resize-observer/dev-status.svg)](https://david-dm.org/wangweiwei/vue-resize-observer?type=dev)

## License
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)

Copyright (c) 2020-present, Wayne
