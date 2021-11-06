// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
// let str = 'String Random';
// let substr = 'Random';

// str.endsWith();

// String.prototype.endsWith = (str, substr) => {
//   let findStr = String(str.match(/(\S+)$/g));
//   if (substr === findStr) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(String.prototype.endsWith(str, substr));  //  true

////////////////////////////////////////////////////////////////////////////////

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// let str = 'Астрономия — Наука о небесных телах';

// let getSubstr = (str, char, pos) => {
//   if (pos === 'до') {
//     return str.slice(0, char);
//   } else if (pos === 'после') {
//     return str.slice(char);
//   } else {
//     return 'Error';
//   }
// };
// console.log(getSubstr(str, 10, 'до'));  //  Астрономия

///////////////////////////////////////////////////////////////////////////////

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// let str = 'Астрономия это наука о небесных объектах';
// let count = (str, strSymbol) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === strSymbol) {
//       count += 1;
//     }
//   }
//   return count;
// };
// console.log(count(str, 'н'));  // 4

/////////////////////////////////////////////////////////////////////////////////
// МАССИВЫ. ОБЪЕКТЫ

// Массивы
// let arr1 = new Array(4, 5, 66, 8, 9);
// console.log(arr1);  // [ 4, 5, 66, 8, 9 ]

////////////////////////////////////////
// let arr1 = new Array(4, 5, 66, 8, 9);
// console.log(arr1.length);  //  5

/////////////////////////////////////////
// let arr3 = [4];
// console.log(arr3);  //  [ 4 ]

/////////////////////////////////////////
// let arr3 = [1, 2, 3, 4, 5];
// console.log(arr3);   //  [ 1, 2, 3, 4, 5 ]

// arr3[0] = [10];
// console.log(arr3);  //  [ [ 10 ], 2, 3, 4, 5 ]

/////////////////////////////////////////
// let data = [
//   {
//     name: 'Alex',
//     age: '18',
//   },
//   {
//     name: 'Ivan',
//     age: '20',
//   },
//   {
//     name: 'Max',
//     age: '22',
//   },
// ];
// console.log(data[0].name);  // Alex

//////////////////////////////////////////////////////////////////
// Создание дыр (так не создавать массивы)

// let arr = [];
// console.log(arr);  // []

// arr[0] = 'ноль';
// console.log(arr);  // [ 'ноль' ]

// arr[10] = 'десять';
// console.log(arr);  // [ 'ноль', <9 empty items>, 'десять' ]

//////////////////////////////////////////////////////////////////
// заполнение массива в обратном порядке
// let arr = [];
// console.log(arr); // []

// arr[10] = 'десять';
// console.log(arr); // [ <10 empty items>, 'десять' ]

//////////////////////////////////////////////////////////////////
// убераем дыры

// let arr = [];
// console.log(arr); // []

// arr[0] = 'ноль';
// console.log(arr); // [ 'ноль' ]

// arr[10] = 'десять';
// console.log(arr); // [ 'ноль', <9 empty items>, 'десять' ]

// arr[5] = 'пять';
// console.log(arr); //  [ 'ноль', <4 empty items>, 'пять', <4 empty items>, 'десять' ]  убераем дыры

// console.log(arr[4]); // undefined

///////////////////////////////////////////////////////////////////////////////
// Свойства массива

///////////////
// .length

// let arr = [];
// console.log(arr); // []

// arr[0] = 'ноль';
// console.log(arr); // [ 'ноль' ]

// arr[10] = 'десять';
// console.log(arr); // [ 'ноль', <9 empty items>, 'десять' ]

// arr[5] = 'пять';
// console.log(arr); //  [ 'ноль', <4 empty items>, 'пять', <4 empty items>, 'десять' ]  убераем дыры

// console.log(arr.length); // 11

//////////////////
// .length

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);
// //  [
// //     1, 2, 3, 4,
// //     5, 6, 7, 8
// //   ]

// arr.length = 2;
// console.log(arr); // [ 1, 2 ]

///////////////////////////////////////////////////////////////////////////////
// Приведение массива к строве
// .toString

////////////////////////////////////////////////////////////////////////////////
// Методы добавления \ удаления элементов
// push - Добавляет элемент в конец, и возвращает новую длину массива.

// let arr = [];
// arr.push(1);
// arr.push(10);

// console.log(arr); // [ 1, 10 ]

////////////////////////////////////////////

// let arr = [];
// let testLength = arr.push(1);
// console.log(testLength); // 1

// arr.push(10);

// console.log(arr); // [ 1, 10 ]

/////////////////////////////////////////////

