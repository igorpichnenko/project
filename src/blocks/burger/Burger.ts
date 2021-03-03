class Burger {

  private header: Element
  private elements: Element[]

  constructor (header: Element) {
    this.header = header
    this.elements = this.findElement()
    this.bindEventListeners()
  }
  private findElement(): Element[] {
    let navbar = this.header.querySelector('.js-header-nav')!
    let button = this.header.querySelector('.js-burger__item')!
    return [navbar,
      button]
  }

  private bindEventListeners() {
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.elements[1].addEventListener('click', this.handleClickMenu);
  }

  private handleClickMenu() {
    this.elements[1].classList.toggle('js-active');
    this.elements[0].classList.toggle('js__open-menu');
  }
}

export {
  Burger
}