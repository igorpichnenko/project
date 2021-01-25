import 'ion-rangeslider';

const $range = $('.range-slider');
const $inputFrom = $('.range-start');
const $inputTo = $('.range-end');
let from = 5000;
let to = 10000;

$range.ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  prefix: '₽',
  hide_min_max: true,
  hide_from_to: true,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});

function updateInputs(data: any) {
  from = data.from;
  to = data.to;

  $inputFrom.prop('value', `${from}₽`);
  $inputTo.prop('value', `-  ${to}₽`);
}
