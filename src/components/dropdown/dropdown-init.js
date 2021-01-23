import { Dropdown } from './dropdown';

function onLoad() {
  document.querySelectorAll('.dropdown').forEach((item) => new Dropdown(item));
}

window.addEventListener('load', onLoad);
