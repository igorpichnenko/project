class LogicRoomReg {
  private room: Element
  private elements: Element[]

  constructor (room: Element) {
    this.room = room
    this.elements = this.findElement()
    this.bindEventListeners()
  }
  private findElement(): Element[] {
    let buttonSignIn = this.room.querySelector('.js-button_signIn')!
    let buttonCreateAccount = this.room.querySelector('.js-button_regCreate')!
    let formSignIn = this.room.querySelector('.js-registration-container__signing')!
    let formCreate = this.room.querySelector('.js-registration-container__reg')!

    return [buttonSignIn,
      buttonCreateAccount,
      formCreate,
      formSignIn]
  }
  private bindEventListeners() {
    this.handleSignIn = this.handleSignIn.bind(this);
    this.elements[0].addEventListener('click', this.handleSignIn);

    this.handleCreateAccountButton = this.handleCreateAccountButton.bind(this);
    this.elements[1].addEventListener('click', this.handleCreateAccountButton);
  }

  private handleCreateAccountButton() {
    this.elements[2].classList.toggle('registration-container_active');
    this.elements[3].classList.remove('registration-container_active');
    window.history.pushState({
      param: 'Value'
    }, '', 'registration.html');
    this.room.classList.add('registration-container_reg-bg');
    this.room.classList.remove('registration-container_signIn-bg');
  }

  private handleSignIn() {
    this.elements[3].classList.toggle('registration-container_active');
    this.elements[2].classList.remove('registration-container_active');
    window.history.pushState({
      param: 'Value'
    }, '', 'signing.html');
    this.room.classList.remove('registration-container_reg-bg');
    this.room.classList.add('registration-container_signIn-bg');
  }

}

export { LogicRoomReg }