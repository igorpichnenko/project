import { RangeSlider } from './RangeSlider';

const $wrappers = $('.js-range-slider');

$wrappers.each((_index, element) => {
  new RangeSlider($(element));
});
