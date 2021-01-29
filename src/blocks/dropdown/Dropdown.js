import {
  DropdownControl,
} from '../dropdown-control/DropdownControl';

class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.findElement();
    this.handlersBind();
    this.defaultSum();
    this.controls = [...this.values].map(
      (item) => new DropdownControl(item, () => this.update()),
    );
    this.update();
  }

  findElement() {
    this.menu = this.dropdown.querySelector('.dropdown__menu');
    this.toggle = this.dropdown.querySelector('.dropdown__section');
    this.title = this.dropdown.querySelector('.dropdown__title');
    this.isGuests = this.dropdown.classList.contains('dropdown_guest');
    this.defaultTitle = this.dropdown.dataset.default || '';
    this.values = this.dropdown.querySelectorAll('.dropdown-counters');
    this.buttonClear = this.dropdown.querySelector('.dropdown__button_clear') || undefined;
    this.buttonUse = this.dropdown.querySelector('.dropdown__button_use') || undefined;
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
    this.menu.classList.toggle('dropdown_active');
    this.title.classList.toggle('title-active');
  }

  handlerDocument(event) {
    if (event.target.closest('.dropdown') !== this.dropdown) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    const isDropdownClosed = this.menu.classList.contains('dropdown_active');
    if (isDropdownClosed) {
      this.menu.classList.remove('dropdown_active');
    }
  }

  handlerUse(event) {
    if (this.sumGuests !== 0) {
      event.preventDefault();
      this.closeDropdown();
    }
  }

  handlerClear(event) {
    event.preventDefault();
    this.controls.forEach((element) => {
      element.upValue(0);
    });
  }

  update() {
    this.updateTitle();
    this.checkAdultButtonUse();
  }

  checkButtonClear() {
    const allMin = !this.controls.map((item) => item.isMin()).includes(false);
    if (allMin === true) {
      this.hiddenClearButton();
    } else {
      this.visibleClearButton();
    }
  }

  checkButtonUse() {
    const isAllZerro = !this.controls
      .map((item) => item.isZerro())
      .includes(false);
    if (isAllZerro === true) {
      this.hiddenButtonUse();
    } else {
      this.visibleButtonUse();
    }
  }

  checkAdultButtonUse() {
    if (this.sumAdult === 0 && this.sumBabies > 0) {
      this.hiddenButtonUse();
    }
  }

  hiddenClearButton() {
    this.buttonClear.style.display = 'none';
  }

  visibleClearButton() {
    this.buttonClear.style.display = 'block';
  }

  hiddenButtonUse() {
    this.buttonUse.style.display = 'none';
  }

  visibleButtonUse() {
    this.buttonUse.style.display = 'block';
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

  defaultSum() {
    let DefaultSum = 0;
    this.values.forEach((item) => {
      this.AllInput = item.querySelectorAll('.dropdown-counters__value');

      this.AllInput.forEach((el) => {
        DefaultSum += Number(el.value);
      });
    });

    this.DefaultSum = DefaultSum;
  }

  // логика всех заголовков
  updateTitle() {
    if (this.isGuests === true) {
      this.updateDropdownGuests();
    } else {
      this.updateDropdownRoom();
    }
  }

  updateDropdownGuests() {
    const array = this.controls.map((item) => item.getValue());

    const [adults,
      children,
      babies] = [array[0],
      array[1],
      array[2]];

    this.sumGuests = adults + children + babies;
    this.sumAdult = adults + children;
    this.sumBabies = babies;

    if (adults + children < 10) {
      this.controls.map((item) => item.activatePlus());
    } else {
      this.sumAdult = 10;
      this.length = this.controls.length;
      this.controls.forEach((item, index) => {
        if (index !== this.length - 1) {
          item.deactivatePlus();
        }
      });
    }
    if (babies === 10) {
      const { length } = this.controls;
      this.controls.forEach((item, index) => {
        if (index === length - 1) {
          item.deactivatePlus();
        }
      });
    }

    if (adults > 0 || children > 0) {
      this.checkButtonClear();
      this.checkButtonUse();
    } else {
      this.checkButtonClear();
    }

    const formGuests = ['гость',
      'гостя',
      'гостей'];
    const formNewborns = ['младенец',
      'младенца',
      'младенцев'];
    this.messageGuests = this.formDeclension(this.sumAdult, formGuests);

    this.messageNewborns = this.formDeclension(this.sumBabies, formNewborns);
    if (this.sumBabies === 0 && this.sumAdult === 0) {
      this.title.innerHTML = 'Сколько гостей';
    } else if (this.sumAdult !== 0 && this.sumBabies === 0) {
      this.title.innerHTML = `${this.sumAdult} ${this.messageGuests}`;
    } else {
      this.title.innerHTML = `${this.sumAdult} ${this.messageGuests}, ${this.sumBabies} ${this.messageNewborns}`;
    }
  }

  updateDropdownRoom() {
    const array = this.controls.map((item) => item.getValue());

    const [Bedroom,
      Bed,
      Bathroom] = [array[0],
      array[1],
      array[2]];

    const sum = Bedroom + Bed + Bathroom;

    if (sum !== this.DefaultSum) {
      this.checkButtonClear();
      this.checkButtonUse();
    }

    const formBedroom = ['спальня',
      'спальни',
      'спален'];
    const formBed = ['кровать',
      'кровати',
      'кроватей'];
    const formBathroom = ['ванная',
      'ванные',
      'ванных'];

    const messageBedroom = this.formDeclension(Bedroom, formBedroom);
    const messageBed = this.formDeclension(Bed, formBed);
    const messageBathroom = this.formDeclension(Bathroom, formBathroom);

    if (sum > 0 && Bathroom > 0) {
      this.title.innerHTML = `${Bedroom} ${messageBedroom}, ${Bed} ${messageBed},${Bathroom} ${messageBathroom}`
      + '...';
    } else this.title.innerHTML = `${Bedroom} ${messageBedroom}, ${Bed} ${messageBed}...`;
  }
}
export {
  Dropdown,
};
