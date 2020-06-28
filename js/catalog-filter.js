let checkboxBtn = document.querySelectorAll(".filter-checkbox-wrapper");
let checkboxIcon = document.querySelectorAll(".checkbox-on-off");



for (let i = 0; i < checkboxBtn.length; i++) {
    checkboxBtn[i].addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('checkbox-filter')) {
        checkboxIcon.classList.remove('swim-checkbox-icon-off');
        checkboxIcon.classList.add('swim-checkbox-icon-on');
      }
    });
  }