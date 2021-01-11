import { Burger } from './header.js';

function onLoad() {

  let Allmenu = document.querySelectorAll('.header').forEach((item) =>
 
   new Burger(item));
 

}

window.addEventListener('load', onLoad);