let modal = document.querySelector('.modal');
let hotelSearchBtn = document.querySelector('.hotel-search');

hotelSearchBtn.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('hotel-search')) {
       modal.classList.remove('modal-hidden');
    }
});