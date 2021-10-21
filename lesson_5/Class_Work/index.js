// let arr = [2, 5, -9, 15, 0, -4];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 0) {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);

///////////////////////////////////////////////////////
// const str = 'alex';
// console.log(str[0], str[3]);

///////////////////////////////////////////////////////
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i += 1) {
//   if (
//     +arr[i].toString()[0] === 1 ||
//     +arr[i].toString()[0] === 2 ||
//     +arr[i].toString()[0] === 5
//   ) {
//     console.log(arr[i]);
//   }
// }

////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = '-';
// for (i = 0; i < arr.length; i += 1) {
//   result += `${arr[i]}-`;
// }

// console.log(result);

/////////////////////////////////////////////////////
// function hellooWorld(param) {
//   console.log('HelloWorld');
// }

// hellooWorld();

//////////////////////////////////////////////////////
// let isUserAuth = true;
// function checkAccess(param) {
//   if (isUserAuth) {
//     console.log('Доступ есть');
//   } else {
//     console.log('Доступа нет');
//   }
// }

// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log('Привет Пользователь');
//   } else {
//     console.log('Привет Гость');
//   }
// }

// writeMessage();

////////////////////////////////////////////////

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 0);
// sum(16, 4);

/////////////////////////////////////////////////

// function sum(a, b) {
//   console.log(b);
//   console.log(a + b);
// }

// sum(1, 0);
// sum(16);

///////////////////////////////////////////////////

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }

// sum(1, 4);
// sum(16);

///////////////////////////////////////////////////

// function getName(name) {
//     console.log(' до return ');
//     return name;
//     console.log(' после return ');
//   }

//   getName('Ivan');

///////////////////////////////////////////////////

// function getName(name) {
//   console.log(' до return ');
//   return name;
//   console.log(' после return ');
// }

// const userName = getName('Ivan');
// console.log(userName);

///////////////////////////////////////////////////

// function getName(name) {
//   return;
// }

// const userName = getName('Ivan');
// console.log(userName);

/////////////////////////////////////////////////////

// function getName(name) {}

// const userName = getName('Ivan');
// console.log(userName);

//////////////////////////////////////////////////////

// function getName(name) {
//   return(
//     name
//   )
// }

// const userName = getName('Ivan');
// console.log(userName);

///////////////////////////////////////////////////////

// function getName(name) {
//   return [1, 2, 3, 4, 5, 6];
// }

// const userName = getName('Ivan');
// console.log(userName);

/////////////////////////////////////////////////////////////

// let name = 'Alex';

// function getName(userName) {
//   return userName;
// }

// let nameUserOne = getName(name);
// console.log(nameUserOne);

// name = 'Ivan';

// let nameUserTwo = getName(name);
// console.log(nameUserTwo);

/////////////////////////////////

// function getName(userName) {
//   return userName;
// }

// let name = 'Alex';

// let nameUserOne = getName(name);
// console.log(nameUserOne);

// name = 'Ivan';

// let nameUserTwo = getName(name);
// console.log(nameUserTwo);

////////////////////////////////////////////////////////////

// let name = 'Alex';

// console.log(name, '1');

// function sayHi() {
//   name = 'Petr';

//   console.log(name, 'function');
// }

// console.log(name, '2');

/////////////////////////////////////////////////////////////

// let name = 'Alex';

// console.log(name, '1');

// function sayHi() {
//   name = 'Petr';

//   console.log(name, 'function');
// }

// sayHi();

// console.log(name, '2');

/////////////////////////////////////////////////////////////

// let name = 'Alex';

// console.log(name, '1');

// function sayHi(userName) {
//   userName = 'Petr';

//   console.log(userName, 'function');
// }

// sayHi(name);

// console.log(name, '2');

//////////////////////////////////////////////////////////////

// let name = 'Alex';

// console.log(name, '1');

// function sayHi(userName) {
//   userName = 'Petr';
//   name = 'Max';
//   console.log(userName, 'function');
// }

// sayHi(name);

// console.log(name, '2');

//////////////////////////////////////////////////////////////

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum(); //не чистая функция

/////////////////////////////////////////////////////////////////

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();  // чистая функция

//////////////////////////////////////////////////////////////////
// ЗАДАЧА 1.
// let name = 'Max';

