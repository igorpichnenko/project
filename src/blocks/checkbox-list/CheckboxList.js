class CheckboxList {

  constructor(accordion) {
    this.accordion = accordion;
    this.elements = this.findElement();
    this.bindEventListeners();
  }

  findElement(){
    const panel = this.accordion.querySelector('.js-checkbox-list__wrapper');
    const icon = this.accordion.querySelector('.js-checkbox-list__icon');
    return [panel,
      icon];
  }

   bindEventListeners() {
    this.handleAccordionClick = this.handleAccordionClick.bind(this);
    this.accordion.addEventListener('click', this.handleAccordionClick);
  }

  handleAccordionClick() {
    if (this.elements[0].style.display === 'block') {
      this.elements[0].style.display = 'none';
      this.elements[1].classList.toggle('checkbox-list__icon_rotated');
    } else {
      this.elements[0].style.display = 'block';
      this.elements[1].classList.toggle('checkbox-list__icon_rotated');
    }
  }
}

export { CheckboxList };
