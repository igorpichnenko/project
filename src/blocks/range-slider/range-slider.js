import { RangeSlider } from './RangeSlider';

const $wrappers = $('.js-range-slider');

$wrappers.each((_, element) => {
  new RangeSlider($(element));
});
