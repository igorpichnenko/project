import { Pagination } from './Pagination';

const $wrappers = $('.js-pagination');

$wrappers.each((_index, element) => {
new Pagination($(element));
});
