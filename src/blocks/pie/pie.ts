const captionsList = document.querySelectorAll('.canvas-container__item');
const unitsList = document.querySelectorAll('.canvas-container__unit');

captionsList.forEach((item, index) => {
  item.addEventListener('mouseover', overItem);

  function overItem(): void {
    unitsList[index].classList.add('hovered');
  }

  item.addEventListener('mouseout', overUtils);

  function overUtils(): void {
    unitsList[index].classList.remove('hovered');
  }
});
