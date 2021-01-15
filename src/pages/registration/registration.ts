import '../../scss/main.scss';
import './registration.scss';
import '../../blocks/header/header-init.ts'
import '../../pixel.js'


let signIn = document.querySelector('.button_signIn')
let createAcount = document.querySelector('.button_regCreate')
let formSignIn = document.querySelector('.registration-container__signin')
let formCreate = document.querySelector('.registration-container__reg')
let content = document.querySelector('.registration-container')

signIn?.addEventListener('click', function() {
  formSignIn?.classList.toggle('registration-container_active')
  formCreate?.classList.remove('registration-container_active')
  history.pushState({param: 'Value'}, '', 'signin.html');
  content?.classList.remove('registration-container_reg-bg')
  content?.classList.add('registration-container_signIn-bg')
})

createAcount?.addEventListener('click', function() {
  formCreate?.classList.toggle('registration-container_active')
  formSignIn?.classList.remove('registration-container_active')
history.pushState({param: 'Value'}, '', 'registration.html');
content?.classList.add('registration-container_reg-bg')
content?.classList.remove('registration-container_signIn-bg')

})