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

English | [简体中文](https://github.com/wangweiwei/vue-resize-observer/blob/master/README.zh.md)

![demo gif](https://github.com/wangweiwei/vue-resize-observer/raw/master/example/demo.gif)

## Installation

```
npm install --save vue-resize-observer
```

## Module import & Example

* Import the package and install it into Vue:

```
const VueResizeObserver = require("vue-resize-observer");
Vue.use(VueResizeObserver);
```

or

```
import VueResizeObserver from "vue-resize-observer";
Vue.use(VueResizeObserver);
```


* Then `v-resize` directive to detect DOM resize events.
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

## Example on codesandbox

[![Example Online](https://img.shields.io/badge/-Example--Online-blue?style=for-the-badge&logo=internet-explorer)](https://www.ellow.cn/examples/vue-resize-observer/index.html)

## Documentation

```
npm run doc
```

Or Read the Docs Online

[![Read the Docs Online](https://img.shields.io/badge/-Read--the--Docs--Online-blue?style=for-the-badge&logo=read-the-docs)](https://www.ellow.cn/docs/vue-resize-observer/index.html)

## ⚠️  Notice

Set the `v-resize` directive for a DOM element and make the element position to something other than 'static' (for example 'relative').

## Dependency 

[![Dependency Status](https://david-dm.org/wangweiwei/vue-resize-observer.svg)](https://david-dm.org/wangweiwei/vue-resize-observer)
[![devDependency Status](https://david-dm.org/wangweiwei/vue-resize-observer/dev-status.svg)](https://david-dm.org/wangweiwei/vue-resize-observer?type=dev)

## License
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)

Copyright (c) 2020-present, Wayne
