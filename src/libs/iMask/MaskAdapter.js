import IMask from 'imask';

class MaskAdapter {
  constructor() {
    this.options = this.state();
  }

  state() {
    const options = {
      mask: Date,
      min: new Date(1990, 0, 1),
      max: new Date(2020, 0, 1),
      lazy: true,
    };

    return options;
  }

  init(element) {
    IMask(element, this.options);
  }
}

export { MaskAdapter };
