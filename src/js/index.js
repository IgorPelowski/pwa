import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

let count = 0;

const addButton = document.querySelector('.addButton');
const deleteButton = document.querySelector('.deleteButton');
const clock = document.querySelector('.clock');

function added (){
    count++;
    addNumber();
}
function deleted (){
    if(count<=0){
        return;
    }
    
    count--;
    addNumber();
}
addButton.addEventListener('click', added);
deleteButton.addEventListener('click', deleted);
addButton.addEventListener('click', colorChange);
deleteButton.addEventListener('click', colorChange2);

function addNumber(){
    clock.innerHTML=count;
}
function colorChange(){
    clock.classList.add('clock__animation');
        setTimeout(colorDelete, 2000);

}
function colorDelete(){
    clock.classList.remove('clock__animation');
}
function colorChange2(){
    clock.classList.add('clock__animation2');
        setTimeout(colorDelete2, 2000);

}
function colorDelete2(){
    clock.classList.remove('clock__animation2');
}



// function c (){
//     console.log(count)
//     setTimeout(c, 5000);
// }
// c();
