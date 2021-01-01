import '../../scss/main.scss';
import './registration.scss';
import '../../pixel.js'

let signIn = document.querySelector('.button_signIn')
let createAcount = document.querySelector('.button_regCreate')
let formSignIn = document.querySelector('.registration-container__signin')
let formCreate = document.querySelector('.registration-container__reg')
let content = document.querySelector('.registration-container')

signIn.addEventListener('click', function() {
  formSignIn.classList.toggle('active')
  formCreate.classList.remove('active')
  history.pushState({param: 'Value'}, '', 'signin.html');
  content.classList.remove('registr')
  content.classList.add('signin')
})
createAcount.addEventListener('click', function() {
  formCreate.classList.toggle('active')
  formSignIn.classList.remove('active')
history.pushState({param: 'Value'}, '', 'registration.html');
content.classList.add('registr')
content.classList.remove('signin')

})

