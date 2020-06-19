var app = new Vue({
  el: "#app",
  data: {
    message: "Here. Just pick one."
  },
  methods: {
    playsound1() {
      let url = "media/prettypianochord.wav";
      let sound = new Audio(url);
      sound.play();
    },
    playsound2() {
      let url = "media/Buzzer.wav";
      let sound = new Audio(url);
      sound.play();
    }
  }
});
