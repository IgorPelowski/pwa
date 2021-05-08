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

function addNumber(){
    clock.innerHTML=count;
}



// function c (){
//     console.log(count)
//     setTimeout(c, 5000);
// }
// c();
