import { Slick } from './Slick';

const $wrappers = $('.js-slider');

$wrappers.each((_index, element) => {
    new Slick($(element))
});


