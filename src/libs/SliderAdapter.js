import 'color-range-slider/dist/slider';

class SliderAdapter {
  constructor() {
    this.options = this.state();
  }

  state() {
    const options = {
      fromTo: true,
      max: 15000,
      from: 5000,
      to: 10000,
      isColor: false,
      isScale: false,
      isLabel: false,
      color: '#6fcf97',
      gradient: '#66d2ea',
      gradientDeg: '180',
    };

    return options;
  }

  init(element) {
    element.colorSlider(this.options);
  }
}

export { SliderAdapter };
