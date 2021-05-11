import '../../blocks/dropdown/dropdown-init';
import '../../scss/main.scss';
import './registration.scss';
import '../../blocks/burger/burger-init';
import '../../blocks/iMask/iMask-init';

 class LogicRoomReg {
   
  
    constructor(room) {
      this.room = room;
      this.elements = this.findElement();
      this.bindEventListeners();
    }
 findElement() {
      const buttonSignIn = this.room.querySelector('.js-button_signIn');
      const buttonCreateAccount = this.room.querySelector('.js-button_regCreate');
      const formSignIn = this.room.querySelector('.js-registration-container__signing');
      const formCreate = this.room.querySelector('.js-registration-container__reg');
  
      return [buttonSignIn,
        buttonCreateAccount,
        formCreate,
        formSignIn];
    }
  
     bindEventListeners() {
      this.handleSignInButtonClick = this.handleSignInButtonClick.bind(this);
      this.elements[0].addEventListener('click', this.handleSignInButtonClick);
  
      this.handleAccountButtonClick = this.handleAccountButtonClick.bind(this);
      this.elements[1].addEventListener('click', this.handleAccountButtonClick);
    }
  
   handleAccountButtonClick() {
      this.elements[2].classList.toggle('registration-container_is-visible');
      this.elements[3].classList.remove('registration-container_is-visible');
      window.history.pushState({
        param: 'Value',
      }, '', 'registration.html');
      this.room.classList.add('registration-container__reg-background');
      this.room.classList.remove('registration-container__signing-background');
    }
  
     handleSignInButtonClick() {
      this.elements[3].classList.toggle('registration-container_is-visible');
      this.elements[2].classList.remove('registration-container_is-visible');
      window.history.pushState({
        param: 'Value',
      }, '', 'signing.html');
      this.room.classList.remove('registration-container__reg-background');
      this.room.classList.add('registration-container__signing-background');
    }
  }
  
  document.querySelectorAll('.js-registration-container').forEach((room) => {
    new LogicRoomReg(room);
  });
  