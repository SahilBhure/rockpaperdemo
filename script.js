const rock1 = document.querySelector('#rock1');
const paper1 = document.querySelector('#paper1');
const sccisor1 = document.querySelector('#sccisor1');
const rock2 = document.querySelector('#rock2');
const paper2 = document.querySelector('#paper2');
const sccisor2 = document.querySelector('#sccisor2');

rock1.addEventListener("click", () => {handleClick(rock1)})
paper1.addEventListener("click", () => {handleClick(paper1)})
sccisor1.addEventListener("click", () => {handleClick(sccisor1)})
rock2.addEventListener("click", () => {handleClick(rock2)})
paper2.addEventListener("click", () => {handleClick(paper2)})
sccisor2.addEventListener("click", () => {handleClick(sccisor2)})

function handleClick(Element){
     if (Element.style.backgroundColor !== "red") {
          Element.style.backgroundColor = "red";
     } else {
          Element.style.backgroundColor = "gray"
     }
}

// paper1.addEventListener('click',test);
// sccisor1.addEventListener('click',test);
// rock2.addEventListener('click',test);
// paper2.addEventListener('click',test);
// sccisor2.addEventListener('click',test);