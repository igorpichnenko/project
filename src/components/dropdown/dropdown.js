class DropdownControl {

  constructor(el, update) {

    this._items = el;
    this._getElement();
    this._handlersBind();
    this._checkValue();
    this._update = update;
    this.name = this._items.dataset.name;
  }

  _getElement() {
    this.option = this._items.querySelector('.dropdown-counters__controls')
    this._min = this.option.dataset.min ? parseInt(this.option.dataset.min): 0;
    this._input = this._items.querySelector('.dropdown-counters__value')
    this.value = parseInt(this._input.innerText);
    this._plusAll = this._items.querySelectorAll('.dropdown-counters__plus')
    this._plusAll.forEach((plus) => {
      this._plusButton = plus
    })
    this._minusAll = this._items.querySelectorAll('.dropdown-counters__minus')
    this._minusAll.forEach((minus) => {
      this._minusButton = minus
    })
  }

  _childSum(index, len) {

    let guestsValue = 0;
    let newbornsValue = 0;
    let item = this._items.querySelector('.dropdown-counters__value')

    if (index !== (len -1)) {
      guestsValue += parseInt(item.innerText);
    } else {
      newbornsValue += parseInt(item.innerText);
    }
    return [guestsValue,
      newbornsValue]
  }

  _handlersBind() {
    this._handlerPlus = this._handlerPlus.bind(this);
    this._plusButton.addEventListener('click', this._handlerPlus);
    this._handlerMinus = this._handlerMinus.bind(this);
    this._minusButton.addEventListener('click', this._handlerMinus);
  }

  _handlerPlus() {
    this._upValue(this.value + 1);
  }
  _handlerMinus() {
    this._upValue(this.value - 1)
  }

  _upValue (val) {

    const value = val > this._min ? val: this._min;
    this.value = value;
    this._updateValue()
    this._checkValue();
    this._update(this.value)
  };

  _updateValue() {
    this._input.innerHTML = this.value
  }

  _checkValue () {
    if (this.value === this._min) {
      this._deactivateMinus();
    } else {
      this._activateMinus();
    }
  }

  isMin() {
    return this.value === this._min;
  }
  isZerro () {
    return this.value === 0
  }

  getString = () => {

    if (this.name !== undefined) {
      return this.value
    }}

  getValue () {
    return this.value;
  }

  _activateMinus() {
    if (this._minusButton.classList.contains('dropdown-counters__minus_disabled')) {
      this._minusButton.classList.remove('dropdown-counters__minus_disabled')
    }
  }
  _deactivateMinus() {
    this._minusButton.classList.add('dropdown-counters__minus_disabled')
  }
}

class Dropdown {

  constructor(dropdown) {

    this._dropdown = dropdown
    this._findElement()
    this._handlersBind()
    this._controls = Array.from(this._values).map(
      (item) => new DropdownControl(item, () => this._update()));
    this._update()
  }


  _findElement() {
    this._menu = this._dropdown.querySelector('.dropdown__menu');
    this._toggle = this._dropdown.querySelector('.dropdown__section');
    this._title = this._dropdown.querySelector('.dropdown__title');
    this.name = this._dropdown.dataset.name;
    this._defaultTitle = this._dropdown.dataset.default || "";
    this._values = this._dropdown.querySelectorAll('.dropdown-counters')
    this._buttonClear = this._dropdown.querySelector('.dropdown__button_clear') || null;
    this._buttonUse = this._dropdown.querySelector('.dropdown__button_use') || null;
  }

  _getChild() {
    let length = this._controls.length
    let childSum = 0
    let arr = []
    this._controls.forEach((item, index) => {

      childSum = item._childSum(index, length)
      arr = arr.concat(childSum)
    })
    return arr
  }

  _getSum () {
    let sum = 0;
    this._controls.forEach((item) => {
      sum += item.getValue();

    })
    return sum;
  };

  _handlersBind() {
    this._handlerMenu = this._handlerMenu.bind(this);
    this._toggle.addEventListener('click', this._handlerMenu);
    this._handlerDocument = this._handlerDocument.bind(this);
    document.addEventListener('click', this._handlerDocument);
    if (this._buttonUse) this._handlerUse = this._handlerUse.bind(this);
    this._buttonUse.addEventListener('click', this._handlerUse);
    if (this._buttonClear) this._handlerClear = this._handlerClear.bind(this);
    this._buttonClear.addEventListener('click', this._handlerClear);
  }

