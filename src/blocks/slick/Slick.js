import { SlickAdapter } from '../../libs/slick/SlickAdapter';

class Slick {
  constructor(element) {
    this.adapter = new SlickAdapter();
    this.element = element;
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { Slick };
