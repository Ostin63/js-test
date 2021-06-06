const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;
const getRandomFloat = (...args) => {
  const [min, max, dec] = args;
  const errorIndex = args.findIndex((value) => !isPositiveNumber(value));
  if (errorIndex >= 0) {
    throw new Error(`Неверный тип по индексу ${errorIndex}.`);
  }
  const pow = Math.pow(10, dec);
  return Math.round((Math.random() * (max - min) + min) * pow) / pow;
};
getRandomFloat(2, 5, 2);

const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);
getRandomNumber(2, 5);

const NUMBER_MIN = 1;
const LINK_MAX = 8;
const createLinkPhotoAuthor = () => ({
  avatar: `img/avatars/user0${getRandomNumber(NUMBER_MIN, LINK_MAX)}.png`,
});

const NUMBER_MAX = 100;
const createNumber = () => getRandomNumber(NUMBER_MIN, NUMBER_MAX);

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const creatFieldsRandom = (element) => element[getRandomNumber(NUMBER_MIN, element.length)];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createArrayRandom = (element) => {
  const random = () => Math.random() < 0.5;
  const array = element.filter(random);
  if (array < 1) {
    Math.random() * (element.length);
  }
  return array;
};

const createListOffer = () => ({
  title: 'Уютная квартира',
  address: 'location.x, location.y',
  price: createNumber(),
  type: creatFieldsRandom(TYPE),
  rooms: createNumber(),
  guests: createNumber(),
  checkin: creatFieldsRandom(CHECKIN),
  checkout: creatFieldsRandom(CHECKOUT),
  features: createArrayRandom(FEATURES),
  description: 'Офигительное жильё',
  photos: createArrayRandom(PHOTOS),
});

const LOCATION_LAT_MIN = 35.65000;
const LOCATION_LAT_MAX = 35.70000;
const LOCATION_LNG_MIN = 139.70000;
const LOCATION_LNG_MAX = 139.80000;
const LIMIT_SINGS = 5;
const createLocationСoordinates = () => ({
  lat: getRandomFloat(LOCATION_LAT_MIN, LOCATION_LAT_MAX, LIMIT_SINGS),
  lng: getRandomFloat(LOCATION_LNG_MIN, LOCATION_LNG_MAX, LIMIT_SINGS),
});

const createAdv = () => ({
  author: createLinkPhotoAuthor(),
  offer: createListOffer(),
  location: createLocationСoordinates(),
});
createAdv();
