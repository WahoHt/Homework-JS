//HW1
// Реализовать Числа Фибоначчи двумя способами (рекурсия и цикл)

// function fibonachi(num){
//     if(num <= 1){
//         return num
//     }else{
//         return fibonachi(num - 1) + fibonachi(num - 2)
//     }
// }
// const result = fibonachi(3)
// console.log(result)

// function fibonachi(num){
//     let a = 1;
//     let b = 1;
//     for(let i = 3;i<=num;i++){
//         let c = a + b;
//         a = b
//         b = c;
//     }
//     return b
// }
// const result = fibonachi(3)
// console.log(result)

//HW2
// Рассчитать сумму натуральных чисел до n (2 решения - рекурсия и цикл)

// function num(a){
//     let sum = 1;
//     for(let i = 2; i<=a; i++){
//         if(Number.isInteger(i)){
//            sum += i
//         }
//     }
//     return sum
// };
// const res = num(3);
// console.log(res)

// function num(a) {
//   if (a === 1) {
//     return 1;
//   } else {
//     return a + num(a - 1);
//   }
// }

// console.log(num(3));

//HW3

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

// Используя рекурсивный setTimeout.

// function printNumbers(from,to){
//     let start = from;
//     let interval = setInterval(function(){
//         console.log(start)
//         if(start === to){
//             clearInterval(interval)
//         }
//         start++
//     },1000)
// }

// printNumbers(1,4)

// function printNumbers(from,to){
//     let start = from
//     setTimeout(function starts(){
//         console.log(start);
//         if(start < to){
//             setTimeout(starts,1000)
//         }
//         start++
//     },1000)
// }
// printNumbers(2,5)

//HW4
// let i = 0;

// let id = setInterval(
// function(){
// i++;
// console.log("Прошло " + i + " сек.");
// if(i == 5){
// clearInterval(id);
// }
// },1000)

//HW5

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')
// const ul = document.getElementById('ulList')
// const li = document.getElementsByClassName('li')

// const fn = function(){
//     let arr = []
//     for(let item of li){
//         if(!isNaN(+item.innerText)){
//             arr.push(item.innerText);
//         }
//     }
//     let result = arr.reduce((acc,item)=> +item + +acc)
//     inp.value = `${arr.join(' + ')} = ${result}`
// }

// fn()