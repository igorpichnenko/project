class Burger{
   constructor(menu){
       this.playMenu(menu)
     }

playMnu(menu){
  
  let navbar = menu.querySelector('.header-main__nav');
  let burger = menu.querySelector('.header-main__burger-menu');
  
   burger.addEventListener('click', function(){
     
  burger.classList.toggle('header-main__burger-open');
  navbar.classList.toggle("header-main__open-menu")
   })}
  
}
  
  export { Burger };
 
 