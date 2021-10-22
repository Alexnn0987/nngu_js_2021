// ЗАДАНИЯ
// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// let squareIt = (a, b) => a ** b;
// console.log(squareIt(5, 5));        // 25

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// let sum = (a, b) => a + b;
// console.log(sum(6, 7));           // 13

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// let num = (a, b, c) => (a - b) / c;
// console.log(num(18, 6, 2));              // 6

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// let dayWeek = (num) => {
//   switch (num) {
//     case 1:
//       console.log('Понедельник');
//       break;
//     case 2:
//       console.log('Вторник');
//       break;
//     case 3:
//       console.log('Среда');
//       break;
//     case 4:
//       console.log('Четверг');
//       break;
//     case 5:
//       console.log('Пятница');
//       break;
//     case 6:
//       console.log('Суббота');
//       break;
//     case 7:
//       console.log('Воскресенье');
//       break;
//     default:
//       console.log('Нет такого дня недели');
//   }
// };
// dayWeek(6);          // Суббота

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// let num = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(num(7, 7));    // true

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// let numSum = (a, b) => {
//   sum = a + b;
//   if (sum > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(numSum(9, 9));   // true

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// let numNegative = (a) => {
//   if (a < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(numNegative(-3));     // true

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// let isNumberInRange = (num) => {
//   if (num > 0 && num < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isNumberInRange(9));        // true

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let isNumberInRange = (num) => {
//   if (num > 0 && num < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let getNewArr = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (isNumberInRange(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(getNewArr([-13, -2, 0, 4, 5, 7, 9, 11]));

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// let getDigitsSum = (digit) => {
//   let sumDigit = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     sumDigit = sumDigit + Number(digit[i]);
//   }
//   return sumDigit;
// };

// console.log(getDigitsSum(634));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// let getDigitsSum = (digit) => {
//   let sumDigit = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     sumDigit = sumDigit + +digit[i];
//   }
//   return sumDigit;
// };

// for (let j = 1; j < 2020; j += 1) {
//   if (getDigitsSum([j]) === 13) {
//     console.log(j);
//   }
// }

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// 15. Дан массив с числами. Выведите последовательно его элементы.

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
