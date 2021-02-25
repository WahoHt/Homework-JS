//HW1
// Создать функцию которая будет удалять людей из
// массива по индексу, который мы передадим параметром.

// const arr = ["Vasya", "Petya", "Alexey"];

// function removeUser(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }
// let result = removeUser(arr, 1);
// console.log(result);

//HW2

// const blocks = document.getElementById('blocks')
// const redBlock = document.createElement('div');
// const blueBlock = document.createElement('div');
// const greenBlock = document.createElement('div');

// redBlock.style.background = 'red';
// redBlock.style.height = '100px';
// redBlock.style.width = '100px';
// redBlock.style.position = 'absolute'
// blocks.append(redBlock)

// blueBlock.style.background = 'blue';
// blueBlock.style.height = '100px';
// blueBlock.style.width = '100px';
// blueBlock.style.marginLeft = '60px';
// blueBlock.style.position = 'absolute';
// blueBlock.style.zIndex = '3';
// blueBlock.style.top = '70px';
// blueBlock.style.marginLeft = '70px';
// blocks.append(blueBlock)

// greenBlock.style.background = 'green';
// greenBlock.style.height = '100px';
// greenBlock.style.width = '100px';
// greenBlock.style.marginLeft = '120px';
// greenBlock.style.position = 'absolute';
// greenBlock.style.marginLeft = '140px';
// greenBlock.style.top = '130px'
// blocks.append(greenBlock)

//HW3

// const divHolder = document.getElementsByClassName('holder')
// for(objHolder of divHolder){
//   objHolder.style.margin = '0 auto';
//   objHolder.style.marginTop = '10px';
//   objHolder.style.marginBottom = '10px';
//   objHolder.style.width = '300px';
//   objHolder.style.height = '50px';
//   objHolder.style.border = 'solid #7922CC';
//   objHolder.style.borderRadius = '10px 10px 0 0';
//   objHolder.style.display = 'flex';
//   objHolder.style.flexWrap = 'wrap';
//   objHolder.style.overflow = 'hidden'
// }

// const divItem1 = document.createElement('div')
// divItem1.innerHTML = '1';
// divItem1.style.textAlign = 'center';
// divItem1.style.width = '50%';
// divItem1.style.height = '50%';
// divItem1.style.background = '#FD644D';
// divItem1.style.order = '1';
// const it1 = document.getElementsByClassName('holder')
// for(obj1 of it1){
//   obj1.append(divItem1)
// }
// const divItem2 = document.createElement('div')
// divItem2.innerHTML = '2'
// divItem2.style.textAlign = 'center';
// divItem2.style.flex = '0 1 33.33%';
// divItem2.style.width = '100px';
// divItem2.style.height = '50%';
// divItem2.style.background =  '#4983B2';
// divItem2.style.order = '4';
// const it2 = document.getElementsByClassName('holder')
// for(obj2 of it2){
//   obj2.append(divItem2)
// }

// const divItem3 = document.createElement('div')
// divItem3.innerHTML = '3'
// divItem3.style.textAlign = 'center';
// divItem3.style.padding = '0';
// divItem3.style.flex = '0 1 33.333%';
// divItem3.style.height = '50%';
// divItem3.style.background = '#663797';
// divItem3.style.order = '3';
// const it3 = document.getElementsByClassName('holder')
// for(obj3 of it3){
//   obj3.append(divItem3)
// }
// const divItem4 = document.createElement('div')
// divItem4.innerHTML = '4'
// divItem4.style.textAlign = 'center';
// divItem4.flex = '0 1 34.333%';
// divItem4.style.width = '100px';
// divItem4.style.height = '50%';
// divItem4.style.background = '#0E7F12';
// divItem4.style.order = '5';
// const it4 = document.getElementsByClassName('holder')
// for(obj4 of it4){
//   obj4.append(divItem4)
// }

// const divItem5 = document.createElement('div')
// divItem5.innerHTML = '5'
// divItem5.style.textAlign = 'center';
// divItem5.style.width = '50%';
// divItem5.style.height = '50%';
// divItem5.style.background = '#FDA429';
// divItem5.style.order = '2';
// const it5 = document.getElementsByClassName('holder')
// for(obj4 of it5){
//   obj4.append(divItem5)
// }

//HW4
// function sampleFunc() {
//   console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`);
// }

// function modificator(func) {
//   func('test','sample')
// }

// const testFunc = modificator(sampleFunc);

//HW5

const group = [
  {
    name: "Vova",
    lastName: "Krol",
    age: 20,
    notebook: false
  },
  {
    name: "Albert",
    lastName: "Pock",
    age: 23,
    notebook: true
  },
  {
    name: "Adolf",
    lastName: "Melk",
    age: 19,
    notebook: true
  }
];

// function getStudentsList(arrayOfStudents) {
//   for (let item of arrayOfStudents) {
//     console.log(`Name - ${item.name}, lastName - ${item.lastName}, Age - ${item.age}, Notebook - ${item.notebook}\n`);
//   }
// }
// getStudentsList(group);

function getStudentsList(arrayOfStudents){
  let string = '';
  for (let item of arrayOfStudents){
    for(let key in item){
      string += `${key} - ${item[key]}`
    }
  }
}

getStudentsList(group)