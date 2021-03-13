import { SliderAdapter } from '../../libs/SliderAdapter';

class RangeSlider {
  constructor(element) {
    this.adapter = new SliderAdapter();
    this.element = element;
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { RangeSlider };
