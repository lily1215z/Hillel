"use strict";

let result = Number();
let op;
function startOperators() {
    op = prompt("Write operator * or +", "").trim();

    while(op !== "+" && op !== "*"){
        op = prompt("Write operator * or +", "").trim();
    }
    if(op !== "+") {
        result = Number(1);
    } else if(op !== "*") {
        result = Number(0);
    }
}
startOperators();


function resultValid(result) {
    return Number(result);
}

let ask;
function sum() {
    ask = Number(prompt("Write number more and more", ""));

    while(ask !== null) {
        ask = prompt("Write number more and more", "");
        if(/*ask.length <= 6 &&*/ +ask && parseInt(ask) && ask !== Infinity && ask !== -Infinity) {
            if(op === "+") {
                result += ask;
                alert(result);
            } else if(op === "*") {
                result *= ask;
                alert(result);
            } else {
               alert("Error"); 
            }
        }
    }
    return(result);
}
console.log(sum());

if(result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    alert("Number is very-very big. Try again");
} else {
    alert(`${result} ${op} ${result} = ${result}`);
}