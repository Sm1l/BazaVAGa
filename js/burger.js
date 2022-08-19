const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.body;

burger.addEventListener("click", burgerHandler);

function burgerHandler(evt) {
  evt.preventDefault();
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
}
