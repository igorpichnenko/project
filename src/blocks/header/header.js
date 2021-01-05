let navbar = document.querySelector(".header-main__nav")
let burger= document.querySelector('.header-main__burger-menu');

burger.addEventListener('click', function(){
  burger.classList.toggle('header-main__burger-open');
  navbar.classList.toggle("header-main__open-menu")

});