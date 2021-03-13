import { DatapickerAdapter } from '../../libs/datepicker/DatapickerAdapter';

class Calendar {
  constructor(element) {
    this.element = element;
    this.adapter = new DatapickerAdapter();
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { Calendar };