// let arr = [];
// let testLength = arr.push(1);
// console.log(testLength); // 1

// arr.push(10, 100, 120);

// console.log(arr); // [ 1, 10, 100, 120 ]

////////////////////////////////////////////////////////////////////////////////
//  Методы поиска в массиве

////////////////////////////////////////////////////////////////////////////////
// Полезные методы - find()

// let arr = [1, 2, 3, 4];
// let findElem = arr.find((e) => e === 3);
// console.log(findElem);  // 3

//////////////////////////////////////////////

// let countFind = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };
// console.log(countFind([1, 2, 3, 4], 3)); // 3

// console.log([1, 2, 3, 4].find((el) => el === 3)); // 3

////////////////////////////////////////////////////////////////////////////////
// Полезные методы - filter()

// let arr = [1, 2, 3, 4];
// let filterArr = arr.filter((e) => e % 2 === 0);
// console.log(filterArr); // [2, 4]

///////////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];
// console.log(data);
// let filterData = data.filter((el) => el.writer === 'Alex');
// console.log(filterData);
// console.log(data);

////////////////////////////////////////////////////////////////////////////////
// Полезные методы - map()

// let arr = [1, 2, 3, 4];
// let mapArr = arr.map((e) => e * 10);
// console.log(mapArr); // [10, 20, 30, 40]

/////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];

// let newData = data.map((el, i) => {
//   el.index = i;
//   return el;
// });
// console.log(newData);

// [
//     { title: 'First', writer: 'Alex', index: 0 },
//     { title: 'Second', writer: 'Ivan', index: 1 },
//     { title: 'Third', writer: 'Alex', index: 2 },
//     { title: 'Four', writer: 'Max', index: 3 },
//     { title: 'Fife', writer: 'Max', index: 4 },
//     { title: 'Six', writer: 'Ivan', index: 5 },
//     { title: 'Seven', writer: 'Alex', index: 6 }
//   ]
///////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];

// let newData = data.map((el) => el.title);
// console.log(newData);
// // 'First', 'Second',
// //   'Third', 'Four',
// //   'Fife',  'Six',
// //   'Seven'

/////////////////////////////////////////////////////////////////////////////////
// Полезные методы - forEach()

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];

// let testForEach = data.forEach((el) => console.log(el.title));
// console.log(testForEach);

// // First
// // Second
// // Third
// // Four
// // Fife
// // Six
// // Seven
// // undefined

//////////////////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];
// console.log(data);
// let testForEach = data.forEach((el) => {
//   el.title = 'TEST';
// });
// console.log(data);

/////////////////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];
// console.log(data);
// let testForEach = data.forEach((el, i) => {
//   if (i % 2 === 0) {
//     el.title = 'TEST';
//   }
// });
// console.log(data);

///////////////////////////////////////////////////////////

// let data = [
//   { title: 'First', writer: 'Alex' },
//   { title: 'Second', writer: 'Ivan' },
//   { title: 'Third', writer: 'Alex' },
//   { title: 'Four', writer: 'Max' },
//   { title: 'Fife', writer: 'Max' },
//   { title: 'Six', writer: 'Ivan' },
//   { title: 'Seven', writer: 'Alex' },
// ];
// console.log(data);
// let testForEach = data.forEach((el, i, arr) => {
//   if (i % 2 === 0) {
//     el.title = 'TEST';
//     console.log(arr[i]);
//   }
// });

/////////////////////////////////////////////////////////////////////////////////
// Полезные методы - reduce()

// let data = [
//   { value: 2, month: 'январь' },
//   { value: 3, month: 'февраль' },
//   { value: 5, month: 'мфрт' },
// ];

// let valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0);
// console.log(valueSum);

//////////////////////////////////////////////////

// let data = [1, 45, 44];
// let valueSum = data.reduce((acum, curValue) => acum + curValue);
// console.log(valueSum); // 90
//////////////////////////////////////////////////

// let data = [1, 45, 44];
// let valueSum = data.reduce((acum, curValue) => acum - curValue);
// console.log(valueSum); // -88

///////////////////////////////////////////////////

// let data = [1, 45, 44];
// let valueSum = data.reduce((acum, curValue) => acum - curValue, 0);
// console.log(valueSum); // -90
///////////////////////////////////////////////////////////////////////////////

// let str = 'ABCD';
// let a = str.toLowerCase().toUpperCase().trim().length;
// console.log(a);

///////////////////////////////////////////////////////////////////////////////
// Практика
// ● Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

