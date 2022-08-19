// const contbtn = document.querySelector('.contacts__button');
// const popup = document.querySelector('.modal__write-us');
// const closebtn = document.querySelector('.modal__close_button');
// const form = popup.querySelector('form');
// const login = popup.querySelector('[name=modal_name]');
// const email = popup.querySelector('[name=modal_email]');
// const text = popup.querySelector('[name=modal_text]');

// contbtn.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   popup.classList.add('modal-show');
// });

// closebtn.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   popup.classList.remove('modal-show');
//   popup.classList.remove('modal-error'); });

// window.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     if (popup.classList.contains('modal-show')) {
//       popup.classList.remove('modal-show');
//     }
//     if (popup.classList.contains('modal-error')) {
//       popup.classList.remove('modal-error');
//     }
//   }
// });

// form.addEventListener('submit', (evt) => {
//   if (!login.value || !email.value || !text.value) {
//     evt.preventDefault();
//     popup.classList.add('modal-error');
//     console.log('Заполните форму');
//   } else {
//     evt.preventDefault();
//     console.log('Отправляем форму');
//   }
// });
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
