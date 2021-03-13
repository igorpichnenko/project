class DropdownControl {
  constructor(element, update) {
    this.items = element;
    this.getElement();
    this.handlersBind();
    this.checkValue();
    this.update = update;
  }

  getElement() {
    this.option = this.items.querySelector('.dropdown-counters__controls');

    this.input = this.items.querySelector('.dropdown-counters__value');
    this.max = Number(this.input.max);
    this.min = Number(this.input.min);
    this.value = Number(this.input.value);
    this.plusAll = this.items.querySelectorAll('.dropdown-counters__plus');
    this.plusAll.forEach((plus) => {
      this.plusButton = plus;
    });
    this.minusAll = this.items.querySelectorAll('.dropdown-counters__minus');
    this.minusAll.forEach((minus) => {
      this.minusButton = minus;
    });
  }

  handlersBind() {
    this.handlerButtonPlusClick = this.handlerButtonPlusClick.bind(this);
    this.plusButton.addEventListener('click', this.handlerButtonPlusClick);

    this.handlerButtonMinusClick = this.handlerButtonMinusClick.bind(this);
    this.minusButton.addEventListener('click', this.handlerButtonMinusClick);
  }

  handlerButtonPlusClick() {
    this.upValue(this.value + 1);
  }

  handlerButtonMinusClick() {
    this.upValue(this.value - 1);
  }

  upValue(val) {
    const isRange = val <= this.max && val >= this.min;
    const isZero = val === 0;

    isRange && (this.value = val);
    isZero && (this.value = this.min);

    this.updateValue();
    this.checkValue();
    this.update();
  }

  updateValue() {
    this.input.value = this.value;
  }

  checkValue() {
    if (this.value === this.min) {
      this.deactivateMinus();
    } else {
      this.activateMinus();
    }

    if (this.value === this.max) {
      this.deactivatePlus();
    } else {
      this.activatePlus();
    }
  }

  isMin() {
    return this.value === this.min;
  }

  isZero() {
    return this.value === 0;
  }

  getValue() {
    return this.value;
  }

  activatePlus() {
    if (this.plusButton.classList.contains('dropdown-counters__plus_disabled')) {
      this.plusButton.classList.remove('dropdown-counters__plus_disabled');
      this.plusButton.removeAttribute('disabled');
    }
  }

  deactivatePlus() {
    this.plusButton.classList.add('dropdown-counters__plus_disabled');
    this.plusButton.setAttribute('disabled', 'true');
  }

  activateMinus() {
    if (
      this.minusButton.classList.contains('dropdown-counters__minus_disabled')
    ) {
      this.minusButton.classList.remove('dropdown-counters__minus_disabled');
    }
  }

  deactivateMinus() {
    this.minusButton.classList.add('dropdown-counters__minus_disabled');
  }
}

export {
  DropdownControl,
};
