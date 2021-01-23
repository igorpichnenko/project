class Burger {
  button: any;

  navbar: any;

  menu: any;

  constructor(menu: any) {
    this.menu = menu;
    this.findItems();
  }

  findItems(): void {
    this.button = this.menu.querySelector('.header-main__burger-menu');
    this.navbar = this.menu.querySelector('.header-main__nav');

    this.clickMenu = this.clickMenu.bind(this);
    this.button.addEventListener('click', this.clickMenu);
  }

  clickMenu(): void {
    this.button.classList.toggle('header-main__burger-open');
    this.navbar.classList.toggle('header-main__open-menu');
  }
}

export { Burger };
