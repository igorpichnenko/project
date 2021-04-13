class CheckboxList {
  private accordion: Element

  private elements: HTMLElement[]

  constructor(accordion: Element) {
    this.accordion = accordion;
    this.elements = this.findElement();
    this.bindEventListeners();
  }

  private findElement(): HTMLElement[] {
    const panel = this.accordion.querySelector('.js-checkbox-list__wrapper')! as HTMLElement;
    const icon = this.accordion.querySelector('.js-checkbox-list__icon')! as HTMLElement;
    return [panel,
      icon];
  }

  private bindEventListeners() {
    this.handleAccordionClick = this.handleAccordionClick.bind(this);
    this.accordion.addEventListener('click', this.handleAccordionClick);
  }

  private handleAccordionClick() {
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
