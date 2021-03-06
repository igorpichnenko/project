class Like {
  private like: Element

  private valueEl: HTMLElement

  private checkbox: HTMLInputElement

  constructor(like: Element) {
    this.like = like;
    this.valueEl = this.findValueEl();
    this.checkbox = this.findCheckbox();

    this.bindEventListeners();
  }

  private findValueEl(): HTMLElement {
    const valueEl = this.like.querySelector('.js-like__number')! as HTMLElement;

    return valueEl;
  }

  private findCheckbox(): HTMLInputElement {
    const checkbox = this.like.querySelector('.js-like__input')! as HTMLInputElement;

    return checkbox;
  }

  private bindEventListeners() {
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.checkbox.addEventListener('click', this.handleLikeClick);
  }

  private handleLikeClick() {
    const value = Number(this.valueEl.innerHTML);

    if (this.checkbox.checked) {
      this.valueEl.innerHTML = String(value + 1);
    } else {
      this.valueEl.innerHTML = String(value - 1);
    }
  }
}

export { Like };
