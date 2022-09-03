const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__link");
const logo = document.querySelector(".header__logo");

burger.addEventListener("click", burgerOnClick);

function burgerOnClick(evt) {
  evt.preventDefault();
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
  // logo.function (evt) {
  //   evt.preventDefault();    
  // }
}
// function logoDisabled(evt){
//   logo.
// }

links.forEach((link) => link.addEventListener("click", closeOnClick));

function closeOnClick() {
  burger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("noscroll");
}
