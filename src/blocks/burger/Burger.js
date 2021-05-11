class Burger {
  
  constructor(header) {
    this.header = header;
    this.elements = this.findElement();
    this.bindEventListeners();
  }

 findElement() {
    const navbar = this.header.querySelector('.js-header-nav');
    const button = this.header.querySelector('.js-burger__item');
    return [navbar,
      button];
  }

  bindEventListeners() {
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.elements[1].addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick() {
    this.elements[1].classList.toggle('burger_active-item');
    this.elements[0].classList.toggle('burger_is-visible');
  }
}

export {
  Burger,
};
