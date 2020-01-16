import Vue from "vue";

var VueResizeObserver = null;

if (process.env.NODE_ENV === "development") {
  VueResizeObserver = require("../src").default;
} else {
  VueResizeObserver = require("../dist");
}

Vue.use(VueResizeObserver);

var app = new Vue({
  el: "#app",
  data() {
    return {
      width1: 0,
      height1: 0,

      width2: 0,
      height2: 0
    };
  },
  mounted() {
    this.width1 = this.$refs.resize1.offsetWidth;
    this.height1 = this.$refs.resize1.offsetHeight;

    this.width2 = this.$refs.resize2.offsetWidth;
    this.height2 = this.$refs.resize2.offsetHeight;
  },
  methods: {
    onResize1({ width, height }) {
      this.width1 = width;
      this.height1 = height;
    },
    onResize2({ width, height }) {
      this.width2 = width;
      this.height2 = height;
    }
  }
});
