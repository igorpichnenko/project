import IMask from 'imask';

IMask(<HTMLElement>document.querySelector('.input_mask'), {
  mask: Date,
  min: new Date(1990, 0, 1),
  max: new Date(2020, 0, 1),
  lazy: true,
});
