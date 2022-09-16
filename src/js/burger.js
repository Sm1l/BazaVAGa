const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__link");
const logo = document.querySelector(".header__logo");

burger.addEventListener("click", burgerOnClick);

function burgerOnClick(evt) {
  if (document.documentElement.clientWidth < 991) {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("noscroll");
    logo.classList.toggle("disabled");
  }
}

links.forEach((link) => link.addEventListener("click", closeOnClick));

function closeOnClick(evt) {
  if (document.documentElement.clientWidth < 991) {
    // evt.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.remove("noscroll");
    logo.classList.remove("disabled");
  }
}
