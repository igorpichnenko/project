import IMask from 'imask';


let dateMask = IMask(
  document.querySelector('.mask-date'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2020, 0, 1),
    lazy: true
  });


