//HW1
// let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'].join("|")
// console.log(arr)

//HW2
// const strings = String("Вася;Петя;Вова;Олег");

// const newArr = strings.split(';')
// console.log(newArr)

//HW3
// const hello2 = (param) => {
//   if(param = param){
//     return "Hello " + param
//   }else{
//     return "Hello,user"
//   }
// };
// console.log(hello2())

//HW4
// let arr = ["яблоко", "ананас", "груша"];

// arr = arr.map(function (item) {
//   return item.toUpperCase();
// });
// console.log(arr);

//HW5
// Написать функцию addOneForAll, которая может принять
// неограниченное кол-во аргументов.
// Добавить к каждому аргументу 1 и вернуть новый массив с новыми
// значениями.
// Пример:
// передал в массив такие числа - 1, 2, 3, 4
// функция добавляет к каждму числу + 1
// функция возвращает новый массив, в котором новые значения

// let addOneForAll = (...item) => {
//   for (let i = 0; i < item.length; i++) {
//     item[i]++;
//   }
//   return item;
// };
// const val = addOneForAll(1, 2, 3, 4);
// console.log(val);

// HW6

// Написать функцию getSum, которая может принять неограниченное
// кол-во аргументов и возвращает их сумму.

// let getSum = (...item) => {
//   let sum = 0;
//   for (let i = 0; i < item.length; i++) {
//     sum += item[i];
//   }
//   return sum;
// };

// const val = getSum(1, 2, 3, 4);
// console.log(val);

//HW7

// Есть массив [1, 'hello', 2, 3, 4, '5', '6', 7, null]. Отфильтровать
// массив так, чтобы остались только числа. Сделать можно любым способом
// из того, что учили.

// const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
// const numberArray = arr.filter(el => typeof el == "number");
// console.log(numberArray)

//HW8

// Написать функцию arrayTesting, которая принимает в себя любой массив
// (в аргументы)

// функция проверяет есть ли в массиве хоть одно true значение

// и если оно есть, то возвращаем из функции строку 'Нашли true значение',
// если его нет - 'Ничего нет'

// let arrayTesting = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == true) {
//       return "Нашли true значение";
//     }
//   }
//   return "Ничего нет";
// };

// const haveTrueValue = arrayTesting([0, false, null, 1]); // Нашли true значение (потому что есть хотябы одно true значение - 1)
// const dontHaveTrueValue = arrayTesting([0, false, null, 0]); // Ничего нет
// console.log(haveTrueValue);
// console.log(dontHaveTrueValue);
