const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__link");
const logo = document.querySelector(".header__logo");
// const pageWidth = document.documentElement.scrollWidth;

burger.addEventListener("click", burgerOnClick);

// burger.addEventListener("click", function (evt) {
//   if (document.documentElement.clientWidth < 991) {
//     evt.preventDefault();
//     burgerOnClick();
//   }
// });

function burgerOnClick(evt) {
  if (document.documentElement.clientWidth < 991) {
    evt.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("noscroll");
    logo.classList.toggle("disabled");
  }
}

links.forEach((link) => link.addEventListener("click", closeOnClick));
// links.forEach((link) =>
//   link.addEventListener("click", function (evt) {
//     if (document.documentElement.clientWidth < 991) {
//       closeOnClick();
//     }
//   })
// );

function closeOnClick(evt) {
  if (document.documentElement.clientWidth < 991) {
    evt.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("noscroll");
    logo.classList.toggle("disabled");
  }
}
