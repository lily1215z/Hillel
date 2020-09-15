"use strict"

const user = {
  name : prompt("What is your name?", "Ivan"),
  surname : prompt("What is your surname?", "Ivanov"),
  age : prompt("How old are you?", "35"),
  job : prompt("What job do you like?", "web"),
  city : prompt("Where do you live?", "Odessa"),
  phoneNumber : prompt("What is your phone number?", "0969724353"),
};

const answer = confirm(
  `My name is ${user.name}, My surname is ${user.surname}, I am ${user.age}, I want to work a ${user.job}, I live in ${user.city}, My phone number is ${user.phoneNumber}`
);

alert(answer);

