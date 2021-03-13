import 'air-datepicker';

class DatapickerAdapter {
  init(element) {
    const dateFrom = element.find('.js-datepicker-start');
    const dateTo = element.find('.js-datepicker-end');

    element.find('.js-datepicker').datepicker({

      clearButton: true,
      range: true,
      multipleDatesSeparator: ' - ',
      prevHtml: '<i class="datepicker--icon material-icons">arrow_back</i>',
      nextHtml: '<i class="datepicker--icon material-icons">arrow_forwards</i>',

      navTitles: {
        days: 'MM  <i>yyyy</i>',
      },

      onSelect(data) {
        dateFrom.val(data.split('-')[0]);
        dateTo.val(data.split('-')[1]);
      },

    });

    const calendar = element.find('.js-datepicker').data('datepicker');
    const calendarEl = calendar.$datepicker;

    this.addButton(dateFrom, dateTo, calendar, calendarEl);
  }

  addButton(dateFrom, dateTo, calendar, calendarEl) {
    const applyButton = $("<span class='datepicker--button'>Применить</span>");

    applyButton.click(() => {
      if (calendar.selectedDates.length < 2) return;
      calendar.hide();
    });

    calendarEl.find('.datepicker--buttons').append(applyButton);

    dateTo.click(() => calendar.show());
    dateFrom.click(() => calendar.show());
  }
}

export { DatapickerAdapter };
