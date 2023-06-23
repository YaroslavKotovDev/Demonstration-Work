/* Slider list */
const sliderList = document.querySelectorAll('.featured__slider.featured-slider');
const sliderHouse = document.getElementById('house');
const sliderVilla = document.getElementById('villa');
const sliderAppartment = document.getElementById('appartment');

/* Categoryes list */
const categoryList = document.querySelectorAll('.featured-hat__menu-item');
const buttonHouse = document.getElementById('houseButton');
const buttonVilla = document.getElementById('villaButton');
const buttonAppartment = document.getElementById('appartmentButton');

/* Arrows list */
const arrowsHouse = document.getElementById('btn-house');
const arrowsVilla = document.getElementById('btn-villa');
const arrowsAppartment = document.getElementById('btn-appartment');
const arrowsList = document.querySelectorAll('.featured-hat__navigation');
const emailSubmit = document.getElementById('subscribe-centerblock-form__btn');
const container = document.getElementById('subscribe-centerblock-form');
const emaiInput = document.getElementById('email');

const changeArrows = () => {
  arrowsList.forEach(item => {
    item.classList.remove('navigationActive');
  });
};
const changeActive = () => {
  categoryList.forEach(item => {
    item.classList.remove('category-active');
  });
};
const changeSlider = () => {
  sliderList.forEach(item => {
    item.classList.remove('slider-active');
  });
};
const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const setStateContainer = (isValid) => {
    const name = isValid ? 'valid-email' : 'no-valid-email';
    container.classList.add(name);

    setTimeout(() => {
        container.classList.remove(name);
    }, 5000);
}

categoryList.forEach(item => {
  item.addEventListener('click', () => {
    changeActive();
    changeSlider();
    changeArrows();
  });
  item.addEventListener('click', () => {
    item.classList.toggle('category-active');
  });
});

buttonHouse.addEventListener('click', () => {
  sliderHouse.classList.add('slider-active');
  arrowsHouse.classList.add('navigationActive');
});
buttonVilla.addEventListener('click', () => {
  sliderVilla.classList.add('slider-active');
  arrowsVilla.classList.add('navigationActive');
});
buttonAppartment.addEventListener('click', () => {
  sliderAppartment.classList.add('slider-active');
  arrowsAppartment.classList.add('navigationActive');
});

emailSubmit.addEventListener('click', e => {
  const isValid = validateEmail(email.value);

  if (isValid) {
    email.value = '';

    setStateContainer(isValid);
  } else {
    setStateContainer(isValid);
  }
});
