document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper){
  
const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
const dropDownListItems = dropDownList?.querySelectorAll('.dropdown__list-item')
const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hiden');

dropDownBtn?.addEventListener('click', function() {
  dropDownList?.classList.toggle('dropdown__list--visible')
  dropDownWrapper.classList.add('dropdown__button--active')

})


dropDownListItems?.forEach(function (listItem) {
 listItem.addEventListener('click', function(e) {
    e.stopPropagation();

  });
});


document.addEventListener('click', function(e) {
  if (e.target !== dropDownBtn) {
    dropDownList?.classList.remove('dropdown__list--visible');
    dropDownBtn?.classList.remove('dropdown__button--active')
  }
});

})