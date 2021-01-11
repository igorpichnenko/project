import { Burger } from './header.js';

function onLoad() {

  let Allmenu = document.querySelectorAll('.header-main').forEach((item) =>
 
   new Burger(item));
 

}

window.addEventListener('load', onLoad);