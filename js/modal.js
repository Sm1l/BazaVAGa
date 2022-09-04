const modal = document.querySelector(".modal");
const modalLink = document.querySelectorAll(".modal__open");
const modalClose = modal.querySelector(".modal__close");
// const body = document.querySelector("body");

//Показ модального окна

modalLink.forEach((link) => link.addEventListener("click", showOnClick));

function showOnClick(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  body.classList.add("noscroll");
}
//Закрытие модального окна

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeOnClick();
});

modal.addEventListener("click", function (evt) {
  if (!evt.target.closest(".modal__content")) {
    closeOnClick();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      closeOnClick();
    }
  }
});

function closeOnClick(evt) {
  modal.classList.remove("modal-show");
  body.classList.remove("noscroll");
}
