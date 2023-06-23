function headerMenu() {
  const headerMenu = document.querySelector('.header-menu');
  const trigger = document.querySelector('.width__submenu');
  const arrow = document.querySelector('.header-list__svg');

  trigger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    arrow.classList.toggle('active');
  });
}

headerMenu();
