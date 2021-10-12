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
//
//
//
//
//
//
//
//
//
// if (1 || 0) {
//     console.log("Сработало")
// }

// const a = 0
// const b = 1
// let result1 = a || b
// let result2 = a || false || "value" || b
// let result3 false || "" || 0

// if (1 && 0) {
//     console.log("Не сработало")
// }

// const a = 0
// const b = 1
// let result1 = a && b
// let result2 = b && true && 'value'

// console.log('START');

// let sumAvto = 300;
// let avtoDay = 10;
// let day = 0;

// for (let i = sumAvto; i > avtoDay; i = i / 2) {
//   day = day + 1;
//   console.log('продажа авто ${i}');
// }

// console.log('FINISH');

// console.log('START');

// let N = 300;
// let M = 26;

// let days = 0;

// while (N >= M) {
//   N /= 2;
//   days += 1;
// }
// console.log(days);

// console.log('FINISH');
