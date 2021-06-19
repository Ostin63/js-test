const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
let MIN_PRICE = 5000;
const MAX_PRICE = 1000000;

const AD_FORM = document.querySelector('.ad-form');
const FILDSETS_FORM = AD_FORM.querySelectorAll('fieldset');
const TITLE = AD_FORM.querySelector('#title');
const PRICE = AD_FORM.querySelector('#price');

const deactivationForm = function () {
  AD_FORM.classList.add('ad-form--disabled');
  FILDSETS_FORM.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activationForm = function () {
  AD_FORM.classList.remove('ad-form--disabled');
  FILDSETS_FORM.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

TITLE.addEventListener('invalid', () => {
  if (TITLE.validity.valueMissing) {
    TITLE.setCustomValidity('Обязательное поле');
  } else {
    TITLE.setCustomValidity('');
  }
});

TITLE.addEventListener('input', () => {
  const valueLength = TITLE.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    TITLE.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    TITLE.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    TITLE.setCustomValidity('');
  }
  TITLE.reportValidity();
});

PRICE.addEventListener('invalid', () => {
  switch (true) {
    case PRICE.validity.valueMissing:
      PRICE.setCustomValidity('Обязательное поле');
      break;
    case PRICE.validity.rangeOverflow:
      PRICE.setCustomValidity('Цена не может превышать ' + MAX_PRICE);
      break;
    case PRICE.validity.rangeUnderflow:
      PRICE.setCustomValidity('Цена не может быть ниже ' + MIN_PRICE);
      break;
    default:
      PRICE.setCustomValidity('');
      break;
  }
});

PRICE.addEventListener('input', () => {
  const value = PRICE.value;
  if (value < MIN_PRICE) {
    PRICE.setCustomValidity('Цена не может быть ниже ' + MIN_PRICE);
  } else if (value >= MAX_PRICE) {
    PRICE.setCustomValidity('Цена не может превышать ' + MAX_PRICE);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
});

export {
  deactivationForm,
  activationForm
};
