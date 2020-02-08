# Vue Resize Observer

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-resize-observer.svg?style=flat-square)](https://npmjs.com/package/vue-resize-observer)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Download Count](https://img.shields.io/npm/dm/vue-resize-observer.svg)](https://www.npmjs.com/package/vue-resize-observer)
[![issue](https://img.shields.io/badge/bug-issue-red.svg)](https://github.com/wangweiwei/vue-resize-observer/issues)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)

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

[![Edit vue-resize-observer example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/interesting-turing-2o4z9?fontsize=14&module=%2Fsrc%2Fcomponents%2FVueResizeObserverExample.vue&theme=dark&view=preview)

## Documentation

```
npm run doc
```

## ⚠️  Notice

Set the `v-resize` directive for a DOM element and make the element position to something other than 'static' (for example 'relative').

## Dependency 

[![Dependency Status](https://david-dm.org/wangweiwei/vue-resize-observer.svg)](https://david-dm.org/wangweiwei/vue-resize-observer)
[![devDependency Status](https://david-dm.org/wangweiwei/vue-resize-observer/dev-status.svg)](https://david-dm.org/wangweiwei/vue-resize-observer?type=dev)

## License
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/vue-resize-observer/blob/master/LICENSE)

Copyright (c) 2020-present, Wayne
