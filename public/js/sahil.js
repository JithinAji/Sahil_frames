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
      setTimeout(() => {this.showGallery = true;}, 500);
      let body = document.getElementsByTagName("body");
      body.classList.remove("lg:overflow-hidden");
    },
    clickContact: function () {
      this.showIntro = false;
      setTimeout(() => {this.showContact = true;}, 500); 
      this.showGallery = false;
    },
    clickBack: function () {
      this.showIntro = true;
      this.showContact = false;
      this.showGallery = false;
    },
  },
});
