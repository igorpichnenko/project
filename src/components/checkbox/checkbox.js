let acc = document.querySelectorAll(".checkbox-list")
let accord = acc.forEach(function (accordion) {
  accordion.addEventListener("click", function() {
    
        this.classList.toggle("active");
        
let icon = accordion.querySelector('.checkbox-list__icon');

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
           icon.classList.toggle("checkbox-list__icon_rotate")
        } else {
            panel.style.display = "block";
           icon.classList.toggle("checkbox-list__icon_rotate")
        }
    });

})


