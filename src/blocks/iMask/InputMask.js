import { MaskAdapter } from '../../libs/iMask/MaskAdapter';

class InputMask {
  constructor(element) {
    this.adapter = new MaskAdapter();
    this.element = element;
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { InputMask };
