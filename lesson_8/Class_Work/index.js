// Продвинутая работа с функциями

///////////////////////////////////////////////////////////////////////////
// Ключевое слово this

////////////////////////////////////////
//

// console.log(this);  // для браузера глобальный объект window
//////////////////////
// console.log(global);  // для Node.js

/////////////////////////////////////////

// function example() {
//   console.log(this);
// }
// example();

///////////////////////////////////////////

// var name = 'Alex';

// function example() {
//   console.log(this);
// }
// example();

// name = 'Max';
// console.log(global.name);

// почему нет name?!

/////////////////////////////////////////////

// let user = {
//   name: 'Alex',
//   age: '25',
//   getName: function () {
//     console.log('Alex');
//   },
// };

// user.getName();   // Alex

/////////////////
// тоже самое

// let user = {
//   name: 'Alex',
//   age: '25',
//   getName: function () {
//     console.log(this.name);
//   },
// };

// user.getName();   // Alex

///////////////////////////////
// тоже самое

// function getName() {
//   console.log(this.name);
// }
// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: getName,
// };

// user.getUserName();    //  Alex

///////////////////////////////

// function getName() {
//   console.log(this.name);
// }
// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: getName,
// };

// user.getUserName();

// let admin = {
//   name: 'Max',
//   age: '45',
//   getAdminName: getName,
// };

// admin.getAdminName();
// // Alex
// // Max

//////////////////////////////

// function getName() {
//   console.log(this);
// }
// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: getName,
// };

// let admin = {
//   name: 'Max',
//   age: '45',
//   getAdminName: getName,
// };

// user.getUserName();                    // { name: 'Alex', age: '25', getUserName: [Function: getName] }
// admin.getAdminName();                  // { name: 'Max', age: '45', getAdminName: [Function: getName] }

////////////////////////////////
// тоже самое

// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: function getName() {
//     console.log(this);
//   },
// };

// let admin = {
//   name: 'Max',
//   age: '45',
//   getAdminName: function getName() {
//     console.log(this);
//   },
// };

// user.getUserName();             // { name: 'Alex', age: '25', getUserName: [Function: getName] }
// admin.getAdminName();           // { name: 'Max', age: '45', getAdminName: [Function: getName] }

/////////////////////////////////

// function getName() {
//   console.log(this.name);
// }
// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: getName,
// };

// let user1 = {
//   name: 'Ivan',
//   age: '18',
//   getUserName: getName,
// };

// let admin = {
//   name: 'Max',
//   age: '45',
//   getAdminName: getName,
// };

// user.getUserName();        // Alex
// user1.getUserName();       // Ivan
// admin.getAdminName();      // Max

/////////////////////////////////
// Динамически
// function getName() {
//   console.log(this.name);
// }

// function setName(newName) {
//   this.name = newName;
//   console.log(this.name);
// }
// let user = {
//   name: 'Alex',
//   age: '25',
//   getUserName: getName,
//   setUserName: setName,
// };

// let user1 = {
//   name: 'Ivan',
//   age: '18',
//   getUserName: getName,
//   setUserName: setName,
// };

// let admin = {
//   name: 'Max',
//   age: '45',
//   getAdminName: getName,
//   setUserName: setName,
// };

// user.getUserName();
// user1.getUserName();
// admin.getAdminName();

// console.log(user);
// user.setUserName('Ira');
// user.getUserName();
// console.log(user);

///////////////////////////////////////////
//

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();   //  { testMethod: [Function: example] }

///////////////////////////////////////////