  _handlerMenu() {
    this._toggle.classList.toggle('dropdown__toggle_active')
    this._menu.classList.toggle('dropdown_active')
    
  }

  _handlerDocument(event) {
    if (event.target.closest('.dropdown') !== this._dropdown) {
      this._closeDropdown();
    }
  }

  _closeDropdown() {
    const isDropdownClosed = this._toggle.classList.contains('dropdown__toggle_active') && this._menu.classList.contains('dropdown_active');
    if (isDropdownClosed) {
      this._toggle.classList.remove('dropdown__toggle_active')
      
      this._menu.classList.remove('dropdown_active')
    }
  }

  _handlerUse(event) {
    event.preventDefault();
    this._closeDropdown();
  }

  _handlerClear(event) {
    event.preventDefault();
    this._controls.forEach((el) => {
      el._upValue(0)
    })
  }

  _update() {
    this._checkButtonClear();
    this._checkButtonUse();
    this._updateTitle();
    this._checkAdultUse()
  }

  _checkButtonClear () {
    const allMin = !this._controls
    .map((item) => item.isMin())
    .includes(false);
    if (allMin === true) {
      this._buttonClearHidden()
    } else {
      this._buttonClearVisible()
    }
  };

  _checkButtonUse () {
    const isAllZerro = !this._controls.map((item)=>item.isZerro()).includes(false)
    if (isAllZerro === true) {
      //this._buttonUseHidden()
    } else {
      this._buttonUseVisible()
    }
  }

  _checkAdultUse () {
    if (this.sumAdult === 0 && this.sumBabies > 0) {
     // this._buttonUseHidden()
    }
  }

  _buttonClearHidden() {
    this._buttonClear.classList.add('dropdown__button_hidden')
  }
  _buttonClearVisible() {
    this._buttonClear.classList.remove('dropdown__button_hidden')
  }
  _buttonUseHidden() {
   this._buttonUse.classList.add('dropdown__button_hidden')
  }
  _buttonUseVisible() {
    this._buttonUse.classList.remove('dropdown__button_hidden')}

  _formDeclension(num, form) {
    num = Math.abs(num) % 100;
    var n1 = num % 10;
    if (num > 10 && num < 20) {
      return form[2];
    }
    if (n1 > 1 && n1 < 5) {
      return form[1];
    }
    if (n1 == 1) {
      return form[0];
    }
    return form[2];
  }


  // логика всех заголовков
  _updateTitle = () => {

    if (this.name !== undefined && this.name === 'room') {
      let arrSum = this._getChild()
      for (var i = 0, sumAdult = 0; i < 4; sumAdult += arrSum[i++]);
      this.sumAdult = sumAdult;
      for (var i = 4, sumBabies = 0; i < 6; sumBabies += arrSum[i++]);
      this.sumBabies = sumBabies;

      let formGuests = ['гость',
        'гостя',
        'гостей'];
      let formNewborns = ['младенец',
        'младенца',
        'младенцев'];
      this.messageGuests = this._formDeclension(sumAdult, formGuests);

      this.messageNewborns = this._formDeclension(sumBabies, formNewborns);
      if (sumBabies === 0 && sumAdult === 0) {
        this._title.innerHTML = 'Сколько гостей';
      } else if (sumAdult !== 0 && sumBabies === 0) {
        this._title.innerHTML = `${sumAdult} ${this.messageGuests}`;
      } else {
        this._title.innerHTML = `${sumAdult} ${this.messageGuests}, ${sumBabies} ${this.messageNewborns}`;
      }

    } else {


      const sum = this._getSum();

      let arr = this._controls.map((item) => item.getString());
      arr = arr.filter((el) => el !== null);

      let formBedroom = ['спальня',
        'спальни',
        'спален'];
      let formBed = ['кровать',
        'кровати',
        'кроватей'];
      let formBathroom = ['ванная',
        'ванные',
        'ванных'];

      let messageBedroom = this._formDeclension(arr[0], formBedroom);
      let messageBed = this._formDeclension(arr[1], formBed);
      let messageBathroom = this._formDeclension(arr[2], formBathroom);

      if (sum > 0 && arr[2] > 0) {
        this._title.innerHTML = `${arr[0]} ${messageBedroom}, ${arr[1]} ${messageBed},${arr[2]} ${messageBathroom}` + '...';

      } else this._title.innerHTML = `${arr[0]} ${messageBedroom}, ${arr[1]} ${messageBed}...`;

    }
  };
}

const items = document.querySelectorAll('.dropdown').forEach((item) => new Dropdown(item));