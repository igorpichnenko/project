import '../../../node_modules/paginationjs/src/pagination.js'


function onLoad() {
$(function() {
  (function() {
    var container = $('.js-pagination');
    var sources = function () {
      var result = [];

      for (var i = 1; i < 150; i++) {
        result.push(i);
      }

      return result;
    }();

    var options = {
      activeClassName: 'pagination__link_active',
      disableClassName: 'disabled',
      ulClassName: 'pagination__list',
      prevText: '<i class="pagination__icon material-icons">arrow_back</i>',
       nextText: '<i class="pagination__icon material-icons">arrow_forward</i>',
       pageRange: 1,
       autoHideNext: true,
       autoHidePrevious: true,
      dataSource: sources,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = '';

        $.each(response, function (index, item) {
          dataHtml += '' + item + '';
        });

        dataHtml += '';

        container.prev().html(dataHtml);
      }
    };


    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
     
    });
  })()

})

}
window.addEventListener('load', onLoad);
