document.querySelectorAll('.checkbox-list').forEach(function (checkboxWrapper) {

  const checkboxBtn = checkboxWrapper.querySelector('.checkbox-list__title');
  const checkboxList = checkboxWrapper.querySelector('.checkbox-wrapper');
  const checkboxIcon = checkboxWrapper.querySelector('.checkbox-list__icon')

  checkboxBtn.addEventListener('click', function() {
    checkboxIcon.classList.toggle("checkbox-list__icon_rotate");
    checkboxList.classList.toggle('checkbox-wrapper--visible')

  })
})