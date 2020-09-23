// "use strict";

const arr = [];     
const numbers = [];
const parse = [];    
const negative = [];  
const float = [];    
const evenPositive = [];   

let ask;

while (ask !== null) {  
    ask = prompt("Write what you want to write");

    if(ask !== null) {  
        arr.push(ask);
    }
}

for(let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if(!isNaN(value)) {  
        numbers.push(value);
    }
 
    if(parseInt(value) === Number(value)) {  
        parse.push(value);
    }

    if(Number(value) % 1 != 0) {  
        float.push(value);
    }

    if(value < 0) {     
        negative.push(value);
    }

    if(value > 0 && parseInt(value) === Number(value) && value % 2 == 0) { 
        evenPositive.push(value);
    }
}

let total = 0;     
for (let i = 0; i < float.length; i++){
    total += Number(float[i]);
}

let totalArithmetic = 0;                       
for (let i = 0; i < parse.length; i++) {
    totalArithmetic += Number(parse[i]);
}
let result = totalArithmetic / parse.length;

const infoDataBase = {
    allValues:  arr, 

    elements: arr.length, 

    minInteger:  Math.min(...parse), 

    maxInteger: Math.max(...parse), 

    arithmeticMean: result, 

    evenPositiveIntegerElements: evenPositive.length, 

    negativeElements: negative.length,

    fractionSum: total,
};
console.log(infoDataBase);


