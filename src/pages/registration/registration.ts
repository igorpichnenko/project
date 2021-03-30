import '../../blocks/dropdown/dropdown-init';
import '../../scss/main.scss';
import './registration.scss';
import '../../blocks/burger/burger-init';
import '../../blocks/iMask/iMask-init';

 class LogicRoomReg {
    private room: Element
  
    private elements: Element[]
  
    constructor(room: Element) {
      this.room = room;
      this.elements = this.findElement();
      this.bindEventListeners();
    }
  
    private findElement(): Element[] {
      const buttonSignIn = this.room.querySelector('.js-button_signIn')!;
      const buttonCreateAccount = this.room.querySelector('.js-button_regCreate')!;
      const formSignIn = this.room.querySelector('.js-registration-container__signing')!;
      const formCreate = this.room.querySelector('.js-registration-container__reg')!;
  
      return [buttonSignIn,
        buttonCreateAccount,
        formCreate,
        formSignIn];
    }
  
    private bindEventListeners() {
      this.handleSignInButtonClick = this.handleSignInButtonClick.bind(this);
      this.elements[0].addEventListener('click', this.handleSignInButtonClick);
  
      this.handleAccountButtonClick = this.handleAccountButtonClick.bind(this);
      this.elements[1].addEventListener('click', this.handleAccountButtonClick);
    }
  
    private handleAccountButtonClick() {
      this.elements[2].classList.toggle('registration-container_active');
      this.elements[3].classList.remove('registration-container_active');
      window.history.pushState({
        param: 'Value',
      }, '', 'registration.html');
      this.room.classList.add('registration-container_reg-bg');
      this.room.classList.remove('registration-container_signIn-bg');
    }
  
    private handleSignInButtonClick() {
      this.elements[3].classList.toggle('registration-container_active');
      this.elements[2].classList.remove('registration-container_active');
      window.history.pushState({
        param: 'Value',
      }, '', 'signing.html');
      this.room.classList.remove('registration-container_reg-bg');
      this.room.classList.add('registration-container_signIn-bg');
    }
  }
  
  document.querySelectorAll('.js-registration-container').forEach((room) => {
    new LogicRoomReg(room);
  });
  