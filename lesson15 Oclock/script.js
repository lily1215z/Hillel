"use strict";


const timer = document.querySelector(".timer");

setInterval(time, 1000);

function time () {
    const start = new Date();
    let hours = start.getHours();
    let minutes = start.getMinutes();
    let seconds = start.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}