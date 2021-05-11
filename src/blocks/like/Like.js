class Like {

  constructor(like) {
    this.like = like;
    this.valueEl = this.findValueEl();
    this.checkbox = this.findCheckbox();

    this.bindEventListeners();
  }

   findValueEl() {
    const valueEl = this.like.querySelector('.js-like__number');

    return valueEl;
  }

  findCheckbox() {
    const checkbox = this.like.querySelector('.js-like__input');

    return checkbox;
  }

   bindEventListeners() {
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.checkbox.addEventListener('click', this.handleLikeClick);
  }

  handleLikeClick() {
    const value = Number(this.valueEl.innerHTML);

    if (this.checkbox.checked) {
      this.valueEl.innerHTML = String(value + 1);
    } else {
      this.valueEl.innerHTML = String(value - 1);
    }
  }
}

export { Like };
