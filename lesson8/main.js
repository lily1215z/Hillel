"use strict";  

const btnAdd = document.querySelector(".btn-add");
const boxAdd = document.querySelector(".box-add");
const btnClear = document.querySelector(".btn-clear");

btnAdd.addEventListener("click", function() {
    const ask = document.createElement("a"); 
    ask.href = "";                         
    ask.innerText = prompt("Type a link");
    ask.style = "display: block";  

    if(ask === null && " ") {  
        return;  
    } 
    boxAdd.appendChild(ask); 
});

btnClear.addEventListener("click", function() { 
    boxAdd.parentNode.removeChild(boxAdd);
});
