import { Burger } from './Burger'


document.querySelectorAll('.js-header-main').forEach((burger) => {
     new Burger(burger)
});
