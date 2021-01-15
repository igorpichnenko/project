const likeBlocks = document.querySelectorAll(".like");

  likeBlocks?.forEach(function (like) {
    
    const valueEl = like.querySelector(".like__number");
    
    const checkbox = <HTMLInputElement>like.querySelector(".like__input");
    
    checkbox?.addEventListener("click", () => {
   
    
      const value: number = parseInt(valueEl!.innerHTML);
      
      if (checkbox?.checked) {
        valueEl!.innerHTML = String(value + 1)
      }
      else {
        valueEl!.innerHTML = String(value - 1)
      }
    });
  });

      
 /*const like = $(".like");
 
like.each(function () {
  
  const el = $(this);
  
  let valueEl = el.find(".like__number");
  let checkbox = el.find(".like__input");
  
  checkbox.on("click", () => {
    
    let va: number = +valueEl!.html();
    
    let plus  = String(va + 1);
    let minus  = String(va - 1);
    
    if ($(checkbox).is(":checked")) {
      valueEl!.html(plus);
    } else {
      valueEl!.html(minus);
    }
  });
});*/