class DropdownControl {
  constructor(element, update) {
    this.items = element;
    this.getElement();
    this.handlersBind();
    this.checkValue();
    this.update = update;
    this.name = this.items.dataset.name;
  }

  getElement() {
    this.option = this.items.querySelector('.dropdown-counters__controls');
    this.min = this.option.dataset.min ? Number(this.option.dataset.min) : 0;
    this.input = this.items.querySelector('.dropdown-counters__value');
    this.value = Number(this.input.textContent);
    this.plusAll = this.items.querySelectorAll('.dropdown-counters__plus');
    this.plusAll.forEach((plus) => {
      this.plusButton = plus;
    });
    this.minusAll = this.items.querySelectorAll('.dropdown-counters__minus');
    this.minusAll.forEach((minus) => {
      this.minusButton = minus;
    });
  }

  childSum(index, len) {
    let guestsValue = 0;
    let newbornsValue = 0;
    const item = this.items.querySelector('.dropdown-counters__value');
    if (index !== len - 1) {
      guestsValue += Number(item.textContent);
    } else {
      newbornsValue += Number(item.textContent);
    }
    return [guestsValue, newbornsValue];
  }

  handlersBind() {
    this.handlerPlus = this.handlerPlus.bind(this);
    this.plusButton.addEventListener('click', this.handlerPlus);
    this.handlerMinus = this.handlerMinus.bind(this);
    this.minusButton.addEventListener('click', this.handlerMinus);
  }

  handlerPlus() {
    this.upValue(this.value + 1);
  }

  handlerMinus() {
    this.upValue(this.value - 1);
  }

  upValue(val) {
    const value = val > this.min ? val : this.min;
    this.value = value;
    this.updateValue();
    this.checkValue();
    this.update(this.value);
  }

  updateValue() {
    this.input.innerHTML = this.value;
  }

  checkValue() {
    if (this.value === this.min) {
      this.deactivateMinus();
    } else {
      this.activateMinus();
    }
  }

  isMin() {
    return this.value === this.min;
  }

  isZerro() {
    return this.value === 0;
  }

  getString() {
    if (this.name !== undefined) {
      // return this.value;
    }
    return this.value;
  }

  getValue() {
    return this.value;
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

export { DropdownControl };