// let posSum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acum, value) => acum + value);
// console.log(posSum([1, -2, -4, 6, 7, 8, 5]));  // 14
// console.log(posSum([1, 2, 4, -6, 7, -8, 5]));  // 6

//////////////////////////////////////////////////////////
// ● Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

// let arr = [1, 5, 5, 2, 3, 4, 5, 6, 1, 1, 6, 7, 8];

// let uniqArr = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(uniqArr(arr));
// // [1,5,2,3,4,6,7,8]

///////////////////////////////
// можно записать эту же задачу по другому

// let arr = [1, 5, 5, 2, 3, 4, 5, 6, 1, 1, 6, 7, 8];

// let uniqArr = (arr) => {
//   let result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };
// console.log(uniqArr(arr));
// [1,5,2,3,4,6,7,8]

//////////////////////////////////////////////////////////
// ● Написать функцию которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 4, 5];

// let isEqualArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };
// console.log(isEqualArr(arr1, arr2));
// console.log(isEqualArr(arr1, arr3));

/////////////////////////////////////////
// Моя задача
// let arr = [5, 6, 7, 8];
// let arr1 = [5, 6, 7, 8];
// let arr2 = [5, 3, 7, 8];
// let elemArr = (arr, arr1) => {
//   if (arr.toString() === arr1.toString()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(elemArr(arr, arr1)); // true
// console.log(elemArr(arr, arr2)); // false

/////////////////////////////////////////////////////////////////////////////////
//  ПОСЛЕДНЯЯ ЗАДАЧА РЕШЕНИЯ

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const isArr = (array1, array2) => array1.toString() === array2.toString();
// console.log(isArr(arr1, arr2));

// const arr0 = [1, 3, 6];
// const arr1 = [1, 3, 5];
// const arr2 = [1, 3, 5];
////////////////////////////////////////////////
//  ПОСЛЕДНЯЯ ЗАДАЧА РЕШЕНИЯ

// function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
//   }

////////////////////////////////////////////////
//  ПОСЛЕДНЯЯ ЗАДАЧА РЕШЕНИЯ

// const comparison = (arr1, arr2) => {
//   if (arr1.toString === arr2.toString) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(comparison(arr1, arr2));
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Копирование объектов (ЧАСТЬ 2)

// let obj1 = { a: 'Hello' };
// let obj11 = { b: 'Hello Alex' };
// let obj2 = Object.assign({}, obj1, obj11);

// console.log(obj1, obj2);
// obj1.a = 'Goodbye';
// console.log(obj1, obj2);

///////////////////////////////////////////////

// let obj1 = {
//   sayHello: 'Hello',
//   user: { name: 'Alex', age: { data: '28', year: '1996', mount: '03' } },
// };
// let obj2 = Object.assign({}, obj1);

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = '2021';
// console.log(obj1.user, obj2.user);

//////////////////////////////////////////////

// let obj1 = {
//   sayHello: 'Hello',
//   user: { name: 'Alex', age: { data: '28', year: '1996', mount: '03' } },
// };
// //   let obj2 = Object.assign({}, obj1);

// console.log(JSON.stringify(obj1));
// let obj2 = JSON.parse(JSON.stringify(obj1));

// // console.log(obj1.user, obj2.user);

// // obj1.user.age.year = '2021';
// // console.log(obj1.user, obj2.user);

/////////////////////////////////////////////

// let obj1 = {
//   sayHello: 'Hello',
//   user: { name: 'Alex', age: { data: '28', year: '1996', mount: '03' } },
// };
// //   let obj2 = Object.assign({}, obj1);

// // console.log(JSON.stringify(obj1));
// let obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = '2021';
// console.log(obj1.user, obj2.user);

////////////////////////
// тоже самое, что и предыдущее...

// let obj1 = {
//   sayHello: 'Hello',
//   user: { name: 'Alex', age: { data: '28', year: '1996', mount: '03' } },
// };
// //   let obj2 = Object.assign({}, obj1);

// // console.log(JSON.stringify(obj1));
// let jsonString = JSON.stringify(obj1);
// let obj2 = JSON.parse(jsonString);

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = '2021';
// console.log(obj1.user, obj2.user);

//////////////////////////////////////////////////////////////////////////////////
//  Оператор расширения (spread)

// let arr1 = [1, 2, 3, 4];

// let arr2 = [7, 8, 9];

// let arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);

///////////////////////////////////////

// let obj1 = { name: 'Alex' };

// let obj2 = { ...obj1 };
// console.log(obj1, obj2);

// obj1.name = 'Ivan';
// console.log(obj1, obj2);

///////////////////////////////////

// let obj1 = { name: 'Alex' };

