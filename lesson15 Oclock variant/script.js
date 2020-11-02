"use strict";

const timer = document.querySelector(".timer");

const start = 0;
let time = start * 60;

setInterval(one, 1000);
    
function one() {
    let min = Math.floor(time / 60);  
    min %= 60;
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    timer.innerHTML = `${min}:${sec}`;
    time++;
}