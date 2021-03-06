let checkboxBtn = document.querySelectorAll('.filter-checkbox-wrapper');
let checkboxIcon = document.querySelectorAll('.checkbox-on-off');
let rangeForm = document.querySelector('.range-form');

for (let i = 0; i < checkboxBtn.length; i++) {
  checkboxBtn[i].addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('checkbox-filter')) {
      checkboxIcon[i].classList.toggle('swim-checkbox-icon-on');
    }
  });
}

rangeForm.addEventListener('submit', function (event) {
  event.preventDefault();
});