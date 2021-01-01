import '../../scss/main.scss';
import './registration.scss';
import '../../pixel.js'

let signIn = document.querySelector('.button_signIn')
let createAcount = document.querySelector('.button_regCreate')
let formSignIn = document.querySelector('.registration-container__signin')
let formCreate = document.querySelector('.registration-container__reg')

signIn.addEventListener('click', function() {
  formSignIn.classList.toggle('active')
  formCreate.classList.remove('active')
  history.pushState({param: 'Value'}, '', 'signin.html');
})
createAcount.addEventListener('click', function() {
  formCreate.classList.toggle('active')
  formSignIn.classList.remove('active')
history.pushState({param: 'Value'}, '', 'registration.html');
})

