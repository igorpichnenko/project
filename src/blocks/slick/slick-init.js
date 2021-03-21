import { Slick } from './Slick';

const $wrappers = $('.js-slider');

$wrappers.each((_, element) => {
  new Slick($(element));
});
