"use strict";   

function greetings(name) {
    return this.welcome + " " + this.appeal + " " + name + this.wishes;
}

const doctor = {
    welcome : "Hello,",
    appeal : "dr.",
    wishes : "! Have a nice day",
};

const colleague = {
    welcome : "Hi,",
    appeal : "dear",
    wishes : "! Regards, John",
};

const greetingDoctor = greetings.bind(doctor);
console.log(greetingDoctor("Watson")); 

const greetingColleague = greetings.bind(colleague);
console.log(greetingColleague("Kristy")); 