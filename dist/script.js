const particles = Vue.createApp({
  data() {
    return {
      bgStyle: {
        backgroundColor: 'hsl(0, 100%, 20%)',
      },
      i: 0
    }
  },
  mounted() {
    particlesJS.load('particles', 'particlesjs-config.json');
    setInterval(() => {
      this.i = this.i+0.5;
      this.bgStyle = { backgroundColor: `hsl(${this.i}, 100%, 20%)`};
      console.log(this.i)
    }, 100);
  },
  methods: {
  }
});

particles.mount('body');