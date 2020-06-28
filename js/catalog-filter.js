let checkboxBtn = document.querySelectorAll(".filter-checkbox-wrapper");
let checkboxIcon = document.querySelectorAll(".checkbox-on-off");


for (let i = 0; i < checkboxBtn.length; i++) {
    checkboxBtn[i].addEventListener('click', function (event) {
      let target = event.target;
      if (target.classList.contains('checkbox-filter')) {
        // checkboxIcon[i].classList.remove('swim-checkbox-icon-off');
        // checkboxIcon[i].classList.add('swim-checkbox-icon-on');

        checkboxIcon[i].classList.toggle('swim-checkbox-icon-on');
        // console.log('Hello');
      }
    });
  }