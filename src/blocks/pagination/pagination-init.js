import { Pagination } from './Pagination';

const $wrappers = $('.js-pagination');

$wrappers.each((_, element) => {
  new Pagination($(element));
});
