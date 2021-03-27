import { Slick } from './Slick';

const $wrappers = $('.js-slick');

$wrappers.each((_, element) => {
  new Slick($(element));
});
