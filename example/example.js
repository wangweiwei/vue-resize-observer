var Vue = require("vue");

var VueResizeObserver = null;

if (process.env.NODE_ENV === "development") {
  VueResizeObserver = require("../src");
} else {
  VueResizeObserver = require("../dist");
}

Vue.use(VueResizeObserver);

const app = new Vue({
  el: "#app",
  data() {
    return {
      width: 0,
      height: 0
    };
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
});
