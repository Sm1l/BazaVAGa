const modal = document.querySelector(".modal");
const logo = document.querySelector(".header__logo");
const itemLabels = document.querySelectorAll(".item-price__label");
const itemImages = document.querySelectorAll(".item-price__image");

function modalShow(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
}

logo.addEventListener("click", modalShow);
