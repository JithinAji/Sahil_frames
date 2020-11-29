"use strict";
let images = document.querySelectorAll(".imgportrait, .imglandscape");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    document.getElementById("overlay").style.height = "100vh";
    document.getElementById(
      "overlay-content"
    ).style.backgroundImage = `url(${event.target.src})`;
  });
});

// document.getElementByClassName("closebtn").addEventListener("click", function (event) {
//   document.getElementById("overlay").style.height = "0";
//   document.getElementById(
//     "overlay-content"
//   ).style.backgroundImage = `url()`;
// });

const closeNav = () => {
  document.getElementById("overlay").style.height = "0";
  document.getElementById("overlay-content").style.backgroundImage = `url()`;
};
