class Pie {
  constructor() {
    this.findItems();
    this.handleUtilsMouseEvent();
  }

  findItems() {
    this.captionsList = document.querySelectorAll('.js-canvas-container__item');
    this.unitsList = document.querySelectorAll('.js-canvas-container__unit');
  }

  handleUtilsMouseEvent() {
    this.captionsList.forEach((item, index) => {
      item.onmouseover = () => {
        this.unitsList[index].classList.add('hovered');
      };
      item.onmouseout = () => {
        this.unitsList[index].classList.remove('hovered');
      };
    });
  }
}

export { Pie };