// let hero = {
//   name: 'Jon',
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: function () {
//     return hero.strange * hero.agility;
//   },
// };

// let dracula = {
//   name: 'Vlad',
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: function () {
//     return dracula.strange * dracula.agility;
//   },
// };

// console.log(hero.fight(), dracula.fight());  // 200 350

///////////////
// тоже самое
// хороший пример this

// function startFight() {
//   return this.strange * this.agility;
// }

// let hero = {
//   name: 'Jon',
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
// };

// let dracula = {
//   name: 'Vlad',
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log('Герой победил!! УРА');
// } else {
//   console.log('Провал, вы погибли');
// }
// // 200 350
// // Провал, вы погибли

/////////////////////////////////////////////////////////////////////////
// Ключевое слово this в стрелочных функциях
// при стрелочных функциях не работает

// let startFight = () => {
//   return this.strange * this.agility;
// };

// let hero = {
//   name: 'Jon',
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
// };

// let dracula = {
//   name: 'Vlad',
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log('Герой победил!! УРА');
// } else {
//   console.log('Провал. вы погибли');
// }
// // NaN NaN
// // Провал. вы погибли

//////////////////////////////////////////////

// let startFight = () => {
//   return this.strange * this.agility;
// };

// let hero = {
//   name: 'Jon',
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
//   sayName: function () {
//     return this.name;
//   },
// };

// let dracula = {
//   name: 'Vlad',
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log('Герой победил!! УРА');
// } else {
//   console.log('Провал. вы погибли');
// }

////////////////////////////////////////////////////////////////////////
// Практика
// Создать объект который будет описывать любой населенный пункт (на ваш выбор). Объект должен содержать свойства описывающие: название и численность. Так же объект должен содержать два метода: первый должен возвращать название города, а второй должен возвращать численность.

// let town = {
//   townName: 'Moscow',
//   population: '15 ml',
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
// };
// console.log(town.getTownName());   //  Moscow

// *Дополнительно, добавить метод, который будет устанавливать новое значение для выбранного свойства из объекта описывающего город.

// let town = {
//   townName: 'Moscow',
//   population: '15 ml',
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },

//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// console.log(town); //  проверяем значения до
// town.setSomeValue('townName', 'Paris');
// town.setSomeValue('population', '9 ml');
// console.log(town); //  проверяем значения после
// console.log(town.getTownName()); // Paris

/////////////////////////////////////////////////////////////////////////

// ДЗ. Задача 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el} : ${7 - el})`)
//     .filter((el, i, arr) => i < arr.length / 2);
// }

// console.log(sumSeven(arr));

/////////////////////////////////////////////////////////////////////////
// Работа с контекстом вызова

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// console.log(sayFulllName('Alex', 'Popov'));

// console.log(sayFulllName.call({ phrase: 'Hello!!' }, 'Ivan', 'Smirnov'));

///////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');

// console.log(boundFullName);

/////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');

// console.log(boundFullName());

/////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName
//   .bind({ phrase: 'Bye!' }, 'Max', 'petrov')
//   .bind({ phrase: 'Hello!' }, 'Kate', 'Petrova');

// console.log(boundFullName());
// // Bye! Max petrov

//////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');
// let bound2 = sayFulllName.bind({ phrase: 'Hello!' }, 'Kate', 'Petrova');

// console.log(boundFullName());
// console.log(bound2());
// // Bye! Max petrov
// // Hello! Kate Petrova

////////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');
// let bound2 = sayFulllName.bind({ phrase: 'Hello!' });

// console.log(boundFullName());
// console.log(bound2('Kate', 'Petrova'));
// // Bye! Max petrov
// // Hello! Kate Petrova

////////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');
// let bound2 = sayFulllName.bind({ phrase: 'Hello!' }, 'Kate');

// console.log(boundFullName());
// console.log(bound2('Petrova'));
// // Bye! Max petrov
// // Hello! Kate Petrova

////////////////////////////////////////

// function sayFulllName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFulllName.bind({ phrase: 'Bye!' }, 'Max', 'petrov');
// let sayHelloKate = sayFulllName.bind({ phrase: 'Hello!' }, 'Kate');

// console.log(boundFullName());
// console.log(sayHelloKate('Smirnova'));
// console.log(sayHelloKate('Petrova'));

// // Bye! Max petrov
// // Hello! Kate Smirnova
// // Hello! Kate Petrova

//////////////////////////////////////////////////////////////////////////////
// Практика
// ЗАДАЧА 1. Создайте второй объект описывающий город (первый возьмите из решения задачи №1). Второй объект должен содержать только свойства названия и численность.Используя метод call() / apply() вызовите методы объекта первого города в контексте объекта второго города.Используя метод bind(), изменить свойства объекта второго города на произвольные значения.

// let town = {
//   townName: 'Moscow',
//   population: '15 ml',
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },

//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// let town2 = {
//   townName: 'London',
//   population: '13ml',
// };

// console.log(town.getTownName());
// console.log(town.getTownName.call(town2));
// // Moscow
// // London

///////////////////////////

// let town = {
//   townName: 'London',
//   population: '13 ml',
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },

//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: 'Paris',
//   population: '20ml',
// };

// // console.log(town.getTownName());
// // console.log(town.getTownName.call(town2));
// console.log(town2);

// const bound = town.setSomeValue.bind(town2, 'townName', 'Moscow');
// bound();
// console.log(town2);

/////////////////////////////////////
//

// let town = {
//   townName: 'London',
//   population: '13 ml',
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },

//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: 'Paris',
//   population: '20ml',
// };

// // console.log(town.getTownName());
// // console.log(town.getTownName.call(town2));
// console.log(town2);

// const bound = town.setSomeValue.bind(town2);

// bound('townName', 'Moscow');
// bound('population', '15ml');
// bound('country', 'RUS');

// console.log(town2);

///////////////////////////////////////////////
// Задачи могут быть на собесе

// function test() {
//   const a = 0;
//   console.log(a);
// }
// test(); // 0

/////////////////////

// function test() {
//   const a = 0;
//   console.log(a);
// }
// const bound = test.bind({ a: 10 });
// bound();

//////////////////////

// function test() {
//   const a = 0;
//   console.log(this.a);
// }

// const bound = test.bind({ a: 10 });

// bound();
// // 10

////////////////////

// function test() {
//   const a = 0;
//   console.log(this.a);
// }
// test();
// // undefined

////////////////////

// function test(b) {
//   const a = 0;
//   console.log(b);
// }

// const bound = test.bind({ a: 10 }, 8);

// bound();
// // 8

////////////////////////////////////////////////////////////////////////////////
// Замыкание

// let a = 0;
// console.log(a);

// const test = () => {
//   a = 10;
// };

// test();
// console.log(a);

///////////////////

// function getFullName() {
//   const firstName = 'Alex';

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser);
// //  [Function: getSecondName]

///////////////////////////

// function getFullName() {
//   const firstName = 'Alex';

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser('Smirnov'));
// //  Alex Smirnov

//////////////////////////////

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// console.log(areaWithTen(230));
// // 50
// // 100
// // 2300

/////////////////////////////////

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(21));
// // 50
// // 100
// // 12
// // 84

///////////////////////////////////////////////
// Практика
// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10.

// Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

// const getVolume = (a) => {
//   return (b, c) => a * b * c;
// };

// const volumeSum = getVolume(10);

// console.log(volumeSum(4, 3));
// // 120

///////////////////////

// const getVol = (height) => (width, length) => height * width * length;
// const getAll = getVol(10);
// console.log(getAll(4, 5));
// console.log(getAll(3, 3));
// // 200
// // 90

////////////////////////

// const getVol = (height) => (width, length) => height * width * length;
// const getAll = getVol(10);
// console.log(getAll(4, 5));
// console.log(getAll(3, 3));

// const getAll2 = getVol(8);
// console.log(getAll2(35, 3));
// // 200
// // 90
// // 840
