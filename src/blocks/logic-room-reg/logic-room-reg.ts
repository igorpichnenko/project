const signIn = document.querySelector('.button_signIn');
const createAccount = document.querySelector('.button_regCreate');
const formSignIn = document.querySelector('.registration-container__signing');
const formCreate = document.querySelector('.registration-container__reg');
const content = document.querySelector('.registration-container');

signIn?.addEventListener('click', sign);
createAccount?.addEventListener('click', reg);

function sign() {
  formSignIn?.classList.toggle('registration-container_active');
  formCreate?.classList.remove('registration-container_active');
  window.history.pushState({ param: 'Value' }, '', 'signing.html');
  content?.classList.remove('registration-container_reg-bg');
  content?.classList.add('registration-container_signIn-bg');
}

function reg() {
  formCreate?.classList.toggle('registration-container_active');
  formSignIn?.classList.remove('registration-container_active');
  window.history.pushState({ param: 'Value' }, '', 'registration.html');
  content?.classList.add('registration-container_reg-bg');
  content?.classList.remove('registration-container_signIn-bg');
}
