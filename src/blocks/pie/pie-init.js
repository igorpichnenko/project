import { Pie } from './Pie';

document.querySelectorAll('.js-canvas-container').forEach((pie) => {
  new Pie(pie);
});
