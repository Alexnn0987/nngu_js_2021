// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//   let arr = str.split();
//   console.log(arr);
// }

// let arr = stringToarray(str);
// //  [ 'Каждый охотник желает знать' ]

////////////////////////////////////////////////////////////
// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//   let delStr = str.substr(6, 8);
//   console.log(delStr);
// }

// let del = delete_characters(str);
// //  охотник

////////////////////////////////////////////////////////////
// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// let str = 'HTML JavaScript PHP';

// let insert_dash = (str) => {
//   return str.toUpperCase().replace(/\s/g, '-');
// };

// console.log(insert_dash(str));
// //  HTML-JAVASCRIPT-PHP

////////////////////////////////////////////////////////////
// 4. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// let str = 'string not starting with capital';

// let cursive_letter = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(cursive_letter(str));
// //  String not starting with capital

////////////////////////////////////////////////////////////
// 5. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// let str = 'каждый охотник желает знать';

// let capitalize = (str) => {
//   return str.replace(/(^|\s)\S/g, (text) => text.toUpperCase());
// };

// console.log(capitalize(str));
// //  Каждый Охотник Желает Знать

////////////////////////////////////////////////////////////
// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// let str = 'КаЖдЫй ОхОтНиК жЕлАеТ зНаТь';

// let change_register = (str) => {
//   return str.replace(/[\S]/g, (text) => {
//     if (text === text.toLowerCase()) {
//       return text.toUpperCase();
//     } else if (text === text.toUpperCase()) {
//       return text.toLowerCase();
//     }
//   });
// };
// console.log(change_register(str));
//  кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ

////////////////////////////////////////////////////////////
// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// let str = 'every., -/ hunter #! wishes ;: {} to $ % ^ & * know';

// let remove_char = (str) => {
//   return str.match(/\w{2,6}/g);
// };
// console.log(remove_char(str));
// //  [ 'every', 'hunter', 'wishes', 'to', 'know' ]

////////////////////////////////////////////////////////////
// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// let zeros = (num, len, sign) => {
//   if (num.length === len) {
//     return sign + num;
//   } else {
//     return zeros('0' + num, len, sign);
//   }
// };

// console.log(zeros(20, 5, '+'));
// +00020

////////////////////////////////////////////////////////////
// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// let comparison = (str1, str2) => {
//   if (str1.toUpperCase() === str2.toUpperCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(comparison('ABcdF', 'abCDf'));    //  true
// console.log(comparison('ABcdF', 'abGDf'));    //  false

////////////////////////////////////////////////////////////
// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

// let insensitive_search = (str1, str2) => {
//   return str1.toUpperCase().includes(str2.toUpperCase());
// };
// console.log(insensitive_search('Привет, Alex', 'Alex')); //  true
// console.log(insensitive_search('Привет, Alex', 'AlexEY')); //  false

////////////////////////////////////////////////////////////
// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// str = 'hEllo woRld';
// let initCap = (str) => {
//   return str.toLowerCase().replace(/(^|\s)\w/g, (str1) => {
//     return str1.toUpperCase().replace(/\s+/g, '');
//   });
// };
// console.log(initCap(str));   //  HelloWorld

////////////////////////////////////////////////////////////
// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// let initSnake = (str) => {
//   let lowerStr = str.replace(/[A-Z]/g, (str1) => {
//     return '_' + str1.toLowerCase();
//   });
//   return lowerStr.replace(/^_/, '');
// };
// console.log(initSnake('HelloWorld')); //  hello_world

////////////////////////////////////////////////////////////
// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// let repeatStr = (str, n) => {
//   let newStr = '';
//   for (let i = 0; i < n; i += 1) {
//     newStr += str;
//   }
//   return newStr;
// };

// console.log(repeatStr('Hello*', 3));  //  Hello*Hello*Hello*

////////////////////////////////////////////////////////////
// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// let pathname = '/home/user/dir/file.txt';
// let path = (pathname) => {
//   return pathname.split('/').pop();
// };
// console.log(path(pathname)); //  file.txt

////////////////////////////////////////////////////////////
// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// let str = 'Каждый охотник желает знать';
// let str1 = 'скрипт';
// let str2 = 'знать';

// String.prototype.endsWith = (substring) => {
//   let elStr = String(str.match(/(\S+)$/g));
//   if (elStr === substring) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(String.prototype.endsWith(str1));  // false
// console.log(String.prototype.endsWith(str2));  // rtue

////////////////////////////////////////////////////////////
// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// var str = 'Астрономия — Наука о небесных телах';

// function getSubstr(str, char, pos) {
//     ...ваш код...
// };

////////////////////////////////////////////////////////////
// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//     ...ваш код...
// };

////////////////////////////////////////////////////////////
// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     ...ваш код...
// };

////////////////////////////////////////////////////////////
// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     ...ваш код...
// };

////////////////////////////////////////////////////////////
// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// let str = '    Max is a good      boy     ';
// let strip = (str) => {
//   return str.trim().replace(/\s+/g, ' ');
// };

// console.log(strip(str));  //  Max is a good boy

////////////////////////////////////////////////////////////
// 22. Удалить лишние слова из строки
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// let str = 'Сила тяжести приложена к центру масс тела';
// let cutString = (str, n) => {
//   return str.split(' ').splice(0, n).join(' ');
// };

// console.log(cutString(str, 2));  //  Сила тяжести

////////////////////////////////////////////////////////////
// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// let str = 'abc def ghi jkl mno pqr stu';
// let findWord = (word, str) => {
//   return str.includes(word);
// };

// console.log(findWord('stu', str)); //  true
// console.log(findWord('sta', str)); //  false
