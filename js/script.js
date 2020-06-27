let modal = document.querySelector('.modal');
let hotelSearchBtn = document.querySelector('.hotel-search');
let dateInInput = document.querySelector('.in-input');
let dateOutInput = document.querySelector('.out-input');
let adultsNumber = document.querySelector('.adults-number');
let childrenNumber = document.querySelector('.children-nubmer');

hotelSearchBtn.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('hotel-search')) {
        modal.classList.toggle('modal-hidden');
        dateInInput.focus();
    }
});