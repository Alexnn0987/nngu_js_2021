// Разбор предыдущих задач из темы (Введение в функции).
// 15. Дан массив с числами. Выведите последовательно его элементы.

// let arr = [6, 2, 5, 4, 3, 1];

// let arrSort = (arr) => {
//   let result = []; // создаем массив в который положим результат
//   for (let j = 0; j < arr.length; j += 1) {
//     // запускаем внешний цикл, который будет запускать логику сортировку поэтапно для каждого элемента
//     for (let i = 0; i < arr.length; i += 1) {
//       // запускаем цикл который будет выполнять поэлементную проверку значений в массиве
//       if (!i) {
//         // присваиваем первый элемент в массиве результатов, этот элемент будет отправной точкой
//         result[i] = arr[i];
//         continue;
//       }
//       // для последующих элементов выполняем проверку на значение
//       if (arr[i] > result[i - 1]) {
//         // если текущий элемент больше предыдущего, то добавляем его в массив результатов
//         result[i] = arr[i];
//       } else {
//         // если текущий элемент меньше чем предыдущий, то помещаем его на место i-1, а предыдущий элемент на место i
//         let a = result[i - 1];
//         result[i - 1] = arr[i];
//         result[i] = a;
//       }
//     }
//     // после каждой итерации первого цикла, производим перезапись входного массива, и запускаем сортировку повторно
//     arr = result;
//   }
//   // после выполнения циклов возвращаем результат
//   return result;
// };
// console.log(arrSort(arr));

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// let evenNine = (num) => {
//   num = `${num}`;
//   let sum = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     sum += +num[i];
//   }

//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };

// console.log(evenNine(2478));

// ЗАДАЧА 3. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// let isPalindrom = (str) => {
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//     newStr += str[str.length - i - 1];
//   }
//   //   console.log(newStr);
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrom('abvgd'));   // false

//////////////

// let isPalindrom = (str) => {
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//     newStr += str[str.length - i - 1];
//   }
//   //   console.log(newStr);
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrom('abvba'));   // true

////////////////////////////////////////////////////////////
// ПРИМИТИВЫ. ОБЪЕКТЫ.

//

// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

/////////

// const obj1 = {
//   name: 'Alex',
// };

// const obj2 = obj1;

// console.log(obj1, obj2);

// obj1.name = 'Ivan';

// console.log(obj1, obj2);

/////////////////////////////////////////////////
// Добавление свойств объекта

// const obj = {};

// obj.true = 1;

// console.log(obj);

//////////////////////////

// const obj = {};

// console.log(obj);

// obj.age = '12';

// obj['name'] = 'Ivan';

// console.log(obj);

//////

// const obj = {};

// console.log(obj);

// obj.age = '12';

// obj['name-user'] = 'Ivan';

// console.log(obj);

////////////////////////////////////////////////////
//Обращение к свойствам объекта

// const obj = {};

// console.log(obj);

// obj.age = '12';

// obj['name-user'] = 'Ivan';

// console.log(obj);

// console.log(obj.age, obj['name-user']);

/////////////////////////////////////////////////////
// Изменение свойст объекта

// const obj = {};

// console.log(obj);

// obj.age = '12';

// obj['name-user'] = 'Ivan';

// console.log(obj);

// console.log(obj.age, obj['name-user']);

// obj.age = '18';
// obj['name-user'] = 'Max';

// console.log(obj);

////////////////////////////////////////////////////
// Удаление свойст объекта

// const obj = {};

// console.log(obj);

// obj.age = '12';

// obj['name-user'] = 'Ivan';

// console.log(obj);

// console.log(obj.age, obj['name-user']);

// obj.age = '18';
// obj['name-user'] = 'Max';

// console.log(obj);

// console.log(obj.age);
// delete obj.age;

// console.log(obj);
// console.log(obj.age);

////////////////////////////////////////////////////////
// Методы объекта

// const obj = {
//   sayHi: function () {
//     console.log('HI USER');
//   },
// };

// obj.sayHi();           // HI USER

/////////////////////////////

// const obj = {
//   sayHi: function (name) {
//     console.log('HI USER', name);
//   },
// };

// obj.sayHi('MAX');       // HI USER MAX

