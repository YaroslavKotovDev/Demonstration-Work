document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const animationElements = document.querySelectorAll('[data-animation]');

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight + window.scrollY;
    animationElements.forEach(el => {
      let scrollOffset = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;
      const animationDirection = el.getAttribute('data-animation');

      if (windowCenter >= scrollOffset) {
        el.classList.add(`animation-${animationDirection}`);
      } else {
        el.classList.remove(`animation-${animationDirection}`);
      }
    });
  };

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= heroCenter) {
      header.classList.add('header__fixed');
      hero.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('header__fixed');
      hero.style.marginTop = `0px`;
    }
  };

  headerFixed();
  scrollAnimation();

  window.addEventListener('scroll', () => {
    headerFixed();
    scrollAnimation();
  });
});
