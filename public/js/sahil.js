var app = new Vue({
  el: "#mainPage",
  data: {
    showIntro: true,
    showContact: false,
    showGallery: false,
  },
  methods: {
    clickGallery: function () {
      this.showIntro = false;
      this.showContact = false;
      this.showGallery = true;
      let body = document.getElementsByTagName("body");
      body.classList.remove("lg:overflow-hidden");
    },
    clickContact: function () {
      this.showIntro = false;
      this.showContact = true;
      this.showGallery = false;
    },
    clickBack: function () {
      this.showIntro = true;
      this.showContact = false;
      this.showGallery = false;
    },
  },
});
