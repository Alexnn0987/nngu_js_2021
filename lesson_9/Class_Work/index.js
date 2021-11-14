///////////////////////////////////////////////////////////////////////////////
// Прототипы и классы.

//////////////////////////////////////////////////////////////
// Прототипы

// const user = {};

// console.log(user.__proto__);
// // [Object: null prototype] {}

//////////////////////////////////

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };
// const user = {
//   name: 'Alex',
//   __proto__: people,
// };

// console.log(people.getName());
// // undefined

/////////////////////////////////////
// могут спросить на сабеседовании

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: 'Alex',
//   __proto__: people,
// };

// const admin = {
//   name: 'Vasya',
//   __proto__: people,
// };

// console.log(user.getName());
// console.log(admin.getName());

////////////////////////////////////////////
// типо зацикливание
// const people = {
//   getName: function () {
//     return this.name;
//   },
//   __proto__: user,
// };

// const user = {
//   name: 'Alex',
//   __proto__: people,
// };

// //   const admin = {
// //     name: 'Vasya',
// //     __proto__: people,
// //   };

// console.log(user.getName());
// //   console.log(admin.getName());

//////////////////////////////////////////////

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: 'Alex',
//   __proto__: people,
// };

// const admin = {
//   __proto__: user,
// };

// console.log(admin.getName());   // Alex

////////////////////////////////////////////////
// Практика

// let animal = {
//   jumps: 'Прыжок!',
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: 'Заяц прыгнул!',
// };

// console.log(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3)
// // Заяц прыгнул!
// // Прыжок!
// // undefined
//////////////////////////////////////////////////////////////

// const arr = [];
// console.log(arr.__proto__);
// // Object(0) []

//////////////////////////////////

// const obj = {};
// console.log(obj);
// // {}

///////////////////////////////////

// const obj = {};
// console.log(obj.__proto__);
// // [Object: null prototype] {}

////////////////////////////////////////////////////////////////////////////////
// Функции конструкторы.

// function CreateUser() {
//   console.log('User CREATE');
// }

// new CreateUser();
// // User CREATE

////////////////////////////////////

// function CreateUser() {
//   console.log('User CREATE');
// }

// const user = CreateUser();

// console.log(user);
// // undefined

///////////////////////////////////

// function CreateUser() {
//   console.log('User CREATE');
// }

// const user = new CreateUser();

// console.log(user);
// // User CREATE
// // CreateUser {}

////////////////////////////////////////////////

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(userOne);
// console.log(userTwo);
// // CreateUser { userName: 'Alex', userAge: 25 }
// // CreateUser { userName: 'Max', userAge: 30 }

///////////////////////////////////////////////////

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
//   this.sayHi = function () {
//     return `HELLO! My name is ${this.userName}`;
//   };
// }

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(userOne.sayHi());
// console.log(userTwo.sayHi());
// // HELLO! My name is Alex
// // HELLO! My name is Max

//////////////////////////////////////////////////////

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
//   this.sayHi = function () {
//     return `HELLO! My name is ${this.userName}`;
//   };
// }

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(userOne);
// console.log(userTwo);
// // CreateUser {
// //     userName: 'Alex',
// //     userAge: 25,
// //     sayHi: [Function (anonymous)]
// //   }
// //   CreateUser {
// //     userName: 'Max',
// //     userAge: 30,
// //     sayHi: [Function (anonymous)]
// //   }

////////////////////////////////////////////////////////

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// console.log(CreateUser.prototype); //  {}
// CreateUser.prototype.sayHi = function () {
//   return `HELLO! My name is ${this.userName}`;
// };

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(userOne); //  CreateUser { userName: 'Alex', userAge: 25 }
// console.log(userTwo); //  CreateUser { userName: 'Max', userAge: 30 }

// console.log(userTwo.sayHi()); // HELLO! My name is Max

/////////////////////////////////////////////////////////////
// так не нужно делать, зачем...лучше предыдущим синтакисом...могут возникнуть ошибки
// function CreateUser(name, age) {
//   console.log({ ...this }, 'this');
//   this.userName = name;
//   this.userAge = age;
//   this.__proto__ = {
//     ...CreateUser.prototype,
//     sayHi2: function () {
//       return `STRANGE SAYHI`;
//     },
//   };
// }

// // console.log(CreateUser.prototype); //  {}
// CreateUser.prototype.sayHi = function () {
//   return `HELLO! My name is ${this.userName}`;
// };

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(CreateUser.prototype);
// console.log(userOne); //  CreateUser { userName: 'Alex', userAge: 25 }
// console.log(userTwo); //  CreateUser { userName: 'Max', userAge: 30 }

// console.log(userTwo.sayHi()); // HELLO! My name is Max

//////////////////////////////////////////////////

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// console.log(CreateUser.prototype); //  {}
// CreateUser.prototype.sayHi = function () {
//   return `HELLO! My name is ${this.userName}`;
// };
// CreateUser.prototype.sayBye = function () {
//   return `BYE! ${this.userName}`;
// };

// const userOne = new CreateUser('Alex', 25);
// const userTwo = new CreateUser('Max', 30);

// console.log(userOne); //  CreateUser { userName: 'Alex', userAge: 25 }
// console.log(userTwo); //  CreateUser { userName: 'Max', userAge: 30 }

// console.log(userTwo.sayHi()); // HELLO! My name is Max
// console.log(userTwo.sayBye()); // BYE! Max

///////////////////////////////////////////////////////
// Практика
// Реализовать функцию конструктор для создания открыток. Функция должна создавать объект открытки со свойствами from, to и метод show(). Метод должен возвращать строку в которой будут указаны значения свойств  from и to.
// Добавить в prototype создаваемого объекта метод заменяющий текущее значение  свойства from на новое переданное значение.

// function CreatePostCart(from, to) {
//   this.from = from;
//   this.to = to;
// }

// CreatePostCart.prototype.show = function () {
//   console.log(`${this.from} отправил открытку ${this.to}`);
// };

// CreatePostCart.prototype.setFromValue = function (newFrom) {
//   this.from = newFrom;
// };

// const firstCart = new CreatePostCart('Alex', 'Ivan');
// console.log(firstCart);
// firstCart.show();
// firstCart.setFromValue('Max');
// console.log(firstCart);
// firstCart.show();

// // CreatePostCart { from: 'Alex', to: 'Ivan' }
// // Alex отправил открытку Ivan
// // CreatePostCart { from: 'Max', to: 'Ivan' }
// // Max отправил открытку Ivan

///////////////////////////////
// мое решение
// function Postcard(congratulatory, custom) {
//   this.postCong = congratulatory;
//   this.postCus = custom;
// }

// Postcard.prototype.show = function () {
//   return ` ${this.postCong}`;
// };

// const postOne = new Postcard('new year', 2022);
// const postTwo = new Postcard('old year', 2020);
// console.log(postOne);
// console.log(postTwo);

////////////////////////////////////////////////////////////////////////////////
