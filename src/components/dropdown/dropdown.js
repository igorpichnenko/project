import { DropdownControl } from '../dropdown-counters/dropdown-counters';

class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.findElement();
    this.handlersBind();
    this.controls = [...this.values].map(
      (item) => new DropdownControl(item, () => this.update()),
    );
    this.update();
  }

  findElement() {
    this.menu = this.dropdown.querySelector('.dropdown__menu');
    this.toggle = this.dropdown.querySelector('.dropdown__section');
    this.title = this.dropdown.querySelector('.dropdown__title');
    this.name = this.dropdown.dataset.name;
    this.defaultTitle = this.dropdown.dataset.default || '';
    this.values = this.dropdown.querySelectorAll('.dropdown-counters');
    this.buttonClear = this.dropdown.querySelector('.dropdown__button_clear') || undefined;
    this.buttonUse = this.dropdown.querySelector('.dropdown__button_use') || undefined;
  }

  getChild() {
    const { length } = this.controls;
    let childSum = 0;
    let array = [];
    this.controls.forEach((item, index) => {
      childSum = item.childSum(index, length);
      array = array.concat(childSum);
    });
    return array;
  }

  getSum() {
    let sum = 0;
    this.controls.forEach((item) => {
      sum += item.getValue();
    });
    return sum;
  }

  handlersBind() {
    this.handlerMenu = this.handlerMenu.bind(this);
    this.toggle.addEventListener('click', this.handlerMenu);
    this.handlerDocument = this.handlerDocument.bind(this);
    document.addEventListener('click', this.handlerDocument);
    if (this.buttonUse) this.handlerUse = this.handlerUse.bind(this);
    this.buttonUse.addEventListener('click', this.handlerUse);
    if (this.buttonClear) this.handlerClear = this.handlerClear.bind(this);
    this.buttonClear.addEventListener('click', this.handlerClear);
  }

  handlerMenu() {
    this.toggle.classList.toggle('dropdown__toggle_active');
    this.menu.classList.toggle('dropdown_active');
    this.title.classList.toggle('title-active');
  }

  handlerDocument(event) {
    if (event.target.closest('.dropdown') !== this.dropdown) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    const isDropdownClosed = this.toggle.classList.contains('dropdown__toggle_active')
      && this.menu.classList.contains('dropdown_active');
    if (isDropdownClosed) {
      this.toggle.classList.remove('dropdown__toggle_active');
      this.menu.classList.remove('dropdown_active');
    }
  }

  handlerUse(event) {
    event.preventDefault();
    this.closeDropdown();
  }

  handlerClear(event) {
    event.preventDefault();
    this.controls.forEach((element) => {
      element.upValue(0);
    });
  }

  update() {
    this.checkButtonClear();
    this.checkButtonUse();
    this.updateTitle();
    this.checkAdultUse();
  }

  checkButtonClear() {
    const allMin = !this.controls.map((item) => item.isMin()).includes(false);
    if (allMin === true) {
      this.buttonClearHidden();
    } else {
      this.buttonClearVisible();
    }
  }

  checkButtonUse() {
    const isAllZerro = !this.controls
      .map((item) => item.isZerro())
      .includes(false);
    if (isAllZerro === true) {
      this.buttonUseHidden();
    } else {
      this.buttonUseVisible();
    }
  }

  checkAdultUse() {
    if (this.sumAdult === 0 && this.sumBabies > 0) {
      this.buttonUseHidden();
    }
  }

  buttonClearHidden() {
    this.buttonClear.classList.add('dropdown__button_hidden');
  }

  buttonClearVisible() {
    this.buttonClear.classList.remove('dropdown__button_hidden');
  }

  buttonUseHidden() {
    this.buttonUse.classList.add('dropdown__button_hidden');
  }

  buttonUseVisible() {
    this.buttonUse.classList.remove('dropdown__button_hidden');
  }

  formDeclension(number, form) {
    number = Math.abs(number) % 100;
    const n1 = number % 10;
    if (number > 10 && number < 20) {
      return form[2];
    }
    if (n1 > 1 && n1 < 5) {
      return form[1];
    }
    if (n1 === 1) {
      return form[0];
    }
    return form[2];
  }

  // логика всех заголовков
  updateTitle() {
    if (this.name !== undefined) {
      const arraySum = this.getChild();

      for (
        let index = 0, sumAdult = 0;
        index < 4;
        sumAdult += arraySum[index++]
      ) {
        this.sumAdult = sumAdult;
      }
      for (
        let index = 4, sumBabies = 0;
        index <= 6;
        sumBabies += arraySum[index++]
      ) {
        this.sumBabies = sumBabies;
      }
      const formGuests = ['гость', 'гостя', 'гостей'];
      const formNewborns = ['младенец', 'младенца', 'младенцев'];
      this.messageGuests = this.formDeclension(this.sumAdult, formGuests);

      this.messageNewborns = this.formDeclension(this.sumBabies, formNewborns);
      if (this.sumBabies === 0 && this.sumAdult === 0) {
        this.title.innerHTML = 'Сколько гостей';
      } else if (this.sumAdult !== 0 && this.sumBabies === 0) {
        this.title.innerHTML = `${this.sumAdult} ${this.messageGuests}`;
      } else {
        this.title.innerHTML = `${this.sumAdult} ${this.messageGuests}, ${this.sumBabies} ${this.messageNewborns}`;
      }
    } else {
      const sum = this.getSum();

      let array = this.controls.map((item) => item.getString());
      array = array.filter((element) => element !== null);

      const formBedroom = ['спальня', 'спальни', 'спален'];
      const formBed = ['кровать', 'кровати', 'кроватей'];
      const formBathroom = ['ванная', 'ванные', 'ванных'];

      const messageBedroom = this.formDeclension(array[0], formBedroom);
      const messageBed = this.formDeclension(array[1], formBed);
      const messageBathroom = this.formDeclension(array[2], formBathroom);

      if (sum > 0 && array[2] > 0) {
        this.title.innerHTML = `${array[0]} ${messageBedroom}, ${array[1]} ${messageBed},${array[2]} ${messageBathroom}`
          + '...';
      } else this.title.innerHTML = `${array[0]} ${messageBedroom}, ${array[1]} ${messageBed}...`;
    }
  }
}

export { Dropdown };
