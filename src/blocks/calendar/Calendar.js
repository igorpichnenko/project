import 'air-datepicker';
import 'air-datepicker/src/sass/datepicker.scss';

class Calendar {
  constructor(element) {
    this.element = element;
    this.findItem();
  }

  findItem() {
    const dateFrom = this.element.find('.js-datepicker-start');
    const dateTo = this.element.find('.js-datepicker-end');

    this.element.find('.js-datepicker').datepicker({
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
    const datep = this.element.find('.js-datepicker').data('datepicker');
    const datepEl = datep.$datepicker;

    this.addButton(dateFrom, dateTo, datep, datepEl);
  }

  addButton(dateFrom, dateTo, datep, datepEl) {
    const applyButton = $("<span class='datepicker--button'>Применить</span>");

    applyButton.click(() => {
      if (datep.selectedDates.length < 2) return;
      datep.hide();
    });

    datepEl.find('.datepicker--buttons').append(applyButton);

    dateTo.click(() => datep.show());
    dateFrom.click(() => datep.show());
  }
}

export { Calendar };
