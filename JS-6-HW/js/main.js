//HW1
// Создать функцию конструктор Animal c аргументами name, age, color.
// Написать логику для того, чтобы функцию можно было вызывать как с,
// так и без new:
// При вызове без new новый обьект все равно должен создаться

// function Animal(name, age, colour) {
//  ....
// }

// const rabbit = Animal('Name', 'Age', 'Colour'); // переадресовывает
//вызовы на new Animal

// function Animal(name, age, color) {
//   if (!new.target) {
//     return new Animal(name, age, color);
//   }
//   this.name = name;
//   this.age = age;
//   this.color = color;
// }
// const rabbit = Animal("Andrey", "21", "Red");
// console.log(rabbit);

//WH2
// Создайте функцию-конструктор Calculator, который
// создаёт объекты с такими методами:
// read() запрашивает два значения при помощи prompt и
// сохраняет их значение в свойствах объекта.
// setAction() запрашивает действие при помощи prompt,
// которые мы хотим сделать (+, -, / и т.д)
// doAction() выполняет действие, которое юзер ввел (будет
//   вызывать в себя методы sum, mul, min и т.д)
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// min() возвращает разницу введённых свойств.
// другие методы можете добавит если хотите
// (метод для квадратного корня и т.д.)
// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const tres = calculator.doAction(); // результат

// function Calculator() {
//   this.read = function () {
//     this.val1 = +prompt("Введите 1 число");
//     this.val2 = +prompt("Введите 2 число");
//   };
//   this.setAction = function () {
//     this.action = prompt("sum,mul,min?");
//   };
//   this.doAction = function () {
//     //Проверку если юзер ввёл действие которое ты не ожидаешь "Ошибка" или такого "действия нет"
//     if (this.action === "sum") {
//       return this.sum();
//     } else if (this.action === "mul") {
//       return this.mul();
//     } else if (this.action === "min"){
//       return this.min();
//     }else{
//       console.log("Такого действия нет")
//     }
//   };
//   this.sum = function () {
//     return this.val1 + this.val2;
//   };
//   this.mul = function () {
//     return this.val1 * this.val2;
//   };
//   this.min = function () {
//     return this.val1 - this.val2;
//   };
// }

// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const tres = calculator.doAction();
// console.log(tres);

//HW3

function Nums(...args) {
  this.args = args;
}
Nums.prototype.getSum = function () {
  let sum = 0;
  for (let i = 0; i < this.args.length; i++) {
    if (Number.isInteger(this.args[i])) {
      sum += this.args[i];
    }
  }
  return sum;
};

Nums.prototype.myFilterReverse = function () {
  let result = [];
  let newArr = this.args.filter(function (item) {
    return Number.isInteger(item);
  });
  for (let i = newArr.length; i > 0; i--) {
    result.push(newArr.pop());
  }
  return result;
};

const test = new Nums(1, 2, 3, 4, 1.5, 2.3);
console.log(test.getSum());
console.log(test.myFilterReverse());

//HW4
// Есть массив [1, 1, 2, 2, 3]
// Создать свой метод getUnique для любых массивов,
// который отфильтрует массив и оставит в нем только уникальные значения

// Подсказка: чтобы было легче почитайте про метод .includes()

// const arrs = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3];

// Array.prototype.getUnique = function () {
//   let arr = arrs.filter((item, i, arr1) => arr1.indexOf(item) === i);
//   return arr;
// };
// console.log(arrs.getUnique());

//HW5

// Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода
// для любых объектов:

// метод getKeySum, который найдет сумму значений всех ключей, которые true.
// метод reversKey который поменяет местави key и value (ключ и значение)
// Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}

let obj = { a: 1, b: 2, c: 3, d: false, e: 0 };

function twoMetod() {}
