// class ITCompany{
//     create(value,name,age){
//         if(value === 'Programmer'){
//             return new Programmer(name,age)
//         }
//         if(value === 'Tester'){
//             return new Tester(name,age)
//         }
//     }
// }

// class Human {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
// }

// class Programmer extends Human {
//     constructor(name,age){
//         super(name,age)
//         this.job = 'Programmer'
//     }
// }

// class Tester extends Human {
//     constructor(name,age){
//         super(name,age)
//         this.job = 'Tester'
//     }
// }

// const Company = new ITCompany();
// const programmer = Company.create('Programmer', 'Vlad', 20);
// console.log(programmer)


// const obj = {
//     a: '1',
//     b: '2',
//     c: '3',
//     e: '4',
//     o: '5'
// }
// for (let key in obj){
//     if('aeoiyu'.indexOf(key) !== -1){
//         Object.defineProperty(obj,key,{
//             writable :false,configurable :false
//         })
//     }
// }
// console.log(Object.getOwnPropertyDescriptors(obj))