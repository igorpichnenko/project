class CheckboxList {
  private accordion: Element
  private elements: HTMLElement[]

  constructor (accordion: Element) {
    this.accordion = accordion
    this.elements = this.findElement()
    this.bindEventListeners()
  }

  private findElement(): HTMLElement[] {
    let panel = this.accordion.querySelector('.js-checkbox-list__wrapper')! as HTMLElement
    let icon = this.accordion.querySelector('.js-checkbox-list__icon')! as HTMLElement
    return [panel,
      icon]
  }

  private bindEventListeners() {
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.accordion.addEventListener('click', this.handleClickMenu);
  }

  private handleClickMenu() {

    if (this.elements[0].style.display === 'block') {
      this.elements[0].style.display = 'none';
      this.elements[1].classList.toggle('js-checkbox-list__icon_rotate');
    } else {
      this.elements[0].style.display = 'block';
      this.elements[1].classList.toggle('js-checkbox-list__icon_rotate');
    }

  }

}

export { CheckboxList }

