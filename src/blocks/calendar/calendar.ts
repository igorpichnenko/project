import 'air-datepicker';
import 'air-datepicker/src/sass/datepicker.scss';

$('.js-datepicker-container').each(function findCalendar(this: HTMLDivElement) {
  const item = $(this);

  const dateFrom = item.find('.js-datepicker-start');
  const dateTo = item.find('.js-datepicker-end');

  item.find('.js-datepicker').datepicker({
    clearButton: true,
    range: true,
    multipleDatesSeparator: ' - ',
    prevHtml: '<i class="datepicker--icon material-icons">arrow_back</i>',
    nextHtml: '<i class="datepicker--icon material-icons">arrow_forwards</i>',
    navTitles: {
      days: 'MM  <i>yyyy</i>',
    },

    onSelect(data: string) {
      dateFrom.val(data.split('-')[0]);
      dateTo.val(data.split('-')[1]);
    },
  });

  const datep = item.find('.js-datepicker').data('datepicker');

  const datepEl = datep.$datepicker;

  const applyButton = $("<span class='datepicker--button'>Применить</span>");

  applyButton.click(() => {
    if (datep.selectedDates.length < 2) return;
    datep.hide();
  });

  datepEl.find('.datepicker--buttons').append(applyButton);
  dateTo.click(() => datep.show());
  dateFrom.click(() => datep.show());
});
