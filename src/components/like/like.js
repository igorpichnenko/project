const likeBlocks = document.querySelectorAll(".like");

likeBlocks &&

  likeBlocks.forEach(function (like) {
    
    const valueEl = like.querySelector(".like__number");
    
    const checkbox = like.querySelector(".like__input");
    
    like.addEventListener("click", (e) => {
      e.stopPropagation();
      
      const checked = e.target.checked;
      const value = parseInt(valueEl.innerHTML);
      if (checked === true) {
        valueEl.innerHTML = value + 1;
      }
      if (checked === false) {
        valueEl.innerHTML = value - 1;
      }
    });
  });
