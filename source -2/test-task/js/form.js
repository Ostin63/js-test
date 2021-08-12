import {
  TITLE,
  PRICE,
  NameLength,
  MAX_PRICE,
  PRICE_TYPE,
  ROOM_NUMBER,
  GUESTS_NUMBER,
  TYPE,
  TIMEIN,
  TIMEOUT
} from './constants.js';

const validiteTitle = () => {
  const valueLength = TITLE.value.length;
  if (valueLength < NameLength.MIN) {
    TITLE.setCustomValidity(`Еще ${NameLength.MIN - valueLength} символов`);
  } else if (valueLength > NameLength.MAX) {
    TITLE.setCustomValidity(`Удалите лишние ${valueLength - NameLength.MAX} символов`);
  } else {
    TITLE.setCustomValidity('');
  }
  TITLE.reportValidity();
};

const validitePrice = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

const validiteRooms = () => {
  const guests = GUESTS_NUMBER.value;
  const rooms = ROOM_NUMBER.value;
  if (rooms === '100' && guests !== '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «не для гостей»');
  } else if (rooms === '3' && guests === '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (rooms === '1' && guests !== '1') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 1 гостя»');
  } else if (rooms === '2' && guests === '0' || rooms === '2' && guests === '3') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 2 гостей» или «для 1 гостя»');
  } else {
    GUESTS_NUMBER.setCustomValidity('');
  }
  GUESTS_NUMBER.reportValidity();
};

validiteRooms();
const addPriceValue = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  PRICE.min = PRICE_TYPE[TYPE.value];
};
addPriceValue();

const synchronizeType = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  addPriceValue();
};

const synchronizeTimein = () => {
  TIMEOUT.value = TIMEIN.value;
};

const synchronizeTimeout = () => {
  TIMEIN.value = TIMEOUT.value;
};

const addEventListeners = () => {
  TITLE.addEventListener('input', validiteTitle);
  PRICE.addEventListener('input', validitePrice);
  ROOM_NUMBER.addEventListener('change', validiteRooms);
  GUESTS_NUMBER.addEventListener('change', validiteRooms);
  TYPE.addEventListener('change', synchronizeType);
  TIMEIN.addEventListener('change', synchronizeTimein);
  TIMEOUT.addEventListener('change', synchronizeTimeout);
};

export {
  addEventListeners
};
