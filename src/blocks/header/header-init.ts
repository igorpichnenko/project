import { Burger } from './header';

function onLoad() {
  document.querySelectorAll('.header-main').forEach((item) => new Burger(item));
}

window.addEventListener('load', onLoad);
