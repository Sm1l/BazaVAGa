const linkAdvantages = document.querySelector("#advantages");
const sectionAdvantages = document.querySelector(".advantages");
const linkPrice = document.querySelector("#price");
const sectionPrice = document.querySelector(".price");
const linkContacts = document.querySelector("#contacts");
const sectionContacts = document.querySelector(".contacts");

linkAdvantages.addEventListener("click", function (evt) {
  evt.preventDefault();
  sectionAdvantages.scrollIntoView();
});

linkPrice.addEventListener("click", function (evt) {
  evt.preventDefault();
  sectionPrice.scrollIntoView();
});

linkContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  sectionContacts.scrollIntoView();
});
