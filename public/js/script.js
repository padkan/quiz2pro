const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const hamburgerTop = document.querySelector(".hamburger-top");
const hamburgerMiddle = document.querySelector(".hamburger-middle");
const hamburgerBottom = document.querySelector(".hamburger-bottom");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (btn.classList.contains("open")) {
    hamburgerTop.classList.add("hamburger-open");
    hamburgerMiddle.classList.add("hamburger-open");
    hamburgerBottom.classList.add("hamburger-open");
  } else {
    hamburgerTop.classList.remove("hamburger-open");
    hamburgerMiddle.classList.remove("hamburger-open");
    hamburgerBottom.classList.remove("hamburger-open");
  }
});
