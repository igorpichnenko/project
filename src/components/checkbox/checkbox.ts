let acc = document.querySelectorAll(".checkbox-accordion")
acc.forEach(function (accordion) {
  
  accordion.addEventListener("click", function() {
    
let panel = <HTMLElement>accordion.querySelector('.checkbox-list__wrapper')

let icon = accordion.querySelector('.checkbox-list__icon')!
        
        if (panel?.style.display === "block") {
            panel.style.display = "none";
           icon.classList.toggle("checkbox-list__icon_rotate")
           
        } else {
          
            panel.style.display = "block";
           icon.classList.toggle("checkbox-list__icon_rotate")
        }
    });

})