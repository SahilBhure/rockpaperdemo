const rock1 = document.querySelector('#rock1');
const paper1 = document.querySelector('#paper1');
const sccisor1 = document.querySelector('#sccisor1');
const rock2 = document.querySelector('#rock2');
const paper2 = document.querySelector('#paper2');
const sccisor2 = document.querySelector('#sccisor2');


const test = (this) => {
     this.style.background = 'red'; 
}




rock1.addEventListener('click',test);
paper1.addEventListener('click',test);
sccisor1.addEventListener('click',test);
rock2.addEventListener('click',test);
paper2.addEventListener('click',test);
sccisor2.addEventListener('click',test);