const likeBlocks = document.querySelectorAll(".like");

//likeBlocks &&

  likeBlocks.forEach(function (like) {
    
    const valueEl = like.querySelector(".like__number");
    
    const checkbox = like.querySelector(".like__input");
    console.log(like)
    like.addEventListener("click", (event) => {
     // event.stopPropagation();
      console.log(like)
      const checked = event.target.checked;
      const value = parseInt(valueEl.innerHTML);
      if (checked === true) {
        valueEl.innerHTML = value + 1;
      }
      if (checked === false) {
        valueEl.innerHTML = value - 1;
      }
    });
  });