// let obj2 = { name: 'Max', ...obj1 };
// console.log(obj1, obj2);

// obj1.name = 'Ivan';
// console.log(obj1, obj2);           //  { name: 'Alex' } { name: 'Alex' }
//                                    // { name: 'Ivan' } { name: 'Alex' }

///////////////////////////////////

// let obj1 = { name: 'Alex' };

// let obj2 = { name: 'Max', ...obj1 };
// console.log(obj1, obj2);              //  { name: 'Alex' } { name: 'Alex' }

///////////////////////////////////

// let obj1 = { name: 'Alex', age: '25' };

// let obj2 = { ...obj1, name: 'Max' };
// console.log(obj1, obj2);              //   { name: 'Alex', age: '25' } { name: 'Max', age: '25' }

///////////////////////////////////

// let obj1 = { name: 'Alex', age: '25' };

// let obj2 = { ...obj1, key: 'user1' };
// console.log(obj1, obj2);

//////////////////////////////////////////////////////////////////////////////////
//  Остаточные параметры (rest оператор)

// let getSum = (...args) => {
//   console.log(args);
// };
// getSum(1, 2, 3, 4);  //  [ 1, 2, 3, 4 ]

/////////////////////////////////////////

// let getSum = (a, b, ...args) => {
//   console.log(args);
// };
// getSum(1, 2, 3, 4);     //  [ 3, 4 ]

/////////////////////////////////////////

// let getSum = (a, b, ...args) => {
//   console.log(a, b);
//   console.log(args);
// };
// getSum(1, 2, 3, 4);  //  1 2
//                      //  [ 3, 4 ]

/////////////////////////////////////////

// let getSum = (type, ...args) => {
//   if (type === 'sum') {
//     // сумма
//     console.log(args, 'sum');
//   } else {
//     // вычитать
//     console.log(args, 'negative');
//   }
// };
// getSum('sum', 1, 2, 3, 4, 5, 6, 78, 9, 0);  //  [ 1,  2, 3, 4, 5, 6, 78, 9, 0] sum

// функция которая принимает первым аргументом принимает действие (суммаБ вычитание), после принимает параметры для

//////////////////////

// let getSum = (type, ...args) => {
//   if (type === 'sum') {
//     // сумма
//     console.log(Array.isArray(args), 'sum');
//   } else {
//     // вычитать
//     console.log(args, 'negative');
//   }
// };
// getSum('sum', 1, 2, 3, 4, 5, 6, 78, 9, 0);  //  true sum

///////////////////////////////////////////////////////////////////////////////////////
//  Перебор значений массива

// let arr = [1, 2, 3, 4];

// for (let elem of arr) {
//   console.log(elem);
// }

// //  тоже самое, что и предыдущее...

// for(let i = 0; i < arr.length; i += 1){
//     console.log(arr[i]);
// }

/////////////////////////////////////////////

// let obj = [1, 2, 3, 4];
// for (let elem in obj) {
//   console.log(elem);
// }                        // 0 1 2 3

////////////////////////////////////////////////////////////////////////////////////////
//  Перебор значений объекта

// let obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   console.log(elem);
// }
//   // a
//   // b

////////////////////////

// let obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   console.log(obj[elem]);
// }
//  // 1
//  // 2

////////////////////////

// let obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   console.log(obj[elem]);
//   break;
// }
// // 1

///////////////////////////////////////////////////////////////////////////////////////
// Практика
// ЗАДАЧА 1. Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// let arr = { user: 'Moscow' };
// let newArr = { user: 'Kiev' };
// console.log(newArr);
//доделать

// ЗАДАЧА 2. Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

// let someArgs = (...args) => {
//   let result = 0;
//   for (let elem of args) {
//     if (elem % 2 === 0) {
//       result += elem;
//     }
//   }
//   return result;
// };
// console.log(someArgs(1, 2, 4, -6, 2, 8, 9));

// ЗАДАЧА 3. Написать функцию которая будет принимать два массива, и в качестве результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// let getCommonValue = (arr1, arr2) => {
//   let result = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// };
// console.log(getCommonValue([1, 2, 3, 4, 5, 5, 4], [6, 5, 4]));     // [ 4, 5 ]

//////////////////////////////////////////
// решение через фильтр

// let getCommonValue = (arr1, arr2) => {
//   return arr1.filter((el, i) => arr2.includes(el));
// };
// console.log(getCommonValue([1, 2, 3, 4, 5, 5, 4], [6, 5, 4]));    //[ 4, 5, 5, 4 ]

///////////////////////////////////////////////////////////////////////////////////////
