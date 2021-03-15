class Price {
  constructor(element) {
    this.element = element;
    this.findItems();
  }

  findItems() {
    const dropdownInputs = this.element.querySelectorAll('.dropdown-counters__value');
    this.calendarInputEnd = this.element.querySelector('.js-datepicker-end');
    this.calendarInputStart = this.element.querySelector('.js-datepicker-start');
    const btnDrop = this.element.querySelector('.dropdown__button_use');
    this.outPrice = this.element.querySelector('.js-price');
    this.sum = this.element.querySelector('.js-sum');
    this.outTotal = this.element.querySelector('.js-total');
    this.cost = this.element.querySelector('.js-cost');
    this.outService = this.element.querySelector('.js-service');
    this.discountInput = this.element.querySelector('.js-discount');
    this.discountOut = this.element.querySelector('.js-discountOut');

    if (btnDrop) {
      let arr = [];
      btnDrop.onclick = () => {
        dropdownInputs.forEach((element) => {
          arr.push(Number(element.value));
        });

        const [adult, children] = arr;
        this.guest = adult + children;
        arr = [];

        this.updatePrice();
      };

      const $buttons = $('.datepicker--button');
      this.handlerButtonClick = this.handlerButtonClick.bind(this);
      $buttons.eq(1).on('click', this.handlerButtonClick);
    }
  }

  handlerButtonClick() {
    let data1 = this.calendarInputEnd.value;
    let data2 = this.calendarInputStart.value;

    if (data1 === '') data1 = '19.08.2019';
    if (data2 === '') data2 = '23.08.2019';

    const reverseDate = (string) => {
      const [day, mouth, year] = string.split('.');
      return new Date(year, mouth - 1, day);
    };

    const diff = reverseDate(data1).getTime() - reverseDate(data2).getTime();
    const result = Math.ceil(diff / (1000 * 3600 * 24));
    this.days = Math.abs(result);

    this.updatePrice();
  }

  formDeclension(number, form) {
    number = Math.abs(number) % 100;
    const n1 = number % 10;
    const isNumberRange = number > 10 && number < 20;
    const isNumRange = n1 > 1 && n1 < 5;
    if (isNumberRange) return form[2];
    if (isNumRange) return form[1];
    if (n1 === 1) return form[0];
    return form[2];
  }

  updatePrice() {
    const form = ['сутки',
      'суток',
      'суток'];

    if (this.guest === undefined) this.guest = 3;
    if (this.guest <= 1) this.guest = 1;
    if (this.days === undefined) this.days = 4;
    if (this.days > 500) return;

    const costValue = (this.cost.innerHTML).split('₽').join('');
    const costCorrect = Number(costValue.split(' ').join(''));
    const discountValue = (this.discountInput.innerHTML).split('₽').join('');
    const discountCorrect = Number(discountValue.split(' ').join(''));

    const defaultDiscount = (discountCorrect / costCorrect) / 4;
    const defaultCost = costCorrect / 3;
    const defaultServiceOne = 300 / 3;

    const serviceCost = defaultServiceOne * this.guest;
    const price = Math.trunc(defaultCost * this.guest);
    const discount = Math.trunc(price * defaultDiscount * this.days);
    const total = Math.trunc((price * this.days) - discount + serviceCost);

    this.outPrice.innerHTML = `${(price).toLocaleString()}₽ х ${this.days} ${this.formDeclension(this.days, form)}`;
    this.sum.innerHTML = `${(price * this.days).toLocaleString()}₽`;
    this.outTotal.innerHTML = `${total.toLocaleString()}₽`;
    this.outService.innerHTML = `${(serviceCost).toLocaleString()}₽`;
    this.discountOut.innerHTML = `${(discount).toLocaleString()}₽`;
  }
}

export { Price };
