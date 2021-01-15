let captionsList = document.querySelectorAll('.canvas-container__item');
let unitsList = document.querySelectorAll('.canvas-container__unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});