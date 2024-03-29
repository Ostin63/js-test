const SRC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
const SRC2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const getRandomSorter = () => Math.floor(Math.random() * 3) - 1;

const createGetRandomItem = (data) => {
  const mixed = [...data].sort(getRandomSorter);
  const l = mixed.length;
  let i = 0;

  return () => mixed[i++ % l];

};

const getRandomItem = createGetRandomItem(SRC);
const getRandomItem2 = createGetRandomItem(SRC2);

for (let i = 0; i < 100; i++) {
  console.log(getRandomItem());
}

for (let i = 0; i < 100; i++) {
  console.log(getRandomItem2());
}

// Функция, которая возвращает функцию.
// Внешняя функция, родительская и возвращаемая дочерняя функция.
// Родительская функция на вход получает некий массив.
// Сортирует его случайным образом(замешивает) и сохраняет в переменную.
// Так же создает переменную для текущего индекса и возвращает дочернюю
// функцию,
//   которая:
// через замыкание в родительской имеет доступ к переменным с массивом и
// индексом
// и при вызове дочерняя функция возвращает элемент массива по текущему
// индексу, после чего инкриминирует индекс, что я показал вызывая дочернюю функцию
// 100 раз в цикле.
// Таким образом можно создать несколько независимых генераторов случайных
// значений из разных массивов.
// Функция одна и та же, но при каждом очередном вызове(сроки 14 - 15)
// возвращается НОВАЯ функция со своими замыканиями,
//   которая никак не пересекается с другими.
// Ну и функцию в строке 4 перепишите у вас есть что переиспользовать.
//   Строка 8 необязательна, можно напрямую длину массива запрашивать, я это
// для краткости записи.