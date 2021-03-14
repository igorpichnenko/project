import { DatepickerAdapter } from '../../libs/datepicker/DatepickerAdapter';

class Calendar {
  constructor(element) {
    this.element = element;
    this.adapter = new DatepickerAdapter();
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { Calendar };
