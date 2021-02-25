//HW1

// const p = document.getElementById('p')
// const div = document.getElementById('images')

// const fn = function(event){
//   if(event.target.id === 'p'){
//     div.style.display = 'block';
//   }
// }
// p.addEventListener('click',fn)

// const zoomImg =function(event){
//   div.style.transition = 'all 3s'
//   div.style.width = '200px'
//   div.style.height = '200px'
// }
// p.addEventListener('click',fn)
// div.addEventListener('mouseover',zoomImg)

// const clickNone = function(event){
//   div.style.display = 'none'
// }
// p.addEventListener('click',fn)
// div.addEventListener('click', clickNone)

//HW2
// const arr = [1,2,3,0,4,5,6];
// let perem = 0;
// const result = arr.reduceRight(function(sum,item){
//     if(item === 0){
//         perem = sum;
//     }else{
//         return sum + item;
//     }
// });

//HW3
// const arr = [1, 2, 3, 0, 4, 5, 6];
// let perem = 0;
// let val = arr.reduce(function (value, item, i) {
//   if (value > 10) {
//     perem = i;
//   } else {
//     return value + item;
//   }
// });
// console.log(perem);

//HW4

// const input = document.getElementById('inp')
// const button = document.getElementById('btn')

// const fn = function(){
//     console.log(input.value)
// }
// button.addEventListener('click',fn)

//HW5

// let fn = function(event){
//     event.target.innerText = `${event.target.innerText} ${event.target.href}`
// }
// let elem = document.getElementsByTagName('a')
// for(let key of elem){
//     key.addEventListener('mouseover',fn)
// }

//HW6

// const button = document.getElementById('btn')
// const pText = document.getElementById('pText')

// const fn = function(){
//     pText.style.display = 'none'
// }
// button.addEventListener('click',fn)

//HW7

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')
// const ball = document.getElementById('ball')

// const fnValInp = function(){
    // if(!isNaN(inp.value)){
        // if(inp.value > 600 || inp.value <= 0){
            // inp.value = 'Error'
        // }else{
            // ball.style.marginLeft = inp.value + 'px';
            // ball.style.animation = '1s linear 0s normal none infinite running rot';
            // ball.style.transform = 'rotate(0deg)'
            // ball.style.transform = 'rotate(360deg)'
        // }
//     }else{
//         inp.value = ''
//     }
// }
// btn.addEventListener('click',fnValInp)
