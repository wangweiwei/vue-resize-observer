export default {
  template: `
    <div 
      id="resize" 
      style="background-color: orange; width: 100vw; height: 100vh; margin: 0 auto; resize: both; overflow: auto; display: flex; justify-content: center; align-items: center;" 
      v-resize="onResize">
      width: {{width}}, height: {{height}}
    </div>
  `,

  data() {
    return {
      width: 0,
      height: 0,
    }
  },

  methods: {
    onResize({ width, height }) {
      this.width = width;
      this.height = height;
    }
  }
}

