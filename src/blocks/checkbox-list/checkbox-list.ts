const acc = document.querySelectorAll('.checkbox-list');
acc.forEach((accordion) => {
  accordion.addEventListener('click', acordClick);

  function acordClick() {
    const panel = <HTMLElement>(
      accordion.querySelector('.checkbox-list__wrapper')
    );

    const icon = accordion.querySelector('.checkbox-list__icon')!;

    if (panel?.style.display === 'block') {
      panel.style.display = 'none';
      icon.classList.toggle('checkbox-list__icon_rotate');
    } else {
      panel.style.display = 'block';
      icon.classList.toggle('checkbox-list__icon_rotate');
    }
  }
});
