document.querySelectorAll('.header-main').forEach((burger) => {
  const button = burger.querySelector('.burger__item')!;

  const navbar = burger.querySelector('.header-main__nav')!;

  button.addEventListener('click', clickMenu);

  function clickMenu(): void {
    button.classList.toggle('active');
    navbar.classList.toggle('header-main__open-menu');
  }
});