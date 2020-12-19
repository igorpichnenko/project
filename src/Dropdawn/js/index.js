// Полифилл для метода forEach для NodeList

/*if (window.NodeList && !NodeList.prototype.forEach) {

	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
*/
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper){
  
const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hiden');

// клик по кнопки

dropDownBtn.addEventListener('click', function() {
  dropDownList.classList.toggle('dropdown__list--visible')
  this.classList.add('dropdown__button--active')

})

// выбор элементов

dropDownListItems.forEach(function (listItem) {
 listItem.addEventListener('click', function(e) {
    e.stopPropagation();
   // dropDownBtn.innerText = this.innerText;
   // dropDownBtn.focus();
   // dropDownInput.value = this.innerText;
    //dropDownList.classList.remove('dropdown__list--visible')
  });
});

// клик снаружи дропдауна

document.addEventListener('click', function(e) {
  if (e.target !== dropDownBtn) {
    dropDownList.classList.remove('dropdown__list--visible');
    dropDownBtn.classList.remove('dropdown__button--active')
  }
});

// tab и esc

/*document.addEventListener('keydown', function() {
  if (e.key === 'Tab' || e.key === 'Escape') {
    dropDownList.classList.remove('dropdown__list--visible');
    dropDownBtn.classList.remove('dropdown__button--active')
  }
})*/
})

