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
