let modal = document.querySelector('.modal');
let hotelSearchBtn = document.querySelector('.hotel-search');
let dateInInput = document.querySelector('.in-input');
let dateOutInput = document.querySelector('.out-input');
let adultsNumber = document.querySelector('.adults-number');
let childrenNumber = document.querySelector('.children-nubmer');
let plusMinusBtn = document.querySelectorAll('.plus-minus-button');
let bookForm = document.querySelector('.book-form');
let searchButton = document.querySelector('.search-button');

var isStorageSupport = true;
var storage1 = "";
var storage2 = "";

try {
  storage1 = localStorage.getItem("adult-num");
  storage2 = localStorage.getItem("child-num");

} catch (err) {
  isStorageSupport = false;
}

hotelSearchBtn.addEventListener('click', function (event) {
  let target = event.target;
  if (target && target.classList.contains('hotel-search')) {
    modal.classList.toggle('modal-hidden');
    modal.classList.remove("modal-error");

    if (storage1 || storage2) {
      adultsNumber.value = storage1;
      childrenNumber.value = storage2;
      searchButton.focus();
    } else {
      dateInInput.focus();
    }
  }
});

bookForm.addEventListener("submit", function (evt) {
  if (!dateInInput.value || !dateOutInput.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("adult-num", adultsNumber.value);
    localStorage.setItem("child-num", childrenNumber.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!modal.classList.contains("modal-hidden")) {
      evt.preventDefault();
      modal.classList.add("modal-hidden");
      modal.classList.remove("modal-error");
    }
  }
});