// function sayHi(userName) {
//   if (userName) {
//     console.log('Привет', userName);
//   } else {
//     console.log('Привет');
//   }
// }

// sayHi(name);

///////////////////////////////////////////////////////////////////
//ЗАДАЧА 2.
// function exp(a, b = 1) {
//   console.log(a ** b);
// }

// exp(3, 3);
// exp(2, 8);
// exp(20);

////////////////////////////////////////////////////////////////////

// function getValue(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(getValue([1, 23, 6]));

////////////////////////////////////////////////////////////////////

// const sayName = function (name) {
//   return name;
// };

// console.log(sayName);

////////////////////////////////////////////////////////////////////

// const sayName = function (name) {
//   return name;
// };

// console.log(sayName('Alex'));

////////////////////////////////////////////////////////////////////

// const sayName = function (name) {
//   return name;
// };

// const copy = sayName;
// console.log(sayName('Alex'));

// console.log(copy('Ivan'));

////////////////////////////////////////////////////////////////////

// const getName = function () {
//   console.log('Alex');
// };

// const getUserInfo = function (callBack) {
//   console.log('USER INFO');
//   callBack();
// };

// getUserInfo(getName); //ссылка на функцию

////////////////////////////////////////////////////////////////////
// const getName = function () {
//   console.log('Alex');
// };

// const getUserInfo = function (callBack) {
//   console.log('USER INFO');
//   callBack();
// };

// getUserInfo(getName());  //вызов самой функции

///////////////////////////////////////////////////////////////////

// function test() {
//   console.log('test');
// }
// test();

// const test2 = function () {
//   console.log('test2');
// };

// test2();

///////////////////////////////////////////////////////////////////

// test();

// function test() {
//   console.log('test');
// }                          //Function Dec

// const test2 = function () {
//   console.log('test2');
// };                          //Function Exp

// test2();

///////////////////////////////////////////////////////////////////

// const myFirstArrowFunc = () => console.log('!!');

//////////////////////////////////////////////////////////////////

// const test1 = (name, age) => console.log(name, age);
// test1('Alex', 19);

//////////////////////////////////////////////////////////////////

// const test1 = (name) => name;
// console.log(test1('Alex'));

//////////////////////////////////////////////////////////////////

// const test1 = (name) => {
//   //fubc bady
//   return name;
// };
// console.log(test1('Alex'));

//////////////////////////////////////////////////////////////

// const getLog = () => console.log('LOG');
// getLog();

//////////////////////////////////////////////////////////////

// // Function Declaration
// function example1(param) {
//   return param;
// }
// example1(1);

// // Function Expression
// const example2 = function (param) {
//   return param;
// };
// example2(2);

// //Arrow function .1
// const example3 = (param) => param;
// example3(3);

// //Arrow function .2 // если большая функция
// const example3 = (param) => {
//   //big bady
//   return param;
// };
// example3(3);

/////////////////////////////////////////////////////////////////
//ЗАДАЧА 1.
// const getString = (str, count) => {
//   for (let i = 0; i < count; i += 1) {
//     console.log(str);
//   }
// };

// getString('Ivan', 2);
// getString('London', 4);
// getString('Madrid', 7);

//////////////////////////////////////////////////////////////////
//ЗАДАЧА 2.
// const isPositive = (letter) => {
//   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y') {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPositive('b'));

///////////////////////////////////////////

// const isPositive = (letter) => {
//   switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'y':
//       console.log('true');
//       break;
//     default:
//       console.log('false');
//   }
// };
// isPositive('i');

///////////////////////////////////////////
// const getString = (arr) => {
//   let arr = ['a', 'e', 'i', 'o', 'u', 'y'];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 'a') {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(getString);

//////////////////////////////////////////////////////////////////
// Callback функции

// let sum = function (a, b) {
//   return a + b;
// };

// let diff = function (a, b) {
//   return a - b;
// };

// let mult = function (a, b, num, cb) {
//   // логика
//   return cb(a, b) * num;
// };

// let result = mult(1, 2, 3, sum);
// console.log(result);
// let result2 = mult(1, 2, 3, diff);
// console.log(result2);

/////////////////////////////////////////////////////////////////
