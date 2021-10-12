// if(true){
//     console.log("TRUE");
// }
// if(0){
//     console.log("FALSE");
// }

//////////////////////////////////////

// if(1){
//     console.log("TRUE");
// }
// if(0){
//     console.log("FALSE");
// }

///////////////////////////////////////

// console.log('START');

// const value = 5;

// if (value > 0) {
//   console.log('TRUE');
// } else {
//   console.log('FALSE');
// }

// console.log('FINISH');

/////////////////////////////////////////

// console.log('START');

// const value = -5;

// if (value > 0) {
//   console.log('TRUE');
// } else {
//   console.log('FALSE');
// }

// console.log('FINISH');

//////////////////////////////////////////

// console.log('Start');

// const value = 0;

// if (value === 0) {
//   console.log(0, ' = value');
// } else if (value > 1) {
//   console.log(value, ' > 1');
// } else if (value < -1) {
//   console.log(value, ' < -1');
// } else {
//   console.log(value);
// }

// console.log('Finish');

/////////////////////////////////////

// console.log('Start');

// const value = 5;

// if (value === 0) {
//   console.log(0, ' = value');
// } else if (value > 1) {
//   console.log(value, ' > 1');
// } else if (value < -1) {
//   console.log(value, ' < -1');
// } else {
//   console.log(value);
// }

// console.log('Finish');

//////////////////////////////////////////

// console.log('Start');

// const value = -5;

// if (value === 0) {
//   console.log(0, ' = value');
// } else if (value > 1) {
//   console.log(value, ' > 1');
// } else if (value < -1) {
//   console.log(value, ' < -1');
// } else {
//   console.log(value);
// }

// console.log('Finish');

//////////////////////////////////////////

// console.log('Start');

// let value;

// if (value === 0) {
//   console.log(0, ' = value');
// } else if (value > 1) {
//   console.log(value, ' > 1');
// } else if (value < -1) {
//   console.log(value, ' < -1');
// } else {
//   console.log(value);
// }

// console.log('Finish');

//////////////////////////////////////////

// const age = 20;
// const result = age >= 18 ? 'Доступ разрешен' : 'Доступ запрещен';

// console.log(result);

///////////////////////////////////////////

// const age = 12;
// const result = age >= 18 ? 'Доступ разрешен' : 'Доступ запрещен';

// console.log(result);

////////////////////////////////////////////

// switch ('Alex') {
//   case 'Ivan':
//     console.log('IVAN');
//     break;
//   case 'Alex':
//     console.log('ALEX');
//     break;
//   case 'Max':
//     console.log('MAX');
//     break;
//   default:
//     console.log('Имя нет в списке');
// }

////////////////////////////////////////////

// switch ('Mary') {
//   case 'Ivan':
//     console.log('IVAN');
//     break;
//   case 'Alex':
//     console.log('ALEX');
//     break;
//   case 'Max':
//     console.log('MAX');
//     break;
//   default:
//     console.log('Имя нет в списке');
// }

/////////////////////////////////////////////

// switch ('Mary') {
//   case 'Ivan':
//     console.log('IVAN');
//     return;
//   case 'Alex':
//     console.log('ALEX');
//     return;
//   case 'Max':
//     console.log('MAX');
//     return;
//   default:
//     console.log('Имя нет в списке');
// }

// console.log("FINISH");

/////////////////////////////////////////////

// switch ('Ivan') {
//   case 'Ivan':
//     console.log('IVAN');
//     return;
//   case 'Alex':
//     console.log('ALEX');
//     return;
//   case 'Max':
//     console.log('MAX');
//     return;
//   default:
//     console.log('Имя нет в списке');
// }

// console.log("FINISH"); // здесь "FINISH" не сработает из-за return

//////////////////////////////////////////////
// ЗАДАЧА 1. решаем задачу с помощью тернарного оператора

// let a = 5666;
// let b = 26;
// let c = 3333;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

//////////////////////////////////////////////
// ЗАДАЧУ 1. можно записать еще так(одинаково, но подлинее)

// let a = 5666;
// let b = 26;
// let c = 3333;

// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   } else {
//     console.log(c);
//   }
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

