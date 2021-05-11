console.log('hello another');

const clockJs = document.querySelector('.clock__js');
const loadData = document.querySelector('.loadData');

loadData.addEventListener('click', ()=>{
    let lol = localStorage.getItem('saved');
    clockJs.innerHTML = lol;
});

const deleteData = document.querySelector('.deleteData');
deleteData.addEventListener('click', ()=>{
    localStorage.setItem('saved', 0);
})