///////////////////////////////////////////////////////////
// ПРАКТИКА
//ЗАДАЧА 1. Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект должен содержать свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска.
// ЗАДАЧА 2. Добавить свойство содержащее значение выручки фильма в прокате.
// ЗАДАЧА 3. Добавить метод, который который будет выводить название фильма в консоль.
// ЗАДАЧА 4. Удалить свойство содержащее год выпуска.
// ЗАДАЧА 5. Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// // Зад 1.
// const myFavoriteFilm = {
//   nameFilm: 'Троя',
//   releaseDate: '2012 год',
//   directorName: 'Kemeron',
//   nameCountry: 'USA',
// };

// console.log(myFavoriteFilm);

// // Зад 2.

// myFavoriteFilm['filmRevenue'] = '2 000 000 000 "$"';

// console.log(myFavoriteFilm);

// // Зад 3.

// myFavoriteFilm['getNameFilm'] = () => {
//   console.log(myFavoriteFilm.nameFilm);
// };

// myFavoriteFilm.getNameFilm();

// // Зад 4.

// delete myFavoriteFilm.releaseDate;
// console.log(myFavoriteFilm);

// Вывод в консоль(результат)
// {
//     nameFilm: 'Троя',
//     directorName: 'Kemeron',
//     nameCountry: 'USA',
//     filmRevenue: '2 000 000 000 "$"',
//     getNameFilm: [Function (anonymous)]
//   }
//////////////////////////////////////////////////////////

// const obj = {
//   sayHi: function (name) {
//     console.log('HI USER', name);
//   },
// };

// obj?.sayHi('MAX');

// obj.getName = function () {
//   console.log('Name');
// };
// console.log(obj);

////////////////////////////////////////////////////////////
// Примитивы ка объект

///////////////////////////////////////////////////////////
// Строки (Содержимое строки нельзя изменить)

// const str = 'string';
// console.log(str);
// str[0] = 'S';
// console.log(str);
// Выводит
// string
// string

///////////////////////////////////////////////////////////
// Поиск подстроки

// let str = 'Widget with id';
// console.log(str.indexOf('id', 2));  // 12

///////////////////////////////////////////////////////////
// Получение подстроки*

// let str = 'stringify';
// console.log(str.slice(0, 5));   // вернет "strin", символы от 0 до 5 (5 не включает)

////////////////////////////////////////////////////////////
//
// ЗАДАЧА 1. Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// let getRandomNumber = (min, max) => {
//   let rand = Math.random() * (max - min);
//   let result = min + rand;
//   console.log(result);  // до этого выводит с точкой
//   return Math.round(result);
// };

// console.log(getRandomNumber(1, 100));
//////////////////////////////////////////
// let num = (min, max) => {
//     let value = Math.random() * (max * min) + min;
//     return Math
// };
// console.log(Math.max(1, 6));

// ЗАДАЧА 2.Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

// let getRegistr = (str, n) => {
//   if (n > str.length) {
//     console.log('неверные параметры задач');
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// getRegistr('Ivan LEXA', 0);

// ЗАДАЧА 3. Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

// let customReplaceAll = (str, find, replaceStr) => {
//   while (str.includes(find)) {
//     str = str.replace(find, replaceStr);
//   }
//   return str;
// };

// console.log(customReplaceAll('hi is you, hi its me', 'hi', 'HELLO'));

///////////////////////////

// let customReplaceAll = (str, find, replaceStr) => {
//   str = str.replace(find, replaceStr);
//   if (str.includes(find)) {
//     return customReplaceAll(str, find, replaceStr);
//   } else {
//     return str;
//   }
// };

// console.log(customReplaceAll('hi is you, hi its me', 'hi', 'HELLO'));

//////////////////////////////////////////////////////////
// Добавление свойств объекта
// let user = {};
// user.name = 'Ivan';
// user.age = 18;
// console.log(user);
//////////////////////////
// let value = 'name';
// let people = {
//   [value]: 'Ivan',
// };
// console.log(people.name);

///////////////////////////////////////////////////////////
// Обращение к свойствам объекта
// let user = {
//   name: 'Ivan',
//   age: 18,
// };
// console.log(user.name);
// console.log(user['age']);

///////////////////////////////////////////////////////////
// Изменение свойств объекта
// let user = {
//     name: 'Ivan',
//     age: 18,
//   };
//   user.name = 'Anton';
//   console.log(user.name);
//   console.log(user['age']);

///////////////////////////////////////////////////////////
// Удаление свойств объекта
// let user = {
//   name: 'Ivan',
//   age: 18,
// };
// console.log(user.name);
// delete user.name;
// console.log(user.name);

///////////////////////////////////////////////////////////
// Методы объекта
// let user = {
//   sayName: function () {
//     console.log('Ivan');
//   },
// };
// user.sayName();

//////////////////////////////////////////////////////////