/////////////////////////////////////////////////
// ЗАДАЧА 3.

// const userRole = 'manager';
// switch (userRole) {
//   case 'user':
//     console.log('дата рождения 20.08.2000, любит томатный сок');
//     break;
//   case 'manager':
//     console.log('дата рождения 01.07.1999, любит крепкий кофе');
//     break;
//   case 'admin':
//     console.log('дата рождения 10.12.2003, любит пить чай');
//     break;
//   default:
//     console.log('нет пользователя');
// }
// console.log('FINISH');

//////////////////////////////////////////////////// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (&&, ||, !)

// const a = 0;

// const b = 1;

// const result1 = a || b;
// console.log(result1);

//////////////////////////////////////////////////

// const a = 100;

// const b = 1;

// const result1 = a || b;
// console.log(result1);

//////////////////////////////////////////////////

// const a = false;

// const b = 0;

// const result1 = a || b;
// console.log(result1);

//////////////////////////////////////////////////

// const a = 0;
// const b = 1;

// const result = a && b;

// console.log(result);

//////////////////////////////////////////////////

// const a = 10;
// const b = 1;

// const result = a && b;

// console.log(result);

//////////////////////////////////////////////////

// const a = 10;
// const b = "";

// const result = a && b;

// console.log(result);

//////////////////////////////////////////////////

// const a = 10;
// const b = "d";

// const result = a && b;

// console.log(result);

//////////////////////////////////////////////////

// const a = 1;
// const b = 2;
// const c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

/////////////////////////////////////////////////

// const a = 10;
// const b = 2;
// const c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

/////////////////////////////////////////////////

// const a = 10;
// const b = 200;
// const c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

////////////////////////////////////////////////

// const a = 10;
// const b = 200;
// const c = 3;
// const d = 1000;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// console.log((a && b) || (c && d));

/////////////////////////////////////////////////

// const name = '';

// if (!name) {
//   console.log('Имя нет');
// } else {
//   console.log('Имя есть');
// }

/// тоже самое, что и предыдущий код

// if (name) {
//   console.log('Имя есть');
// } else {
//   console.log('Имя нет');
// }

/////////////////////////////////////////////////

//console.log(!"Alex");  // false

/////////////////////////////////////////////////

//console.log(!!"Alex");  // true
//console.log(Boolean("Alex"));  // true тоже самое, что и предыдущий код

/////////////////////////////////////////////////

// console.log('start');

// while (true) {
//   console.log('loop');
// }
// console.log('end');  // бесконечный цикл, будет выполняться бесконечно (остановить ctrl + C)

//////////////////////////////////////////////////

// console.log('start');

// while (false) {
//   console.log('loop');
// }
// console.log('end');

//////////////////////////////////////////////////

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i += 1;  // одинаковые строчки i++; и i = i + 1;
// }
// console.log("end");

//////////////////////////////////////////////////

// let i = 0;

// do {
//   console.log('WORK');
// } while (i);

// console.log('end');

//////////////////////////////////////////////////

// for(;;){

// }

//////////////////////////////////////////////////

// console.log('start');

// while (true) {
//   console.log('loop');
//   break;
// }
// console.log('end');

//////////////////////////////////////////////////

// console.log('start');
// let i = 0;
// while (true) {
//   console.log('loop');
//   i += 1;
//   if (i > 10) break;
// }
// console.log('end'); // выдаст 10 раз 'loop' и остановится

//////////////////////////////////////////////////

// console.log('start');
// let i = 0;
// while (true) {
//   console.log('loop');
//   i += 1;
// }
// console.log('end'); // опять будет бесконечный цикл

/////////////////////////////////////////////////
// ЗАДАЧА 1. Вывести в консоль заданную строку N раз.

// let i = 0;
// while (true) {
//   console.log('Учиться!');
//   i += 1;
//   if (i > 9) break;
// }

/////////////////////////////////////////////////
// ЗАДАЧА 2. Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, что в первый день продаж всено было N автомобилей.

// let N = 330;
// let M = 50;

// let days = 0;

// while (N >= M) {
//   N /= 2;
//   days += 1;
// }
// console.log(days);

//////////////////////////////////////////////////
