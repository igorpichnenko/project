const likeBlocks = document.querySelectorAll('.like');

likeBlocks?.forEach((like) => {
  const valueEl = like.querySelector('.like__number');

  const checkbox = <HTMLInputElement>like.querySelector('.like__input');

  checkbox?.addEventListener('click', likeClick);

  function likeClick(): void {
    const value: number = Number(valueEl!.innerHTML);

    if (checkbox?.checked) {
      valueEl!.innerHTML = String(value + 1);
    } else {
      valueEl!.innerHTML = String(value - 1);
    }
  }
});
