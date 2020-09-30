"use strict";   

function getDivision(initialValue = 1) {
    let value = initialValue;

    return function(number) {
        value = number / Math.round(value);
        return value;
    };
}

const divide = getDivision(1);

console.log (divide(2)); 
console.log (divide(1));         
console.log (divide(7));          
console.log (divide(70));          
console.log (divide(2));          

const divide2 = getDivision(2);

console.log (divide2(1));  
console.log (divide2(7));  
console.log (divide2(70));  
console.log (divide2(2));  