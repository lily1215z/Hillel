"use strict";

    let operator;
    let number;
    let number2;
    const operators = "+ - / * ** %";

    do {
        number = +prompt("Write number, please").trim();
        operator = prompt("Write operator, please").trim();
        number2 = +prompt("Write number2, please").trim();
    } while(!number || !number2 || operators.indexOf(operator) === -1);
    

function calc(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;
            break;
        case "-": return num1 - num2;
            break;
        case "*": return num1 * num2;
            break;
        case "/":
            if (num2 !== 0)
                return num1 / num2;
            break;
        case "**": return num1 ** num2;
            break;
        case "%": return num1 % num2;
            break;
    }
}

console.log(calc());