import '../../../node_modules/paginationjs/dist/pagination.js'

function onLoad() {
$(function() {
  (function() {
    var container = $('.js-pagination');
   
   var sources = function () {
      var result = [];

      for (var i = 1; i < 150; i++) {
        result.push(i);}

      return result;
    }();

    var options: any = {
      activeClassName: 'pagination__link_active',
      disableClassName: 'disabled',
      ulClassName: 'pagination__list',
      prevText: '<i class="pagination__icon material-icons">arrow_back</i>',
       nextText: '<i class="pagination__icon material-icons">arrow_forward</i>',
       pageRange: 1,
       autoHideNext: true,
       autoHidePrevious: true,
      dataSource: sources,};
      
    container.pagination(options)
  })()})}
window.addEventListener('load', onLoad);